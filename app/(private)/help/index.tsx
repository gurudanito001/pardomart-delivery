import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";
import { DownArrowIconSVG } from "@/components/icons/DownArrowIconSVG";
import { AttachmentIconSVG } from "@/components/icons/AttachmentIconSVG";
import { ArrowBackSVG } from "@/components";

export default function HelpScreen() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleAttachment = () => {
    console.log("Attachment pressed");
  };

  const handleSend = () => {
    console.log("Send pressed", { subject, topic, message });
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
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
            <Text style={styles.label}>Subject</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter subject"
                placeholderTextColor="#7C8BA0"
                value={subject}
                onChangeText={setSubject}
              />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Topic</Text>
            <TouchableOpacity style={styles.inputContainer}>
              <Text style={[styles.input, styles.selectText]}>
                {topic || "select"}
              </Text>
              <DownArrowIconSVG width={16} height={16} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Message</Text>
            <View style={[styles.inputContainer, styles.messageContainer]}>
              <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Add your message here..."
                placeholderTextColor="#7C8BA0"
                value={message}
                onChangeText={setMessage}
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.attachmentButton}
            onPress={handleAttachment}
          >
            <AttachmentIconSVG width={24} height={24} color="black" />
            <Text style={styles.attachmentText}>Attachment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
  },
  attachmentButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    flex: 1,
  },
  attachmentText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 25,
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
});
