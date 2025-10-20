import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";
import { SubmitFilledSVG } from "@/components/icons/SubmitFilledSVG";
import { ArrowBackSVG } from "@/components/icons/ArrowBackSVG";

export default function ReturnDeliverySuccessScreen() {
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

  const handleProceed = () => {
    router.push("/(tabs)/orders");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <ArrowBackSVG width={30} height={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.backText}>back</Text>
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

        <View style={styles.mainContent}>
          <View style={styles.successContent}>
            <SubmitFilledSVG width={100} height={100} />
            <Text style={styles.title}>Submitted successfully</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
            <Text style={styles.proceedButtonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 21,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
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
  backText: {
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
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
  },
  successContent: {
    width: 267,
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontFamily: "Raleway",
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    lineHeight: 30,
    textAlign: "center",
  },
  buttonContainer: {
    paddingBottom: 45,
  },
  proceedButton: {
    height: 53,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  proceedButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
    lineHeight: 25,
    textAlign: "center",
  },
});
