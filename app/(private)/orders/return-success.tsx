import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";
import { DiplomaVerifiedSVG } from "@/components/icons/DiplomaVerifiedSVG";
import { ArrowBackSVG } from "@/components/icons/ArrowBackSVG";

export default function ReturnSuccessScreen() {
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

  const handleCompleted = () => {
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
            <DiplomaVerifiedSVG width={100} height={100} />
            <Text style={styles.title}>Order Returned Successfully</Text>
            <Text style={styles.subtitle}>
              Congratulations, your Order has been verified{"\n"}and you have
              completed Return
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.completedButton}
            onPress={handleCompleted}
          >
            <Text style={styles.completedButtonText}>Completed</Text>
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
    marginBottom: 139,
  },
  headerLeft: {
    width: 168,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
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
  mainContent: {
    flex: 1,
    justifyContent: "flex-start",
  },
  successContent: {
    width: 260,
    alignSelf: "center",
    alignItems: "center",
    gap: 19,
  },
  title: {
    fontFamily: "Raleway",
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    lineHeight: 30,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
    lineHeight: 20,
    textAlign: "center",
  },
  buttonContainer: {
    paddingBottom: 47,
  },
  completedButton: {
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
  completedButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
    lineHeight: 25,
  },
});
