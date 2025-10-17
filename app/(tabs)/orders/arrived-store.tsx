import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import {
  MenuButton,
  NotificationSVG,
  SupportSVG,
} from "@/components";
import * as RNSVG from "react-native-svg";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const MessageIcon = () => (
  <RNSVG.Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <RNSVG.Rect width={30} height={30} rx={15} fill="#0085FF" />
    <RNSVG.Path
      d="M15 8.925C18.7125 8.925 21.75 11.3415 21.75 14.325C21.75 17.3085 18.7125 19.725 15 19.725C14.163 19.725 13.3598 19.6035 12.6173 19.3875C10.6463 21.075 8.25 21.075 8.25 21.075C9.82275 19.5023 10.0725 18.4425 10.1063 18.0375C8.95875 17.0723 8.25 15.7628 8.25 14.325C8.25 11.3415 11.2875 8.925 15 8.925Z"
      fill="white"
    />
  </RNSVG.Svg>
);

const PhoneIcon = () => (
  <RNSVG.Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <RNSVG.Rect
      x={0.5}
      y={0.5}
      width={29}
      height={29}
      rx={14.5}
      stroke="#0085FF"
    />
    <RNSVG.Path
      d="M18.1618 20.2498C17.7043 20.2498 17.0616 20.0843 16.0993 19.5467C14.929 18.8904 14.0239 18.2845 12.86 17.1237C11.7378 16.0022 11.1917 15.2761 10.4274 13.8853C9.56395 12.315 9.71114 11.4919 9.87567 11.1401C10.0716 10.7196 10.3608 10.4681 10.7347 10.2185C10.947 10.0794 11.1717 9.96016 11.4059 9.86228C11.4293 9.8522 11.4511 9.8426 11.4706 9.83392C11.5866 9.78166 11.7624 9.70267 11.985 9.78705C12.1336 9.84283 12.2663 9.95697 12.4739 10.162C12.8998 10.582 13.4818 11.5174 13.6964 11.9768C13.8406 12.2864 13.936 12.4908 13.9362 12.72C13.9362 12.9884 13.8012 13.1953 13.6374 13.4187C13.6067 13.4606 13.5762 13.5007 13.5467 13.5396C13.3683 13.774 13.3292 13.8417 13.355 13.9627C13.4072 14.2057 13.797 14.9292 14.4375 15.5684C15.0781 16.2075 15.7807 16.5727 16.0247 16.6247C16.1508 16.6517 16.22 16.6109 16.4618 16.4262C16.4965 16.3997 16.5322 16.3723 16.5694 16.3449C16.8193 16.159 17.0166 16.0275 17.2786 16.0275H17.28C17.5081 16.0275 17.7033 16.1264 18.0268 16.2895C18.4486 16.5024 19.4122 17.0768 19.8347 17.5031C20.0403 17.7103 20.1549 17.8425 20.2109 17.9909C20.2953 18.2142 20.2158 18.3893 20.164 18.5065C20.1554 18.526 20.1457 18.5473 20.1357 18.571C20.037 18.8048 19.9171 19.029 19.7773 19.2408C19.5282 19.6135 19.2757 19.902 18.8543 20.0981C18.638 20.2005 18.4011 20.2524 18.1618 20.2498Z"
      fill="black"
    />
  </RNSVG.Svg>
);

const BackArrowIcon = () => (
  <RNSVG.Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <RNSVG.Path
      d="M19.6278 21.993C19.8661 22.2135 20 22.5125 20 22.8243C20 23.1361 19.8661 23.4352 19.6278 23.6556C19.3895 23.8761 19.0662 24 18.7292 24C18.3921 24 18.0689 23.8761 17.8306 23.6556L9.37313 15.8313C9.25486 15.7223 9.16102 15.5927 9.09699 15.4501C9.03296 15.3074 9 15.1545 9 15C9 14.8455 9.03296 14.6926 9.09699 14.5499C9.16102 14.4073 9.25486 14.2777 9.37313 14.1687L17.8306 6.34435C18.0689 6.12387 18.3921 6 18.7292 6C19.0662 6 19.3895 6.12387 19.6278 6.34435C19.8661 6.56483 20 6.86387 20 7.17568C20 7.48749 19.8661 7.78653 19.6278 8.00702L12.07 14.999L19.6278 21.993Z"
      fill="black"
    />
  </RNSVG.Svg>
);

