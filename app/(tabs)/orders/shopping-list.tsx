import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CompletedTabContent from "../../../components/shopping-list/CompletedTabContent";
import PendingTabContent from "../../../components/shopping-list/PendingTabContent";
import RemainingTabContent from "../../../components/shopping-list/RemainingTabContent";
import { colors, shadows, spacing, typography } from "../../../styles/theme";
import { ArrowBackSVG, NotificationSVG, SupportSVG } from "@/components";

export type TabType = "remaining" | "pending" | "completed";

export default function ShoppingListScreen() {
  const [selectedTab, setSelectedTab] = useState<TabType>("remaining");

  const handleGoBack = () => {
    router.back();
  };

  const handleNotifications = () => {
    console.log("Open notifications");
  };

  const handleSupport = () => {
    console.log("Open support");
  };

  const handleResumeClick = () => {
    console.log("Resume shopping");
  };

  const handleProceedToBagging = () => {
    console.log("Proceed to bagging");
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "remaining":
        return <RemainingTabContent onResumeClick={handleResumeClick} />;
      case "pending":
        return <PendingTabContent />;
      case "completed":
        return <CompletedTabContent />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <ArrowBackSVG width={30} height={30} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Shopping List</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconCircle}>
              <NotificationSVG width={24} height={24} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconCircle}>
              <SupportSVG width={24} height={24} color="#000000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabContentContainer}
        >
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "remaining" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("remaining")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "remaining" && styles.activeTabText,
              ]}
            >
              Remaining
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === "pending" && styles.activeTab]}
            onPress={() => setSelectedTab("pending")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "pending" && styles.activeTabText,
              ]}
            >
              Pending
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "completed" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("completed")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "completed" && styles.activeTabText,
              ]}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Tab Content */}
      <View style={styles.content}>{renderTabContent()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    color: "#000000",
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
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    paddingHorizontal: 25,
    paddingTop: 19,
    backgroundColor: colors.background,
  },
  tabContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  tab: {
    paddingHorizontal: 23,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  activeTab: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ...shadows.md,
  },
  tabText: {
    fontSize: 14,
    fontWeight: typography.weights.medium,
    fontFamily: typography.families.accent,
    color: colors.textPrimary,
    lineHeight: 14,
  },
  activeTabText: {
    color: colors.background,
    fontWeight: typography.weights.bold,
  },
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
