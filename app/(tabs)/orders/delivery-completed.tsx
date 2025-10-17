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
import { DeliveryTruckFilledSVG } from "@/components/icons/DeliveryTruckFilledSVG";
import Svg, { Circle, Path } from "react-native-svg";
import { ArrowBackSVG } from "@/components/icons/ArrowBackSVG";

export default function DeliveryCompletedScreen() {
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

  const handleDone = () => {
    router.push("/(tabs)/orders");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <View style={styles.backButtonCircle}>
                <ArrowBackSVG width={30} height={30} color="#100A37" />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Delivery Completed</Text>
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
        <View style={styles.mainContent}>
          <View style={styles.successContent}>
            <DeliveryTruckFilledSVG width={100} height={100} color="#90E07C" />
            <Text style={styles.title}>Delivery Completed</Text>
            <Text style={styles.subtitle}>
              Congratulations,{"\n"}your Delivery has been completed
            </Text>
          </View>
        </View>

        {/* Done Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneButtonText}>Done</Text>
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
    marginBottom: 199,
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
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backArrow: {
    position: "absolute",
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
    paddingBottom: 45,
  },
  doneButton: {
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
  doneButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
    lineHeight: 25,
  },
});
