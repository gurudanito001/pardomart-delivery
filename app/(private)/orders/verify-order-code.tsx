import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ArrowBackButtonSVG,
  ArrowBackSVG,
  NotificationSVG,
  SupportSVG,
} from "../../../components/icons";

export default function VerifyOrderCode() {
  const handleBackPress = () => {
    router.back();
  };

  const handleProceed = () => {
    router.push("/(tabs)/orders/order-verified");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <ArrowBackSVG width={30} height={30} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Order Verification</Text>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconCircle}>
              <NotificationSVG width={24} height={24} color="#000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconCircle}>
              <SupportSVG width={24} height={24} color="#000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Order Code</Text>
          <Text style={styles.subtitle}>
            This is the order code for the delivery
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.codeText}>44FRDDESH</Text>
          </View>

          <TouchableOpacity
            style={styles.proceedButton}
            onPress={handleProceed}
          >
            <Text style={styles.proceedButtonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 27,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
  },

  backButton: {
    width: 30,
    height: 30,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    flex: 1,
    marginLeft: 12,
  },

  headerActions: {
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
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
  },

  mainContent: {
    paddingHorizontal: 27,
    paddingTop: 0,
    gap: 21,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#2B2829",
    lineHeight: 32,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Open Sans",
    color: "#2B2829",
    letterSpacing: 0.7,
    marginTop: -13,
  },

  codeBox: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#7C7B7B",
    paddingVertical: 14,
    paddingHorizontal: 118,
    justifyContent: "center",
    alignItems: "center",
  },

  codeText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Open Sans",
    color: "#000",
    letterSpacing: 3,
    textAlign: "center",
  },

  proceedButton: {
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

  proceedButtonText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#FFF",
    lineHeight: 25,
    textAlign: "center",
  },
});
