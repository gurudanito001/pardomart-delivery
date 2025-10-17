import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";
import { ArrowBackSVG } from "@/components";

export default function DeliveryVerificationScreen() {
  const [uploadedFile, setUploadedFile] = useState<string>(
    "dPcq4Col14ggET132-jpeg"
  );

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleNotifications = () => {
    router.push("/(tabs)/inbox");
  };

  const handleSupport = () => {
    router.push("/(tabs)/help");
  };

  const handleUploadFile = () => {
    // TODO: Implement file upload logic
    console.log("Upload file pressed");
  };

  const handleSubmit = () => {
    // TODO: Implement submit logic
    console.log("Submit pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <View style={styles.backButtonCircle}>
                <ArrowBackSVG width={30} height={30} color="#100A37" />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Verify Delivery</Text>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleNotifications}
            >
              <View style={styles.iconCircle}>
                <NotificationSVG width={24} height={24} color="#000" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSupport}>
              <View style={styles.iconCircle}>
                <SupportSVG width={24} height={24} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Instruction Text */}
          <Text style={styles.instructionText}>
            Kindly provide the delivery verification for this Order to complete
            this Order request
          </Text>

          {/* Example Image Section */}
          <View style={styles.exampleSection}>
            <View style={styles.exampleImageContainer}>
              <Image
                source={{
                  uri: "https://api.builder.io/api/v1/image/assets/TEMP/1804cb8424adf93fa961bd22fe273414c1e400da",
                }}
                style={styles.exampleImage}
                resizeMode="cover"
              />
              <Text style={styles.exampleText}>
                Please provide a picture that looks like this - The orders
                showing with the customer's house number for verification
              </Text>
            </View>
          </View>

          {/* Upload Section */}
          <View style={styles.uploadSection}>
            <View style={styles.uploadHeader}>
              <Text style={styles.uploadTitle}>Delivery picture</Text>
              <Text style={styles.requiredLabel}>Required*</Text>
            </View>

            <Text style={styles.uploadDescription}>
              Please provide a clear of the delivery with the house number. It
              should show the delivery box and the house number
            </Text>

            <View style={styles.divider} />

            <View style={styles.uploadActions}>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleUploadFile}
              >
                <Ionicons name="add" size={20} color="#FFF" />
                <Text style={styles.uploadButtonText}>Upload File</Text>
              </TouchableOpacity>

              {uploadedFile && (
                <View style={styles.fileInfo}>
                  <Ionicons name="document-outline" size={16} color="#7C7B7B" />
                  <Text style={styles.fileName}>{uploadedFile}</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        {/* Submit Button */}
        <View style={styles.submitContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 24,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    lineHeight: 22,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
    gap: 21,
  },
  instructionText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#484C52",
    lineHeight: 16,
  },
  exampleSection: {
    borderRadius: 16,
    backgroundColor: "#F0F2F4",
    padding: 27,
  },
  exampleImageContainer: {
    alignItems: "center",
    gap: 14,
  },
  exampleImage: {
    width: 264,
    height: 176,
    borderRadius: 8,
  },
  exampleText: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: "400",
    color: "#707070",
    textAlign: "center",
    lineHeight: 14,
  },
  uploadSection: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#BBB",
    padding: 20,
    gap: 19,
  },
  uploadHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  uploadTitle: {
    fontFamily: "Raleway",
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
  requiredLabel: {
    fontFamily: "Open Sans",
    fontSize: 8,
    fontWeight: "400",
    color: "#F00",
  },
  uploadDescription: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: "400",
    color: "#707070",
    lineHeight: 14,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#D9D9D9",
  },
  uploadActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#0085FF",
  },
  uploadButtonText: {
    fontFamily: "Raleway",
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF",
  },
  fileInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  fileName: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#7C7B7B",
  },
  submitContainer: {
    paddingHorizontal: 21,
    marginTop: 167,
  },
  submitButton: {
    height: 53,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  submitButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
    lineHeight: 25,
  },
});
