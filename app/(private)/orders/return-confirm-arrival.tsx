import React from "react";
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
import { MenuButton, NotificationSVG, SupportSVG } from "@/components";
import * as RNSVG from "react-native-svg";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const MessageIcon = () => (
  <RNSVG.Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <RNSVG.Rect width={30} height={30} rx={15} fill="#0085FF" />
    <RNSVG.Path
      d="M15 8.92499C18.7125 8.92499 21.75 11.3415 21.75 14.325C21.75 17.3085 18.7125 19.725 15 19.725C14.163 19.725 13.3598 19.6035 12.6173 19.3875C10.6463 21.075 8.25 21.075 8.25 21.075C9.82275 19.5022 10.0725 18.4425 10.1063 18.0375C8.95875 17.0722 8.25 15.7627 8.25 14.325C8.25 11.3415 11.2875 8.92499 15 8.92499Z"
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
  <RNSVG.Svg width={37} height={36} viewBox="0 0 37 36" fill="none">
    <RNSVG.Path
      d="M18.7053 3.37499C10.4801 3.26389 3.76527 9.97874 3.87636 18.2039C3.98605 26.0923 10.4091 32.5153 18.2975 32.625C26.524 32.7375 33.2375 26.0226 33.125 17.7975C33.0167 9.90772 26.5936 3.48467 18.7053 3.37499ZM25.181 12.3215L19.3985 25.4362C19.0618 26.1724 17.9375 25.9284 17.9375 25.1156V18.8437C17.9375 18.7691 17.9078 18.6976 17.8551 18.6449C17.8023 18.5921 17.7308 18.5625 17.6562 18.5625H11.3857C10.5757 18.5625 10.331 17.4466 11.0644 17.1091L24.1798 11.3203C24.3199 11.2556 24.4765 11.2354 24.6285 11.2625C24.7804 11.2896 24.9204 11.3626 25.0296 11.4718C25.1387 11.5809 25.2118 11.7209 25.2388 11.8729C25.2659 12.0248 25.2458 12.1814 25.181 12.3215Z"
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
      d="M16.5373 7.98276C21.2534 7.98276 25.0903 11.8196 25.0903 16.5357C25.0903 21.2518 21.2534 25.0887 16.5373 25.0887C11.8212 25.0887 7.98438 21.2518 7.98438 16.5357C7.98438 11.8196 11.8212 7.98276 16.5373 7.98276ZM16.5373 9.2657C12.5286 9.2657 9.26732 12.5269 9.26732 16.5357C9.26732 20.5445 12.5286 23.8057 16.5373 23.8057C20.5461 23.8057 23.8073 20.5445 23.8073 16.5357C23.8073 12.5269 20.5461 9.2657 16.5373 9.2657ZM16.2476 12.3408C16.6025 12.3408 16.889 12.6282 16.889 12.9823V16.7644L19.8013 18.5007C20.1049 18.6828 20.205 19.0763 20.0237 19.3808C19.9031 19.5818 19.6901 19.6938 19.472 19.6938C19.36 19.6938 19.2471 19.6647 19.1436 19.604L15.9191 17.6804C15.7258 17.5641 15.6061 17.3546 15.6061 17.1288V12.9823C15.6061 12.6282 15.8935 12.3408 16.2476 12.3408Z"
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
    width={190}
    height={266}
    viewBox="0 0 190 266"
    fill="none"
    style={styles.routePathSvg}
  >
    <RNSVG.Defs>
      <RNSVG.LinearGradient
        id="paint0_linear_1287_2836"
        x1="191.755"
        y1="307.722"
        x2="58.5935"
        y2="73.5323"
        gradientUnits="userSpaceOnUse"
      >
        <RNSVG.Stop offset="0.18937" stopColor="#FFB169" />
        <RNSVG.Stop offset="1" stopOpacity="0" />
      </RNSVG.LinearGradient>
    </RNSVG.Defs>
    <RNSVG.Path
      d="M9.00187 2.21151L3.1377 73.3153C0.295434 107.778 7.7424 142.309 24.5358 172.538C52.4449 222.774 103.271 256.075 160.473 261.604L187.359 264.203"
      stroke="url(#paint0_linear_1287_2836)"
      strokeWidth="3.42118"
      strokeLinecap="round"
      strokeDasharray="6.84 6.84"
    />
  </RNSVG.Svg>
);