const CloseIcon = () => (
  <RNSVG.Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <RNSVG.Path
      d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z"
      fill="black"
    />
  </RNSVG.Svg>
);

const NavigateIcon = () => (
  <RNSVG.Svg width={36} height={36} viewBox="0 0 37 36" fill="none">
    <RNSVG.Path
      d="M18.7756 3.37499C10.5504 3.26389 3.83558 9.97874 3.94667 18.2039C4.05636 26.0923 10.4794 32.5153 18.3678 32.625C26.5943 32.7375 33.3078 26.0226 33.1953 17.7975C33.087 9.90772 26.6639 3.48467 18.7756 3.37499ZM25.2514 12.3215L19.4689 25.4362C19.1321 26.1724 18.0078 25.9284 18.0078 25.1156V18.8437C18.0078 18.7691 17.9781 18.6976 17.9254 18.6449C17.8726 18.5921 17.8011 18.5625 17.7265 18.5625H11.456C10.646 18.5625 10.4014 17.4466 11.1347 17.1091L24.2501 11.3203C24.3902 11.2556 24.5468 11.2354 24.6988 11.2625C24.8508 11.2896 24.9907 11.3626 25.0999 11.4718C25.209 11.5809 25.2821 11.7209 25.3092 11.8729C25.3362 12.0248 25.3161 12.1814 25.2514 12.3215Z"
      fill="black"
    />
  </RNSVG.Svg>
);

const RouteTimeline = () => (
  <RNSVG.Svg width={34} height={173} viewBox="0 0 34 173" fill="none">
    <RNSVG.Path
      d="M17 33L17 163"
      stroke="#2CAF0B"
      strokeWidth={1.14039}
      strokeLinecap="round"
    />
    <RNSVG.Rect width={33.0714} height={33.0714} rx={15.9655} fill="#2CAF0B" />
    <RNSVG.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5354 7.98276C21.2515 7.98276 25.0883 11.8196 25.0883 16.5357C25.0883 21.2518 21.2515 25.0887 16.5354 25.0887C11.8193 25.0887 7.98242 21.2518 7.98242 16.5357C7.98242 11.8196 11.8193 7.98276 16.5354 7.98276ZM16.5354 9.2657C12.5266 9.2657 9.26537 12.5269 9.26537 16.5357C9.26537 20.5445 12.5266 23.8057 16.5354 23.8057C20.5441 23.8057 23.8054 20.5445 23.8054 16.5357C23.8054 12.5269 20.5441 9.2657 16.5354 9.2657ZM16.2456 12.3408C16.6006 12.3408 16.8871 12.6282 16.8871 12.9823V16.7644L19.7994 18.5007C20.103 18.6828 20.2031 19.0763 20.0217 19.3808C19.9011 19.5818 19.6882 19.6938 19.4701 19.6938C19.358 19.6938 19.2451 19.6647 19.1416 19.604L15.9172 17.6804C15.7239 17.5641 15.6041 17.3546 15.6041 17.1288V12.9823C15.6041 12.6282 15.8915 12.3408 16.2456 12.3408Z"
      fill="white"
    />
    <RNSVG.Path
      d="M16.0959 34.0973C16.5523 33.5326 17.4132 33.5326 17.8697 34.0973L22.3948 39.6957C22.9976 40.4414 22.4668 41.553 21.5079 41.553H12.4576C11.4987 41.553 10.9679 40.4414 11.5707 39.6957L16.0959 34.0973Z"
      fill="#0E0D26"
    />
    <RNSVG.Circle cx={17} cy={166} r={7} fill="#2CAF0B" />
  </RNSVG.Svg>
);

const DoubleChevronIcon = () => (
  <RNSVG.Svg width={19} height={20} viewBox="0 0 19 20" fill="none">
    <RNSVG.Path
      d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z"
      fill="white"
    />
    <RNSVG.Path
      d="M7 18.23L8.77 20L18.77 10L8.77 0L7 1.77L15.23 10L7 18.23Z"
      fill="white"
    />
  </RNSVG.Svg>
);

