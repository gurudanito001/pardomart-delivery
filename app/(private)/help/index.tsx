import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";
import { DownArrowIconSVG } from "@/components/icons/DownArrowIconSVG";
import { AttachmentIconSVG } from "@/components/icons/AttachmentIconSVG";
import { ArrowBackSVG } from "@/components";
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from "react-native-safe-area-context";
import { toast } from 'sonner-native';
import { apiConfig } from '../../../api/config';
import { SupportApi } from '../../../api/endpoints/support-api';
import { CreateSupportTicketPayload, TicketCategory } from '../../../api/models';

export default function HelpScreen() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<TicketCategory | null>(null);
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const supportApi = useMemo(() => new SupportApi(apiConfig), []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      setSelectedImage(result.assets[0].uri);
      setBase64Image(result.assets[0].base64 || null);
    }
  };

  const handleSend = async () => {
    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }
    if (!category) {
      toast.error("Please select a category");
      return;
    }
    if (!description.trim()) {
      toast.error("Please enter a description");
      return;
    }

    setIsLoading(true);
    try {
      const payload: CreateSupportTicketPayload = {
        title,
        description,
        category,
        imageUrl: base64Image ? `data:image/jpeg;base64,${base64Image}` : undefined,
      };
      
      await supportApi.supportTicketsPost(payload);
      toast.success("Ticket submitted successfully");
      setTitle("");
      setCategory(null);
      setDescription("");
      setSelectedImage(null);
      setBase64Image(null);
      router.back();
    } catch (error: any) {
      console.error("Failed to submit ticket:", error);
      const message = error?.response?.data?.message || error?.message || "Failed to submit ticket";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const formatCategory = (cat: string) => {
    return cat.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <ArrowBackSVG width={30} height={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Ticket</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconCircle}>
              <NotificationSVG width={24} height={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconCircle}>
              <SupportSVG width={24} height={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>We are here to help</Text>
          <Text style={styles.helpSubtitle}>
            We have an active team standing by to answer you
          </Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Title</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter title"
                placeholderTextColor="#7C8BA0"
                value={title}
                onChangeText={setTitle}
              />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Category</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
              <Text style={[styles.input, styles.selectText]}>
                {category ? formatCategory(category) : "Select category"}
              </Text>
              <DownArrowIconSVG width={16} height={16} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Description</Text>
            <View style={[styles.inputContainer, styles.messageContainer]}>
              <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Describe your issue..."
                placeholderTextColor="#7C8BA0"
                value={description}
                onChangeText={setDescription}
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Attachment</Text>
            <TouchableOpacity style={styles.uploadContainer} onPress={pickImage}>
              {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.uploadedImage} contentFit="cover" />
              ) : (
                <View style={styles.uploadPlaceholder}>
                  <AttachmentIconSVG width={20} height={20} color="#7C8BA0" />
                  <Text style={styles.uploadText}>Tap to upload image</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.sendButton, isLoading && { opacity: 0.7 }]} 
            onPress={handleSend}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.sendText}>Send</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={Object.values(TicketCategory)}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => { setCategory(item); setModalVisible(false); }}>
                  <Text style={styles.modalItemText}>{formatCategory(item)}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: Platform.OS === "ios" ? 64 : 14,
    paddingBottom: 14,
    height: Platform.OS === "ios" ? 104 : 64,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },
  iconButton: {
    padding: 0,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 27,
  },
  helpSection: {
    marginTop: 9,
    marginBottom: 33,
  },
  helpTitle: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 7,
  },
  helpSubtitle: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#484C52",
  },
  formSection: {
    gap: 16,
    marginBottom: 33,
  },
  fieldContainer: {
    gap: 10,
  },
  label: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#000000",
    padding: 0,
  },
  selectText: {
    color: "#7C8BA0",
  },
  messageContainer: {
    height: 159,
    alignItems: "flex-start",
  },
  messageInput: {
    height: "100%",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    marginBottom: 40,
    marginTop: 10,
  },
  uploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FFFFFF",
    height: 120,
    overflow: 'hidden',
  },
  uploadPlaceholder: {
    alignItems: 'center',
    gap: 8,
  },
  uploadText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#7C8BA0",
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  sendButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    flex: 1,
  },
  sendText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 25,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 10,
    maxHeight: '50%',
  },
  modalItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  modalItemText: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    color: '#000',
  },
});
