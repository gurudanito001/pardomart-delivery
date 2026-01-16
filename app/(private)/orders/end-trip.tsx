import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import Svg, {
  Path,
  Circle,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { NotificationSVG, SupportSVG } from "@/components";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function EndTripScreen() {
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const DoubleChevronIcon = () => (
    <Svg width={19} height={20} viewBox="0 0 19 20" fill="none">
      <Path
        d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z"
        fill="white"
      />
      <Path
        d="M7 18.23L8.77 20L18.77 10L8.77 0L7 1.77L15.23 10L7 18.23Z"
        fill="white"
      />
    </Svg>
  );

  const handleConfirmArrival = () => {
    console.log("Confirm Arrival");
  };

  const handleInitiateReturn = () => {
    console.log("Initiate Return");
  };

  const handleMessage = () => {
    console.log("Message customer");
  };

  const handleCall = () => {
    console.log("Call customer");
  };

  const handleNavigate = () => {
    console.log("Navigate to location");
  };

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={{
            uri: "https://api.builder.io/api/v1/image/assets/TEMP/f1d48e4287a613755f3318b4416005431e184595?width=856",
          }}
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* Route Overlay */}
        <View style={styles.routeOverlay}>
          {/* Bellaire Town Label */}
          <View style={[styles.locationLabel, { top: 104, left: 89 }]}>
            <Text style={styles.locationLabelText}>Bellaire Town</Text>
          </View>

          {/* Wes Town Label */}
          <View style={[styles.locationLabel, { top: 416, left: 256 }]}>
            <Text style={styles.locationLabelText}>Wes Town</Text>
          </View>

          {/* Route Path SVG */}
          <View style={styles.routePath}>
            <Svg
              width="221"
              height="293"
              viewBox="0 0 221 293"
              style={styles.routeSvg}
            >
              <Defs>
                <LinearGradient
                  id="routeGradient"
                  x1="0.730059"
                  y1="-41.9718"
                  x2="119.346"
                  y2="199.91"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop offset="0.18937" stopColor="#FFB169" />
                  <Stop offset="1" stopColor="#000000" stopOpacity="0" />
                </LinearGradient>
              </Defs>
              <Path
                d="M164.492 274.125L174.686 203.512C179.626 169.287 174.301 134.366 159.385 103.169C134.595 51.3223 85.8962 14.9799 29.1387 5.96935L2.46094 1.73412"
                stroke="url(#routeGradient)"
                strokeWidth="3.42118"
                strokeLinecap="round"
                strokeDasharray="6.84 6.84"
                fill="none"
              />
            </Svg>

            {/* Origin Point (Bellaire Town) */}
            <View style={styles.originPoint}>
              <View style={styles.originOuter}>
                <View style={styles.originMiddle}>
                  <View style={styles.originInner}>
                    <Circle cx="9.3" cy="9.8" r="4.2" fill="#FEB97A" />
                  </View>
                </View>
              </View>
            </View>

            {/* Destination Point (Wes Town) */}
            <View style={styles.destinationPoint}>
              <View style={styles.destinationCircle} />
            </View>
          </View>

          {/* Send Icon */}
          <View style={styles.sendIconContainer}>
            <Svg width="16" height="15" viewBox="0 0 16 17" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7245 7.68518L14.3118 2.78612C14.4253 2.57162 14.332 2.3906 14.2858 2.32228C14.2396 2.25397 14.1098 2.10026 13.8825 2.14725L1.9954 4.63233C1.78559 4.67686 1.7163 4.85402 1.69678 4.92697C1.67652 4.99846 1.65015 5.1849 1.79663 5.34973L10.4401 14.9065C10.604 15.0876 10.7901 15.0416 10.8621 15.0137C10.9353 14.9851 11.1054 14.892 11.1186 14.6419L11.4072 8.85605L5.92522 7.01093C5.62439 6.90964 5.44878 6.56468 5.53341 6.24014C5.61804 5.9156 5.93214 5.73487 6.23297 5.83616L11.7245 7.68518Z"
                fill="black"
              />
            </Svg>
          </View>
        </View>

        {/* Top Menu Bar */}
        <View style={styles.topMenuBar}>
          <TouchableOpacity style={styles.menuButton}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                fill="black"
              />
            </Svg>
          </TouchableOpacity>

          <View style={styles.topRightButtons}>
            <TouchableOpacity style={styles.topIconButton}>
              <NotificationSVG width={22} height={22} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.topIconButton}>
              <SupportSVG width={24} height={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.dragBar} />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.sheetHeader}>
            <TouchableOpacity onPress={handleGoBack}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <Path
                  d="M19.6278 21.993C19.8661 22.2135 20 22.5125 20 22.8243C20 23.1361 19.8661 23.4352 19.6278 23.6556C19.3895 23.8761 19.0662 24 18.7292 24C18.3921 24 18.0689 23.8761 17.8306 23.6556L9.37313 15.8313C9.25486 15.7223 9.16102 15.5927 9.09699 15.4501C9.03296 15.3074 9 15.1545 9 15C9 14.8455 9.03296 14.6926 9.09699 14.5499C9.16102 14.4073 9.25486 14.2777 9.37313 14.1687L17.8306 6.34435C18.0689 6.12387 18.3921 6 18.7292 6C19.0662 6 19.3895 6.12387 19.6278 6.34435C19.8661 6.56483 20 6.86387 20 7.17568C20 7.48749 19.8661 7.78653 19.6278 8.00702L12.07 14.999L19.6278 21.993Z"
                  fill="black"
                />
              </Svg>
            </TouchableOpacity>

            <Text style={styles.orderTitle}>Order KTh543Ju</Text>

            <TouchableOpacity onPress={handleGoBack}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <Path
                  d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z"
                  fill="black"
                />
              </Svg>
            </TouchableOpacity>
          </View>

          {/* Customer Card */}
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

            <View style={styles.customerActions}>
              <TouchableOpacity
                style={styles.messageButton}
                onPress={handleMessage}
              >
                <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <Rect width="30" height="30" rx="15" fill="#0085FF" />
                  <Path
                    d="M15 8.92499C18.7125 8.92499 21.75 11.3415 21.75 14.325C21.75 17.3085 18.7125 19.725 15 19.725C14.163 19.725 13.3598 19.6035 12.6173 19.3875C10.6463 21.075 8.25 21.075 8.25 21.075C9.82275 19.5022 10.0725 18.4425 10.1063 18.0375C8.95875 17.0722 8.25 15.7627 8.25 14.325C8.25 11.3415 11.2875 8.92499 15 8.92499Z"
                    fill="white"
                  />
                </Svg>
              </TouchableOpacity>

              <TouchableOpacity style={styles.callButton} onPress={handleCall}>
                <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <Rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="14.5"
                    stroke="#0085FF"
                    fill="white"
                  />
                  <Path
                    d="M18.1618 20.2498C17.7043 20.2498 17.0616 20.0843 16.0993 19.5467C14.929 18.8904 14.0239 18.2845 12.86 17.1237C11.7378 16.0022 11.1917 15.2761 10.4274 13.8853C9.56395 12.315 9.71114 11.4919 9.87567 11.1401C10.0716 10.7196 10.3608 10.4681 10.7347 10.2185C10.947 10.0794 11.1717 9.96016 11.4059 9.86228C11.4293 9.8522 11.4511 9.8426 11.4706 9.83392C11.5866 9.78166 11.7624 9.70267 11.985 9.78705C12.1336 9.84283 12.2663 9.95697 12.4739 10.162C12.8998 10.582 13.4818 11.5174 13.6964 11.9768C13.8406 12.2864 13.936 12.4908 13.9362 12.72C13.9362 12.9884 13.8012 13.1953 13.6374 13.4187C13.6067 13.4606 13.5762 13.5007 13.5467 13.5396C13.3683 13.774 13.3292 13.8417 13.355 13.9627C13.4072 14.2057 13.797 14.9292 14.4375 15.5684C15.0781 16.2075 15.7807 16.5727 16.0247 16.6247C16.1508 16.6517 16.22 16.6109 16.4618 16.4262C16.4965 16.3997 16.5322 16.3723 16.5694 16.3449C16.8193 16.159 17.0166 16.0275 17.2786 16.0275H17.28C17.5081 16.0275 17.7033 16.1264 18.0268 16.2895C18.4486 16.5024 19.4122 17.0768 19.8347 17.5031C20.0403 17.7103 20.1549 17.8425 20.2109 17.9909C20.2953 18.2142 20.2158 18.3893 20.164 18.5065C20.1554 18.526 20.1457 18.5473 20.1357 18.571C20.037 18.8048 19.9171 19.029 19.7773 19.2408C19.5282 19.6135 19.2757 19.902 18.8543 20.0981C18.638 20.2005 18.4011 20.2524 18.1618 20.2498Z"
                    fill="black"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>

          {/* Delivery Instruction */}
          <View style={styles.instructionCard}>
            <View style={styles.instructionIcon}>
              <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <Path
                  d="M12 2.50201C10.9723 2.50201 9.98666 2.91027 9.25996 3.63698C8.53326 4.36368 8.125 5.3493 8.125 6.37701C8.125 9.29701 9.332 12.929 9.938 14.576C10.095 14.996 10.3771 15.3576 10.7462 15.6121C11.1154 15.8665 11.5537 16.0016 12.002 15.999C12.906 15.999 13.741 15.457 14.065 14.581C14.671 12.941 15.875 9.32701 15.875 6.37701C15.875 5.3493 15.4667 4.36368 14.74 3.63698C14.0133 2.91027 13.0277 2.50201 12 2.50201ZM12.001 17.5C11.3377 17.5 10.7016 17.7635 10.2325 18.2325C9.7635 18.7016 9.5 19.3377 9.5 20.001C9.5 20.6643 9.7635 21.3005 10.2325 21.7695C10.7016 22.2385 11.3377 22.502 12.001 22.502C12.6643 22.502 13.3004 22.2385 13.7695 21.7695C14.2385 21.3005 14.502 20.6643 14.502 20.001C14.502 19.3377 14.2385 18.7016 13.7695 18.2325C13.3004 17.7635 12.6643 17.5 12.001 17.5Z"
                  fill="white"
                />
              </Svg>
            </View>

            <View style={styles.instructionContent}>
              <Text style={styles.instructionLabel}>Delivery Instruction</Text>
              <Text style={styles.instructionText}>
                Hand over to customer before you leave
              </Text>
            </View>
          </View>

          {/* Location Details */}
          <View style={styles.locationDetails}>
            <View style={styles.timelineContainer}>
              <Svg width="34" height="173" viewBox="0 0 34 173" fill="none">
                <Path
                  d="M17 33L17 163"
                  stroke="#2CAF0B"
                  strokeWidth="1.14039"
                  strokeLinecap="round"
                />
                <Rect
                  width="33.0714"
                  height="33.0714"
                  rx="15.9655"
                  fill="#2CAF0B"
                />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5354 7.98276C21.2515 7.98276 25.0883 11.8196 25.0883 16.5357C25.0883 21.2518 21.2515 25.0887 16.5354 25.0887C11.8193 25.0887 7.98242 21.2518 7.98242 16.5357C7.98242 11.8196 11.8193 7.98276 16.5354 7.98276ZM16.5354 9.2657C12.5266 9.2657 9.26537 12.5269 9.26537 16.5357C9.26537 20.5445 12.5266 23.8057 16.5354 23.8057C20.5441 23.8057 23.8054 20.5445 23.8054 16.5357C23.8054 12.5269 20.5441 9.2657 16.5354 9.2657ZM16.2456 12.3408C16.6006 12.3408 16.8871 12.6282 16.8871 12.9823V16.7644L19.7994 18.5007C20.103 18.6828 20.2031 19.0763 20.0217 19.3808C19.9011 19.5818 19.6882 19.6938 19.4701 19.6938C19.358 19.6938 19.2451 19.6647 19.1416 19.604L15.9172 17.6804C15.7239 17.5641 15.6041 17.3546 15.6041 17.1288V12.9823C15.6041 12.6282 15.8915 12.3408 16.2456 12.3408Z"
                  fill="white"
                />
                <Path
                  d="M16.0959 34.0973C16.5523 33.5326 17.4132 33.5326 17.8697 34.0973L22.3948 39.6957C22.9976 40.4414 22.4668 41.553 21.5079 41.553H12.4576C11.4987 41.553 10.9679 40.4414 11.5707 39.6957L16.0959 34.0973Z"
                  fill="#0E0D26"
                />
                <Circle cx="17" cy="166" r="7" fill="#2CAF0B" />
              </Svg>
            </View>

            <View style={styles.locationInfo}>
              {/* Pickup Location */}
              <View style={styles.locationRow}>
                <View style={styles.locationTextContainer}>
                  <Text style={styles.locationName}>Bellaire Town</Text>
                  <Text style={styles.locationAddress}>
                    Chicago Illinious, 60612, United states
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.navigateButton}
                  onPress={handleNavigate}
                >
                  <Svg width="37" height="36" viewBox="0 0 37 36" fill="none">
                    <Path
                      d="M18.7756 3.37499C10.5504 3.26389 3.83558 9.97874 3.94667 18.2039C4.05636 26.0923 10.4794 32.5153 18.3678 32.625C26.5943 32.7375 33.3078 26.0226 33.1953 17.7975C33.087 9.90772 26.6639 3.48467 18.7756 3.37499ZM25.2514 12.3215L19.4689 25.4362C19.1321 26.1724 18.0078 25.9284 18.0078 25.1156V18.8437C18.0078 18.7691 17.9781 18.6976 17.9254 18.6449C17.8726 18.5921 17.8011 18.5625 17.7265 18.5625H11.456C10.646 18.5625 10.4014 17.4466 11.1347 17.1091L24.2501 11.3203C24.3902 11.2556 24.5468 11.2354 24.6988 11.2625C24.8508 11.2896 24.9907 11.3626 25.0999 11.4718C25.209 11.5809 25.2821 11.7209 25.3092 11.8729C25.3362 12.0248 25.3161 12.1814 25.2514 12.3215Z"
                      fill="black"
                    />
                  </Svg>
                  <Text style={styles.navigateText}>Navigate</Text>
                </TouchableOpacity>
              </View>

              {/* Distance */}
              <View style={styles.distanceContainer}>
                <Text style={styles.distanceLabel}>Distance</Text>
                <Text style={styles.distanceValue}>4.5km</Text>
              </View>

              {/* Destination */}
              <View style={styles.destinationContainer}>
                <Text style={styles.destinationName}>Jewel Osco Store</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.arrivedButton}
              onPress={handleConfirmArrival}
            >
              <View style={styles.buttonIcon}>
                <DoubleChevronIcon />
              </View>
              <Text style={styles.arrivedButtonText}>Confirm Arrival</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.returnButton}
              onPress={handleInitiateReturn}
            >
              <Text style={styles.returnText}>Initiate Return</Text>
            </TouchableOpacity>
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
  mapContainer: {
    height: SCREEN_HEIGHT * 0.5,
    position: "relative",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
  routeOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  locationLabel: {
    position: "absolute",
    paddingHorizontal: 11,
    paddingVertical: 11,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "#F9F9F9",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 7,
    elevation: 2,
  },
  locationLabelText: {
    color: "#454545",
    fontFamily: "Open Sans",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0.33,
  },
  routePath: {
    position: "absolute",
    top: 118,
    left: 94,
    width: 221,
    height: 293,
  },
  routeSvg: {
    position: "absolute",
    top: 24,
    left: 26,
  },
  originPoint: {
    position: "absolute",
    top: 0,
    left: 15,
    width: 46,
    height: 46,
  },
  originOuter: {
    width: 46,
    height: 46,
    borderRadius: 39,
    backgroundColor: "rgba(255, 210, 170, 0.20)",
    alignItems: "center",
    justifyContent: "center",
  },
  originMiddle: {
    width: 30,
    height: 30,
    borderRadius: 21,
    backgroundColor: "rgba(254, 185, 122, 0.40)",
    alignItems: "center",
    justifyContent: "center",
  },
  originInner: {
    width: 19,
    height: 19,
    borderRadius: 11,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  destinationPoint: {
    position: "absolute",
    bottom: 2,
    right: 2,
  },
  destinationCircle: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: "#292662",
  },
  sendIconContainer: {
    position: "absolute",
    top: 140,
    left: 156,
  },
  topMenuBar: {
    position: "absolute",
    top: 14,
    left: 21,
    right: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  topRightButtons: {
    flexDirection: "row",
    gap: 10,
  },
  topIconButton: {
    width: 40,
    height: 40,
    borderRadius: "100%",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 30,
    marginTop: -30,
  },
  dragBar: {
    width: 70,
    height: 5,
    backgroundColor: "#EEE",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 13,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    gap: 27,
  },
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderTitle: {
    color: "#22212E",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  customerCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 19,
    paddingVertical: 11,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
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
    color: "#000",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "600",
  },
  customerActions: {
    flexDirection: "row",
    gap: 13,
  },
  messageButton: {
    width: 30,
    height: 30,
  },
  callButton: {
    width: 30,
    height: 30,
  },
  instructionCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 22,
    paddingVertical: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B4BED4",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  instructionIcon: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  instructionContent: {
    flex: 1,
    gap: 2,
  },
  instructionLabel: {
    color: "#898A8D",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
  },
  instructionText: {
    color: "#000",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
  },
  locationDetails: {
    flexDirection: "row",
    gap: 25,
  },
  timelineContainer: {
    width: 34,
  },
  locationInfo: {
    flex: 1,
    gap: 25,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  locationTextContainer: {
    flex: 1,
    gap: 7,
  },
  locationName: {
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
  },
  navigateText: {
    color: "#000",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.42,
  },
  distanceContainer: {
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
  destinationContainer: {
    gap: 7,
  },
  destinationName: {
    color: "#797979",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.48,
  },
  actionButtons: {
    gap: 22,
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
  returnButton: {
    paddingVertical: 15,
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
  returnText: {
    color: "#000",
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 25,
  },
});
