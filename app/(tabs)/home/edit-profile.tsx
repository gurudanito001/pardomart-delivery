import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import {
  BackArrowIcon,
  NotificationSVG,
  SupportSVG,
  EditIconSVG,
  CameraIconSVG,
  DownArrowIconSVG,
} from "@/components/icons";
import profileService from "@/services/profile";
import { toast } from "@/lib/toast";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function EditProfile() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  const handleSaveChanges = () => {
    console.log("Save changes pressed");
  };

  useEffect(() => {
    let active = true;
    setLoading(true);
    profileService
      .getProfile()
      .then((profile) => {
        if (!active) return;
        setName(profile?.name ?? null);
        setEmail(profile?.email ?? null);
        setPhone(profile?.mobileNumber ?? null);
      })
      .catch((err) => {
        console.error("Failed to load profile", err);
        toast.error("Unable to load profile", {
          description: err?.response?.data?.message ?? err?.message ?? "Please try again.",
        });
      })
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <BackArrowIcon width={30} height={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit profile</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <SupportSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Loading profile...</Text>
          </View>
        ) : (
          <>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://api.builder.io/api/v1/image/assets/TEMP/8765f10a6ed08eb2d4c0dc4475a25e1b18347e4e?width=160",
            }}
            style={styles.profileImage}
          />
          <View style={styles.cameraButton}>
            <CameraIconSVG width={24} height={24} color="#FFF" />
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{name ?? "—"}</Text>
              <EditIconSVG width={20} height={20} color="#000" />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{email ?? "—"}</Text>
              <EditIconSVG width={20} height={20} color="#000" />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{phone ?? "—"}</Text>
              <EditIconSVG width={20} height={20} color="#000" />
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Bank Information</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Account name</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>—</Text>
              <EditIconSVG width={20} height={20} color="#000" />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Account Number</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>—</Text>
              <EditIconSVG width={20} height={20} color="#000" />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Bank name</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>—</Text>
              <DownArrowIconSVG width={16} height={16} color="#000" />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveChanges}
          >
            <Text style={styles.saveButtonText}>Save changes</Text>
          </TouchableOpacity>
        </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 14,
    paddingBottom: 14,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    color: "#000",
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 22,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    paddingVertical: 40,
    alignItems: "center",
    gap: 10,
  },
  loadingText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#484C52",
  },
  profileImageContainer: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 34,
    position: "relative",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E5E5E5",
  },
  cameraButton: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 27,
    gap: 20,
    marginBottom: 28,
  },
  fieldContainer: {
    gap: 10,
  },
  label: {
    color: "#000",
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
  },
  inputText: {
    flex: 1,
    color: "#484C52",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 6,
    backgroundColor: "#EFF7FF",
    borderRadius: 8,
    marginHorizontal: 22,
    marginBottom: 28,
  },
  sectionHeaderText: {
    color: "#000",
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 25,
  },
  buttonContainer: {
    paddingHorizontal: 21,
    paddingBottom: 40,
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#0085FF",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 120,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  saveButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 25,
  },
});
