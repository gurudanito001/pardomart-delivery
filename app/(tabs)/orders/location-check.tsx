import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { LocationErrorPinSVG } from "@/components/icons/LocationErrorPinSVG";
import { ExclamationIconSVG } from "@/components/icons/ExclamationIconSVG";
import { NavigationArrowSVG } from "@/components/icons/NavigationArrowSVG";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";
import { MenuButton } from '@/components';
import Svg, { Path } from "react-native-svg";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function LocationCheckScreen() {
  const insets = useSafeAreaInsets();

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/(tabs)/home");
    }
  };

  const BackArrowIcon = () => (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
      <Path
        d="M8.325 13.5L13.925 19.1L12.5 20.5L4.5 12.5L12.5 4.5L13.925 5.9L8.325 11.5H20.5V13.5H8.325Z"
        fill="white"
      />
    </Svg>
  );

  const handleCheckLocationSettings = () => {
    console.log("Check location settings");
  };

  const handleNotificationPress = () => {
    router.push("/(tabs)/inbox");
  };

  const handleSupportPress = () => {
    router.push("/(tabs)/help");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://api.builder.io/api/v1/image/assets/TEMP/f1d48e4287a613755f3318b4416005431e184595?width=856",
        }}
        style={styles.mapImage}
        resizeMode="cover"
      />

      <View style={styles.topBar}>
        <MenuButton />

        <View style={styles.topBarActions}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleNotificationPress}
            activeOpacity={0.7}
          >
            <NotificationSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleSupportPress}
            activeOpacity={0.7}
          >
            <SupportSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          styles.bottomSheet,
          { paddingBottom: Math.max(insets.bottom, 16) },
        ]}
      >
        <View style={styles.dragBar} />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        >
          <View style={styles.contentContainer}>
            <View style={styles.errorSection}>
              <LocationErrorPinSVG width={160} height={160} color="#C43D28" />

              <View style={styles.messageContainer}>
                <Text style={styles.errorTitle}>Location Error</Text>
                <Text style={styles.questionText}>
                  Are you sure you have arrived?
                </Text>
              </View>

              <View style={styles.warningContainer}>
                <View style={styles.warningIconWrapper}>
                  <View style={styles.warningIconCircle}>
                    <ExclamationIconSVG width={24} height={24} color="white" />
                  </View>
                </View>
                <View style={styles.warningTextContainer}>
                  <Text style={styles.warningText}>
                    Kindly confirm if you have gotten to the store because it
                    looks like you have not reached your destination
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.locationButton}
                onPress={handleCheckLocationSettings}
                activeOpacity={0.7}
              >
                <NavigationArrowSVG width={18} height={18} color="#000" />
                <Text style={styles.locationButtonText}>
                  Check location settings
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.goBackButton}
                onPress={handleGoBack}
                activeOpacity={0.7}
              >
                <BackArrowIcon />
                <Text style={styles.goBackButtonText}>Go back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  mapImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  topBar: {
    position: "absolute",
    top: 20,
    left: 21,
    right: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 20,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  topBarActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "55%",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#FFF",
    paddingTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 30,
    zIndex: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
  },
  dragBar: {
    width: 70,
    height: 5,
    backgroundColor: "#EEE",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 26,
  },
  contentContainer: {
    gap: 26,
  },
  errorSection: {
    alignItems: "center",
    gap: 26,
    paddingBottom: 20,
  },
  messageContainer: {
    alignItems: "center",
    gap: 0,
  },
  errorTitle: {
    fontFamily: "Raleway",
    fontSize: 24,
    fontWeight: "700",
    color: "#C43D28",
    textAlign: "center",
  },
  questionText: {
    fontFamily: "Raleway",
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  warningContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    alignSelf: "stretch",
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  warningIconWrapper: {
    width: 40,
    height: 40,
  },
  warningIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  warningTextContainer: {
    flex: 1,
  },
  warningText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#898A8D",
    lineHeight: 16,
  },
  buttonsContainer: {
    gap: 17,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    height: 53,
    paddingHorizontal: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  locationButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  goBackButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 55,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  goBackButtonText: {
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
  },
});