const StartMarker = () => (
  <View style={styles.startMarkerContainer}>
    <View style={styles.startMarkerOuter}>
      <View style={styles.startMarkerMiddle}>
        <RNSVG.Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
          <RNSVG.Rect
            x="17.4805"
            y="17.7217"
            width="16.789"
            height="16.789"
            rx="8.39449"
            transform="rotate(180 17.4805 17.7217)"
            fill="white"
          />
          <RNSVG.Circle
            cx="9.08791"
            cy="9.32726"
            r="4.19725"
            transform="rotate(180 9.08791 9.32726)"
            fill="#FEB97A"
          />
        </RNSVG.Svg>
      </View>
    </View>
  </View>
);

const SendIconMarker = () => (
  <View style={styles.sendIconContainer}>
    <View style={styles.sendIconCircle}>
      <RNSVG.Svg width={15} height={16} viewBox="0 0 15 16" fill="none">
        <RNSVG.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.27578 3.14138L2.47985 1.62774C2.26981 1.56126 2.14486 1.70649 2.10073 1.77294C2.0566 1.83939 1.96448 2.01651 2.06647 2.24654L7.4235 14.2705C7.51861 14.4825 7.68533 14.5114 7.75148 14.5137C7.81663 14.5172 7.97921 14.498 8.07599 14.3004L13.6457 2.6802C13.7511 2.4598 13.6613 2.27336 13.6183 2.20385C13.5742 2.13313 13.4496 1.97562 13.2377 2.02497L8.33877 3.18272L8.31791 9.48512C8.31673 9.83098 8.07798 10.1053 7.78427 10.0973C7.49055 10.0894 7.25316 9.80086 7.25434 9.45499L7.27578 3.14138ZM1.3923 0.811544C1.74432 0.412328 2.2428 0.261849 2.73491 0.416252L7.81989 2.0216L13.0086 0.795348C13.5681 0.663561 14.1285 0.92324 14.4712 1.47567C14.8143 2.02753 14.8524 2.7319 14.5737 3.31403L9.00403 14.9342C8.74772 15.4686 8.26449 15.7858 7.74024 15.7686C7.21351 15.7484 6.7325 15.3916 6.48515 14.8354L1.12862 2.8121C0.858585 2.20782 0.90965 1.50656 1.26164 0.981991C1.30322 0.92077 1.34577 0.864314 1.3923 0.811544Z"
          fill="black"
        ></RNSVG.Path>
      </RNSVG.Svg>
    </View>
  </View>
);

