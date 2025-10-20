import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import {
  ArrowBackSVG,
  NotificationSVG,
  SupportSVG,
  ReturnRequestSVG,
} from "@/components";

export default function VerifyOrderReturnScreen() {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <ArrowBackSVG width={30} height={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Return Verification</Text>
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

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <ReturnRequestSVG width={80} height={80} color="#F66C2B" />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.orderIdContainer}>
            <Text style={styles.orderIdText}>Order KTh543Ju</Text>
          </View>

          <View style={styles.otpContainer}>
            <Text style={styles.otpText}>
              OTP code - <Text style={styles.otpCode}>4567</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Please wait while your code is been verified. This page automatically
          redirects you once confirmed
        </Text>
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 14,
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
  headerTitle: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
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
    alignItems: "center",
    gap: 44,
    marginTop: 65,
    paddingHorizontal: 25,
  },
  iconContainer: {
    width: 195,
    height: 195,
    borderRadius: 100,
    backgroundColor: "#0D4E60",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    width: "100%",
    gap: 20,
  },
  orderIdContainer: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#BFE3C6",
    paddingVertical: 10,
    paddingHorizontal: 103,
    alignItems: "center",
  },
  orderIdText: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "700",
    color: "#22212E",
    letterSpacing: 0.6,
  },
  otpContainer: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  otpText: {
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    lineHeight: 24,
  },
  otpCode: {
    fontWeight: "700",
  },
  footer: {
    position: "absolute",
    bottom: 48,
    left: 40,
    right: 40,
  },
  footerText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "400",
    color: "#707070",
    textAlign: "center",
    lineHeight: 22,
  },
});