const RoutePathSVG = () => (
  <RNSVG.Svg
    width={189}
    height={276}
    viewBox="0 0 179 276"
    fill="none"
    style={styles.routePathSvg}
  >
    {/* dashed, gradient stroke with arrow marker at start */}
    <RNSVG.Defs>
      <RNSVG.LinearGradient
        id="paint0_linear_route"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <RNSVG.Stop offset="0" stopColor="#FFB169" />
        <RNSVG.Stop offset="1" stopColor="#2C2C2C" stopOpacity={0.12} />
      </RNSVG.LinearGradient>

      {/* simple triangle marker to act as an arrow */}
      <RNSVG.Path id="arrowHead" d="M0 0 L6 3 L0 6 z" fill="#FFB169" />
    </RNSVG.Defs>

    <RNSVG.Path
      d="M164.492 274.125L174.686 203.512C179.626 169.287 174.301 134.366 159.385 103.169C134.595 51.3223 85.8962 14.9799 29.1387 5.96937L2.46094 1.73413"
      stroke="url(#paint0_linear_route)"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeDasharray="8 8"
      fill="none"
    />

    {/* place the arrow near the route start using a small transform */}
    <RNSVG.G transform="translate(2, -2) scale(1)">
      <RNSVG.Use href="#arrowHead" x="0" y="0" />
    </RNSVG.G>
  </RNSVG.Svg>
);

const StartMarker = () => (
  <View style={styles.startMarkerContainer}>
    <View style={styles.startMarkerOuter}>
      <View style={styles.startMarkerMiddle}>
        <RNSVG.Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
          <RNSVG.Rect
            x={1.44141}
            y={0.966644}
            width={16.789}
            height={16.789}
            rx={8.39449}
            transform="rotate(3.5 1.44141 0.966644)"
            fill="white"
          />
          <RNSVG.Circle
            cx={9.30818}
            cy={9.85795}
            r={4.19725}
            transform="rotate(3.5 9.30818 9.85795)"
            fill="#FEB97A"
          />
        </RNSVG.Svg>
      </View>
    </View>
  </View>
);

const EndMarker = () => (
  <View style={styles.endMarkerContainer}>
    <View style={styles.endMarkerInner} />
  </View>
);

const SendIcon = () => (
  <RNSVG.Svg
    width={14}
    height={14}
    viewBox="0 0 16 14"
    fill="none"
    style={styles.sendIcon}
  >
    <RNSVG.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7214 6.25522L14.3144 2.01451C14.4281 1.82884 14.3349 1.67189 14.2888 1.61264C14.2427 1.5534 14.1131 1.42007 13.8857 1.46048L1.9958 3.59756C1.78594 3.63586 1.71645 3.78924 1.69684 3.85241C1.6765 3.91431 1.64992 4.07579 1.7962 4.21879L10.4286 12.5095C10.5924 12.6666 10.7786 12.627 10.8505 12.6029C10.9238 12.5783 11.094 12.4978 11.1074 12.2812L11.4027 7.26914L5.92288 5.6634C5.62217 5.57525 5.44695 5.27617 5.53195 4.99513C5.61696 4.71409 5.93127 4.55793 6.23198 4.64609L11.7214 6.25522ZM15.314 1.17186C15.5678 1.61152 15.5662 2.12973 15.301 2.56509L12.5513 7.06126L12.2386 12.3698C12.2045 12.9421 11.8294 13.4168 11.2574 13.608C10.6859 13.7998 10.0627 13.6594 9.63014 13.2443L0.997722 4.95361C0.600752 4.57216 0.453227 4.02671 0.6076 3.52584C0.765283 3.02335 1.20378 2.64961 1.75365 2.55119L13.6429 0.414438C14.2407 0.306259 14.8375 0.531898 15.2004 1.00307C15.2426 1.05854 15.2805 1.11375 15.314 1.17186Z"
      fill="black"
    />
  </RNSVG.Svg>
);

