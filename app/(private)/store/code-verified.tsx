import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  MenuButton,
  NotificationSVG,
  SupportSVG,
  DiplomaVerifiedSVG,
  Button,
} from "@/components";

export default function CodeVerifiedScreen() {
  const handleProceed = () => {
    console.log("Proceed pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MenuButton />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <SupportSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <DiplomaVerifiedSVG width={100} height={100} />

        <Text style={styles.title}>Code Verified Successfully</Text>

        <Text style={styles.subtitle}>
          Congratulations, your Order has been verified
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          title="Proceed"
          onPress={handleProceed}
          variant="primary"
          size="large"
          fullWidth
        />
      </View>
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
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 14,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 85,
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
  subtitle: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 21,
    paddingBottom: 35,
  },
});
