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
import { MenuButton } from "@/components";
import Svg, {
  Path,
  Circle,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

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

  const RouteOverlay = () => (
    <View style={styles.routeOverlay}>
      <View style={styles.startLocationLabel}>
        <Text style={styles.locationLabelText}>Bellaire Town</Text>
      </View>

      <View style={styles.startLocationMarker}>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.innerCircleWhite}>
              <View style={styles.innerCircleOrange} />
            </View>
          </View>
        </View>
      </View>

      <Svg
        width={179}
        height={276}
        viewBox="0 0 179 276"
        fill="none"
        style={styles.routePath}
      >
        <Defs>
          <LinearGradient
            id="gradient"
            x1="0.726153"
            y1="-41.9718"
            x2="119.343"
            y2="199.91"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0.18937" stopColor="#FFB169" />
            <Stop offset="1" stopColor="#000000" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Path
          d="M164.488 274.125L174.682 203.512C179.623 169.287 174.298 134.366 159.381 103.169C134.591 51.3223 85.8923 14.9799 29.1348 5.96935L2.45703 1.73412"
          stroke="url(#gradient)"
          strokeWidth="3.42118"
          strokeLinecap="round"
          strokeDasharray="6.84 6.84"
        />
      </Svg>

      <View style={styles.endLocationMarker}>
        <View style={styles.endMarkerInner} />
      </View>

      <View style={styles.endLocationLabel}>
        <Text style={styles.locationLabelText}>Wes Town</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://api.builder.io/api/v1/image/assets/TEMP/f1d48e4287a613755f3318b4416005431e184595?width=856",
        }}
        style={styles.mapImage}
        resizeMode="cover"
      />

      <RouteOverlay />

      <View style={[styles.topBar, { top: insets.top + 14 }]}>
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
  routeOverlay: {
    position: "absolute",
    top: 104,
    left: 89,
    width: 247,
    height: 336,
    zIndex: 5,
  },
  startLocationLabel: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingHorizontal: 11.404,
    paddingVertical: 6,
    borderRadius: 33.071,
    borderWidth: 1,
    borderColor: "#F9F9F9",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2.281 },
    shadowOpacity: 0.05,
    shadowRadius: 6.842,
    elevation: 2,
    transform: [{ rotate: "3.5deg" }],
  },
  locationLabelText: {
    color: "#454545",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.376,
  },
  startLocationMarker: {
    position: "absolute",
    top: 14,
    left: 15,
    width: 46,
    height: 46,
    transform: [{ rotate: "3.5deg" }],
  },
  outerCircle: {
    width: 46,
    height: 46,
    borderRadius: 39,
    backgroundColor: "rgba(255, 210, 170, 0.20)",
    justifyContent: "center",
    alignItems: "center",
  },
  middleCircle: {
    padding: 8.394,
    borderRadius: 20.986,
    backgroundColor: "rgba(254, 185, 122, 0.40)",
  },
  innerCircleWhite: {
    width: 18,
    height: 18,
    borderRadius: 20.986,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircleOrange: {
    width: 10,
    height: 10,
    borderRadius: 8.39449,
    backgroundColor: "#FEB97A",
  },
  routePath: {
    position: "absolute",
    top: 24,
    left: 26,
  },
  endLocationMarker: {
    position: "absolute",
    bottom: 40,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.14 },
    shadowOpacity: 0.1,
    shadowRadius: 13.685,
    elevation: 2,
    transform: [{ rotate: "6.435deg" }],
  },
  endMarkerInner: {
    width: 22,
    height: 23,
    borderRadius: 23.948,
    backgroundColor: "#292662",
    transform: [{ rotate: "-40.34deg" }],
  },
  endLocationLabel: {
    position: "absolute",
    bottom: 24,
    right: -22,
    paddingHorizontal: 11.404,
    paddingVertical: 6,
    borderRadius: 27.369,
    borderWidth: 1,
    borderColor: "#F9F9F9",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2.281 },
    shadowOpacity: 0.05,
    shadowRadius: 6.842,
    elevation: 2,
    transform: [{ rotate: "3.5deg" }],
  },
  topBar: {
    position: "absolute",
    left: 21,
    right: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 20,
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
    height: 400,
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
    gap: 21,
  },
  errorSection: {
    alignItems: "center",
    gap: 26,
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
    lineHeight: 34,
  },
  questionText: {
    fontFamily: "Raleway",
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    lineHeight: 34,
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
    paddingVertical: 14,
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
    lineHeight: 25,
  },
  goBackButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 55,
    paddingHorizontal: 120,
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
    lineHeight: 25,
  },
});