export default function ReturnConfirmArrivalScreen() {
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

  const handleConfirmArrival = () => {
    console.log("Confirmed arrival");
  };

  const handleMessage = () => {
    console.log("Open message");
  };

  const handleCall = () => {
    console.log("Make call");
  };

  const handleNavigate = () => {
    console.log("Open navigation");
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
            <View style={styles.endMarker}>
              <StartMarker />
            </View>
            <View style={styles.sendIconMarker}>
              <SendIconMarker />
            </View>
          </View>

          <View style={styles.bellaireLabel}>
            <Text style={styles.bellaireLabelText}>Bellaire Town</Text>
          </View>
          <View style={styles.wesLabel}>
            <Text style={styles.wesLabelText}>Wes Town</Text>
          </View>

          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <MenuButton />
              <View style={styles.headerRight}>
                <TouchableOpacity style={styles.iconButton}>
                  <NotificationSVG />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <SupportSVG />
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
          <Text style={styles.orderTitle}>Ret- Order KTh543Ju</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <CloseIcon />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.cardScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.customerCard}>
            <View style={styles.customerInfo}>
              <Image
                source={{
                  uri: "https://api.builder.io/api/v1/image/assets/TEMP/e8982379bf4437085e115a280c121ce36487d5e0?width=60",
                }}
                style={styles.customerAvatar}
              />
              <View style={styles.customerNameContainer}>
                <Text style={styles.customerName}>Mr Damilare Adebanjo</Text>
              </View>
            </View>
            <View style={styles.contactIcons}>
              <TouchableOpacity onPress={handleMessage}>
                <MessageIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCall}>
                <PhoneIcon />
              </TouchableOpacity>
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
                <TouchableOpacity
                  style={styles.navigateButton}
                  onPress={handleNavigate}
                >
                  <NavigateIcon />
                  <Text style={styles.navigateText}>Navigate</Text>
                </TouchableOpacity>
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
            style={styles.confirmButton}
            onPress={handleConfirmArrival}
          >
            <View style={styles.buttonIcon}>
              <DoubleChevronIcon />
            </View>
            <Text style={styles.confirmButtonText}>Confirm Arrival</Text>
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
    height: SCREEN_HEIGHT * 0.9,
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
  },
  routeVisualization: {
    position: "absolute",
    top: 80,
    left: 102,
    width: 221,
    height: 312,
  },
  routePath: {
    position: "absolute",
    top: 27,
    left: 7,
  },
  routePathSvg: {
    width: 189,
    height: 262,
  },
  endMarker: {
    position: "absolute",
    top: 266,
    left: 175,
  },
  startMarkerContainer: {
    width: 46,
    height: 46,
    padding: 13,
    borderRadius: 39,
    backgroundColor: "rgba(255, 210, 170, 0.20)",
    alignItems: "center",
    justifyContent: "center",
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
  sendIconMarker: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  sendIconContainer: {
    width: 32,
    height: 51,
    transform: [{ rotate: "-177.065deg" }],
  },
  sendIconCircle: {
    width: 22,
    height: 23,
    transform: [{ rotate: "136.16deg" }],
    padding: 4.562,
    borderRadius: 23.948,
    backgroundColor: "#292662",
    position: "absolute",
    left: 1,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  bellaireLabel: {
    position: "absolute",
    top: 60,
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
  wesLabel: {
    position: "absolute",
    top: 388,
    left: 256,
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
  bellaireLabelText: {
    color: "#454545",
    fontFamily: "Poppins",
    fontSize: 12.544,
    fontWeight: "400",
    letterSpacing: 0.376,
  },
  wesLabelText: {
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
    height: 400,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 34.212,
    elevation: 10,
    zIndex: 2,
  },
  cardScroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 18,
  },
  barIndicator: {
    width: 70,
    height: 5,
    backgroundColor: "#EEE",
    alignSelf: "center",
    borderRadius: 3,
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 36,
    gap: 50,
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
    flex: 1,
  },
  closeButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 45,
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
  customerNameContainer: {
    gap: 3,
  },
  customerName: {
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#000",
  },
  contactIcons: {
    flexDirection: "row",
    gap: 13,
  },
  routeContainer: {
    flexDirection: "row",
    gap: 50,
    marginBottom: 45,
  },
  routeTimelineContainer: {
    width: 33.071,
  },
  routeDetails: {
    flex: 1,
    gap: 25,
  },
  routeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 58,
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
    gap: 0,
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
  destinationSection: {},
  destinationText: {
    color: "#797979",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.48,
  },
  confirmButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0085FF",
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    position: "relative",
    height: 58,
  },
  buttonIcon: {
    position: "absolute",
    top: 5,
    left: 4,
    width: 49,
    height: 48,
    backgroundColor: "#046DCE",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
  confirmButtonText: {
    color: "#FFF",
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 25,
  },
});