export default function ArrivedStoreScreen() {

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleClose = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleArrivedStore = () => {
    console.log("Arrived at store");
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <ImageBackground
          source={{
            uri: "https://api.builder.io/api/v1/image/assets/TEMP/f1d48e4287a613755f3318b4416005431e184595?width=856",
          }}
          style={styles.mapBackground}
          imageStyle={styles.mapImage}
          resizeMode="cover"
        >
          <View style={styles.routeVisualization}>
            <View style={styles.routePath}>
              <RoutePathSVG />
            </View>
            <View style={styles.startMarker}>
              <StartMarker />
            </View>
            <View style={styles.endMarker}>
              <EndMarker />
            </View>
            <View style={styles.sendIconWrapper}>
              <SendIcon />
            </View>
          </View>

          <View style={styles.originLabel}>
            <Text style={styles.originLabelText}>Jewel Osco</Text>
          </View>
          <View style={styles.destinationLabel}>
            <Text style={styles.destinationLabelText}>Wes Town</Text>
          </View>

          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <MenuButton />
              <View style={styles.headerRight}>
                <TouchableOpacity style={styles.iconButton}>
                  <NotificationSVG width={22} height={22} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <SupportSVG width={24} height={24} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomCard}>
        <View style={styles.barIndicator} />

        <View style={styles.cardHeader}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.orderTitle}>Order KTh543Ju</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <CloseIcon />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.cardScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.storeCard}>
            <View style={styles.storeInfo}>
              <Image
                source={{
                  uri: "https://api.builder.io/api/v1/image/assets/TEMP/dbf8d1142bcb6b2582427f0f75f675f0cd1e0a16?width=66",
                }}
                style={styles.storeLogo}
              />
              <View style={styles.storeDetails}>
                <Text style={styles.storeName}>Jewel Osco</Text>
                <Text style={styles.storeAddress}>
                  Wesside 120 ny jersey 2.5 Miles
                </Text>
              </View>
            </View>
            <View style={styles.contactIcons}>
              <MessageIcon />
              <PhoneIcon />
            </View>
          </View>

          <View style={styles.customerCard}>
            <View style={styles.customerInfo}>
              <Image
                source={{
                  uri: "https://api.builder.io/api/v1/image/assets/TEMP/e8982379bf4437085e115a280c121ce36487d5e0?width=60",
                }}
                style={styles.customerAvatar}
              />
              <Text style={styles.customerName}>Mr Damilare Adebanjo</Text>
            </View>
            <View style={styles.contactIcons}>
              <MessageIcon />
              <PhoneIcon />
            </View>
          </View>

          <View style={styles.routeContainer}>
            <View style={styles.routeTimelineContainer}>
              <RouteTimeline />
            </View>
            <View style={styles.routeDetails}>
              <View style={styles.routeSection}>
                <View style={styles.locationInfo}>
                  <Text style={styles.locationTitle}>Jewel Osco Store</Text>
                  <Text style={styles.locationAddress}>
                    Chicago Illinious, 60612, United states
                  </Text>
                </View>
                <View style={styles.navigateButton}>
                  <NavigateIcon />
                  <Text style={styles.navigateText}>Navigate</Text>
                </View>
              </View>

              <View style={styles.distanceSection}>
                <Text style={styles.distanceLabel}>Distance</Text>
                <Text style={styles.distanceValue}>4.5km</Text>
              </View>

              <View style={styles.destinationSection}>
                <Text style={styles.destinationText}>Bellaire Town</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.arrivedButton}
            onPress={handleArrivedStore}
          >
            <View style={styles.buttonIcon}>
              <DoubleChevronIcon />
            </View>
            <Text style={styles.arrivedButtonText}>Arrived Store</Text>
          </TouchableOpacity>
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
  mapContainer: {
    flex: 1,
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1100,
    zIndex: 0,
  },
  mapBackground: {
    flex: 1,
    position: "relative",
    justifyContent: "flex-start",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    alignSelf: "flex-start",
  },
  routeVisualization: {
    position: "absolute",
    top: 76,
    left: 94,
    width: 221,
    height: 293,
    transform: [{ rotate: "3.5deg" }],
  },
  routePath: {
    position: "absolute",
    top: 24,
    left: 26,
  },
  routePathSvg: {
    width: 189,
    height: 262,
    transform: [{ rotate: "3.5deg" }],
  },
  startMarker: {
    position: "absolute",
    top: 0,
    left: 15,
  },
  startMarkerContainer: {
    width: 46,
    height: 46,
    padding: 13,
    borderRadius: 39,
    backgroundColor: "rgba(255, 210, 170, 0.20)",
    transform: [{ rotate: "3.5deg" }],
  },
  startMarkerOuter: {
    padding: 8.394,
    borderRadius: 20.986,
    backgroundColor: "rgba(254, 185, 122, 0.40)",
  },
  startMarkerMiddle: {
    padding: 4.197,
    borderRadius: 20.986,
    backgroundColor: "#FFF",
  },
  endMarker: {
    position: "absolute",
    top: 271,
    left: 187,
  },
  endMarkerContainer: {
    width: 32,
    height: 32,
    transform: [{ rotate: "6.435deg" }],
  },
  endMarkerInner: {
    width: 18,
    height: 19,
    padding: 4.562,
    borderRadius: 23.948,
    backgroundColor: "#292662",
    position: "absolute",
    left: -9,
    top: 10,
    transform: [{ rotate: "-40.34deg" }],
  },
  sendIconWrapper: {
    position: "absolute",
    top: 13,
    left: 28,
  },
  sendIcon: {
    width: 14,
    height: 14,
    color: "#000",
  },
  originLabel: {
    position: "absolute",
    top: 55,
    left: 89,
    backgroundColor: "#FFF",
    paddingHorizontal: 11.404,
    paddingVertical: 5,
    borderRadius: 33.071,
    borderWidth: 1,
    borderColor: "#F9F9F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2.281 },
    shadowOpacity: 0.05,
    shadowRadius: 6.842,
    elevation: 2,
    transform: [{ rotate: "3.5deg" }],
  },
  destinationLabel: {
    position: "absolute",
    top: 380,
    left: 233,
    backgroundColor: "#FFF",
    paddingHorizontal: 11.404,
    paddingVertical: 5,
    borderRadius: 27.369,
    borderWidth: 1,
    borderColor: "#F9F9F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2.281 },
    shadowOpacity: 0.05,
    shadowRadius: 6.842,
    elevation: 2,
    transform: [{ rotate: "3.5deg" }],
  },
  originLabelText: {
    color: "#454545",
    fontFamily: "Poppins",
    fontSize: 12.544,
    fontWeight: "400",
    letterSpacing: 0.376,
  },
  destinationLabelText: {
    color: "#454545",
    fontFamily: "Open Sans",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0.33,
  },
  headerContainer: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
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
  bottomCard: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.4,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 2,
    overflow: "hidden",
  },
  cardScroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 4,
    paddingBottom: 18,
  },
  barIndicator: {
    width: 70,
    height: 5,
    backgroundColor: "#EEE",
    alignSelf: "center",
    borderRadius: 3,
    marginBottom: 13,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 29,
  },
  backButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  orderTitle: {
    color: "#22212E",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  closeButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  storeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B4BED4",
    borderRadius: 16,
    padding: 10,
    paddingHorizontal: 17,
    marginBottom: 13,
    height: 56,
  },
  storeInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  storeLogo: {
    width: 33,
    height: 33,
    borderRadius: 17,
  },
  storeDetails: {
    gap: 2,
    width: 147,
    height: 36,
  },
  storeName: {
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#000",
  },
  storeAddress: {
    fontSize: 10,
    fontFamily: "Open Sans",
    fontWeight: "400",
    color: "#484C52",
  },
  contactIcons: {
    flexDirection: "row",
    gap: 10,
  },
  customerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B4BED4",
    borderRadius: 16,
    paddingVertical: 11,
    paddingHorizontal: 19,
    marginBottom: 23,
    height: 52,
  },
  customerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  customerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 32,
  },
  customerName: {
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#000",
  },
  routeContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 23,
  },
  routeTimelineContainer: {
    width: 34,
  },
  routeDetails: {
    flex: 1,
    gap: 25,
  },
  routeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  locationInfo: {
    flex: 1,
    gap: 7,
    width: 197,
  },
  locationTitle: {
    color: "#797979",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.48,
  },
  locationAddress: {
    color: "#797979",
    fontFamily: "Poppins",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0.3,
  },
  navigateButton: {
    alignItems: "center",
    gap: 4,
    width: 69,
  },
  navigateText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.42,
  },
  distanceSection: {
    gap: 7,
  },
  distanceLabel: {
    color: "#797979",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.48,
  },
  distanceValue: {
    color: "#797979",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.48,
  },
  destinationSection: {
    marginTop: 0,
  },
  destinationText: {
    color: "#797979",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.48,
  },
  arrivedButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0085FF",
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 132,
    paddingRight: 4,
    paddingBottom: 3,
    paddingLeft: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    position: "relative",
    height: 55,
    gap: 79,
  },
  buttonIcon: {
    position: "absolute",
    left: 4,
    top: 4,
    width: 49,
    height: 48,
    backgroundColor: "#046DCE",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
  arrivedButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
    left: 132,
    top: 15,
    width: 126,
    height: 25,
  },
});
