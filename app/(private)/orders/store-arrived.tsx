import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import {
  MenuSVG,
  NotificationSVG,
  SupportSVG,
  ShoppingBagIconSVG,
} from "@/components/icons";
import { colors, typography, borderRadius, shadows } from "@/styles/theme";

export default function ArrivedStoreScreen() {
  const handleStartShopping = () => {
    router.push("/(tabs)/orders/shopping-list" as any);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <MenuSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <NotificationSVG width={22} height={22} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <SupportSVG width={24} height={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.illustrationContainer}>
            <Image
              source={{
                uri: "https://api.builder.io/api/v1/image/assets/TEMP/2606f94dcf3cd1a70095ddce10de471b5ffa2498?width=544",
              }}
              style={styles.illustration}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              Congratulations,{"\n"}You have arrived store
            </Text>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.iconCircle}>
              <ShoppingBagIconSVG width={25} height={25} color="#FFF" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>
                This Order includes shopping, you should now proceed to shopping
                the items for the customer
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartShopping}
        >
          <Text style={styles.startButtonText}>Start Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 14,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  headerRight: {
    flexDirection: "row",
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: 370,
    alignSelf: "center",
    alignItems: "center",
    gap: 26,
    marginTop: 50,
  },
  illustrationContainer: {
    width: 272,
    alignItems: "center",
    gap: 26,
  },
  illustration: {
    width: 272,
    height: 272,
    aspectRatio: 1,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontFamily: typography.families.accent,
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    alignSelf: "stretch",
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B4BED4",
    ...shadows.md,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  infoTextContainer: {
    flex: 1,
  },
  infoText: {
    color: "#898A8D",
    fontFamily: typography.families.secondary,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 21,
    paddingVertical: 21,
    backgroundColor: "#FFF",
  },
  startButton: {
    width: "100%",
    height: 55,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    alignItems: "center",
    justifyContent: "center",
    ...shadows.md,
  },
  startButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: typography.families.accent,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 25,
  },
});
