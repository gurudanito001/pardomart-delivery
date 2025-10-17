import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { NotificationSVG, SupportSVG } from "@/components/icons";
import { DiplomaVerifiedSVG } from "@/components/icons/DiplomaVerifiedSVG";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const BackArrowIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 31 30" fill="none">
    <Path
      d="M20.1278 21.993C20.3661 22.2135 20.5 22.5125 20.5 22.8243C20.5 23.1361 20.3661 23.4352 20.1278 23.6556C19.8895 23.8761 19.5662 24 19.2292 24C18.8921 24 18.5689 23.8761 18.3306 23.6556L9.87313 15.8313C9.75486 15.7223 9.66102 15.5927 9.59699 15.4501C9.53296 15.3074 9.5 15.1545 9.5 15C9.5 14.8455 9.53296 14.6926 9.59699 14.5499C9.66102 14.4073 9.75486 14.2777 9.87313 14.1687L18.3306 6.34435C18.5689 6.12387 18.8921 6 19.2292 6C19.5662 6 19.8895 6.12387 20.1278 6.34435C20.3661 6.56483 20.5 6.86387 20.5 7.17568C20.5 7.48749 20.3661 7.78653 20.1278 8.00702L12.57 14.999L20.1278 21.993Z"
      fill="black"
    />
  </Svg>
);

export default function SuccessScreen() {
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.push("/(tabs)/orders");
  };

  const handleOpenNotifications = () => {
    router.push("/(tabs)/inbox");
  };

  const handleSupport = () => {
    router.push("/(tabs)/help");
  };

  const handleDoneShopping = () => {
    router.push("/(tabs)/orders");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addressContainer}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <BackArrowIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleOpenNotifications}
          >
            <View style={styles.notificationCircle}>
              <NotificationSVG width={24} height={24} color="#000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleSupport}>
            <View style={styles.supportCircle}>
              <SupportSVG width={24} height={24} color="#000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.successContent}>
          <DiplomaVerifiedSVG width={100} height={100} />
          <Text style={styles.title}>Shopping Completed</Text>
          <Text style={styles.message}>
            Congratulations, your Order has been verified{"\n"}and you have
            completed shopping
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={handleDoneShopping}
        >
          <Text style={styles.doneButtonText}>Done Shopping</Text>
        </TouchableOpacity>
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
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addressContainer: {
    width: 168,
    alignItems: "flex-start",
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerIcons: {
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
  notificationCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  supportCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 85,
  },
  successContent: {
    width: 260,
    alignItems: "center",
    gap: 19,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Raleway",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
  },
  message: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
  },
  buttonContainer: {
    paddingHorizontal: 21,
    paddingBottom: 21,
  },
  doneButton: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#0085FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  doneButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 25,
  },
});
