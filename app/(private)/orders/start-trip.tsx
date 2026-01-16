import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import {
  MenuButton,
  NotificationSVG,
  SupportSVG,
  NavigationRouteSVG,
  RouteStartMarker,
  RouteEndMarker,
} from '../../../components';
import Svg, { Path, Rect } from 'react-native-svg';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MessageIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <Rect width={30} height={30} rx={15} fill="#0085FF" />
    <Path
      d="M15 8.925C18.7125 8.925 21.75 11.3415 21.75 14.325C21.75 17.3085 18.7125 19.725 15 19.725C14.163 19.725 13.3598 19.6035 12.6173 19.3875C10.6463 21.075 8.25 21.075 8.25 21.075C9.82275 19.5023 10.0725 18.4425 10.1063 18.0375C8.95875 17.0723 8.25 15.7628 8.25 14.325C8.25 11.3415 11.2875 8.925 15 8.925Z"
      fill="white"
    />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <Rect x={0.5} y={0.5} width={29} height={29} rx={14.5} stroke="#0085FF" />
    <Path
      d="M18.1618 20.2498C17.7043 20.2498 17.0616 20.0843 16.0993 19.5467C14.929 18.8904 14.0239 18.2845 12.86 17.1237C11.7378 16.0022 11.1917 15.2761 10.4274 13.8853C9.56395 12.315 9.71114 11.4919 9.87567 11.1401C10.0716 10.7196 10.3608 10.4681 10.7347 10.2185C10.947 10.0794 11.1717 9.96016 11.4059 9.86228C11.4293 9.8522 11.4511 9.8426 11.4706 9.83392C11.5866 9.78166 11.7624 9.70267 11.985 9.78705C12.1336 9.84283 12.2663 9.95697 12.4739 10.162C12.8998 10.582 13.4818 11.5174 13.6964 11.9768C13.8406 12.2864 13.936 12.4908 13.9362 12.72C13.9362 12.9884 13.8012 13.1953 13.6374 13.4187C13.6067 13.4606 13.5762 13.5007 13.5467 13.5396C13.3683 13.774 13.3292 13.8417 13.355 13.9627C13.4072 14.2057 13.797 14.9292 14.4375 15.5684C15.0781 16.2075 15.7807 16.5727 16.0247 16.6247C16.1508 16.6517 16.22 16.6109 16.4618 16.4262C16.4965 16.3997 16.5322 16.3723 16.5694 16.3449C16.8193 16.159 17.0166 16.0275 17.2786 16.0275H17.28C17.5081 16.0275 17.7033 16.1264 18.0268 16.2895C18.4486 16.5024 19.4122 17.0768 19.8347 17.5031C20.0403 17.7103 20.1549 17.8425 20.2109 17.9909C20.2953 18.2142 20.2158 18.3893 20.164 18.5065C20.1554 18.526 20.1457 18.5473 20.1357 18.571C20.037 18.8048 19.9171 19.029 19.7773 19.2408C19.5282 19.6135 19.2757 19.902 18.8543 20.0981C18.638 20.2005 18.4011 20.2524 18.1618 20.2498Z"
      fill="black"
    />
  </Svg>
);

const BackArrowIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <Path
      d="M19.6278 21.993C19.8661 22.2135 20 22.5125 20 22.8243C20 23.1361 19.8661 23.4352 19.6278 23.6556C19.3895 23.8761 19.0662 24 18.7292 24C18.3921 24 18.0689 23.8761 17.8306 23.6556L9.37313 15.8313C9.25486 15.7223 9.16102 15.5927 9.09699 15.4501C9.03296 15.3074 9 15.1545 9 15C9 14.8455 9.03296 14.6926 9.09699 14.5499C9.16102 14.4073 9.25486 14.2777 9.37313 14.1687L17.8306 6.34435C18.0689 6.12387 18.3921 6 18.7292 6C19.0662 6 19.3895 6.12387 19.6278 6.34435C19.8661 6.56483 20 6.86387 20 7.17568C20 7.48749 19.8661 7.78653 19.6278 8.00702L12.07 14.999L19.6278 21.993Z"
      fill="black"
    />
  </Svg>
);

const CloseIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
    <Path
      d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z"
      fill="black"
    />
  </Svg>
);

const NavigateIcon = () => (
  <Svg width={36} height={36} viewBox="0 0 37 36" fill="none">
    <Path
      d="M18.7756 3.37499C10.5504 3.26389 3.83558 9.97874 3.94667 18.2039C4.05636 26.0923 10.4794 32.5153 18.3678 32.625C26.5943 32.7375 33.3078 26.0226 33.1953 17.7975C33.087 9.90772 26.6639 3.48467 18.7756 3.37499ZM25.2514 12.3215L19.4689 25.4362C19.1321 26.1724 18.0078 25.9284 18.0078 25.1156V18.8437C18.0078 18.7691 17.9781 18.6976 17.9254 18.6449C17.8726 18.5921 17.8011 18.5625 17.7265 18.5625H11.456C10.646 18.5625 10.4014 17.4466 11.1347 17.1091L24.2501 11.3203C24.3902 11.2556 24.5468 11.2354 24.6988 11.2625C24.8508 11.2896 24.9907 11.3626 25.0999 11.4718C25.209 11.5809 25.2821 11.7209 25.3092 11.8729C25.3362 12.0248 25.3161 12.1814 25.2514 12.3215Z"
      fill="black"
    />
  </Svg>
);

const RouteTimeline = () => (
  <Svg width={34} height={175} viewBox="0 0 34 175" fill="none">
    <Path
      d="M17 33L17 163"
      stroke="#2CAF0B"
      strokeWidth={1.14039}
      strokeLinecap="round"
      strokeDasharray="2.28 2.28"
    />
    <Rect width={33.0714} height={33.0714} rx={15.9655} fill="#2CAF0B" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5354 7.98276C21.2515 7.98276 25.0883 11.8196 25.0883 16.5357C25.0883 21.2518 21.2515 25.0887 16.5354 25.0887C11.8193 25.0887 7.98242 21.2518 7.98242 16.5357C7.98242 11.8196 11.8193 7.98276 16.5354 7.98276ZM16.5354 9.2657C12.5266 9.2657 9.26537 12.5269 9.26537 16.5357C9.26537 20.5445 12.5266 23.8057 16.5354 23.8057C20.5441 23.8057 23.8054 20.5445 23.8054 16.5357C23.8054 12.5269 20.5441 9.2657 16.5354 9.2657ZM16.2456 12.3408C16.6006 12.3408 16.8871 12.6282 16.8871 12.9823V16.7644L19.7994 18.5007C20.103 18.6828 20.2031 19.0763 20.0217 19.3808C19.9011 19.5818 19.6882 19.6938 19.4701 19.6938C19.358 19.6938 19.2451 19.6647 19.1416 19.604L15.9172 17.6804C15.7239 17.5641 15.6041 17.3546 15.6041 17.1288V12.9823C15.6041 12.6282 15.8915 12.3408 16.2456 12.3408Z"
      fill="white"
    />
    <Path
      d="M16.0959 164.395C16.5523 163.831 17.4132 163.831 17.8697 164.395L22.3948 169.994C22.9976 170.739 22.4668 171.851 21.5079 171.851H12.4576C11.4987 171.851 10.9679 170.739 11.5707 169.994L16.0959 164.395Z"
      fill="#0E0D26"
    />
  </Svg>
);

const DoubleChevronIcon = () => (
  <Svg width={19} height={20} viewBox="0 0 19 20" fill="none">
    <Path d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z" fill="white" />
    <Path d="M7 18.23L8.77 20L18.77 10L8.77 0L7 1.77L15.23 10L7 18.23Z" fill="white" />
  </Svg>
);

const GoogleMapIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z"
      fill="#0085FF"
    />
    <Path
      d="M11.4201 21.814C11.5894 21.9346 11.7922 21.9994 12.0001 21.9994C12.208 21.9994 12.4107 21.9346 12.5801 21.814C12.8841 21.599 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2C7.58909 2 4.00009 5.589 4.00009 9.995C3.97109 16.44 11.1161 21.599 11.4201 21.814ZM12.0001 4C15.3091 4 18.0001 6.691 18.0001 10.005C18.0211 14.443 13.6121 18.428 12.0001 19.735C10.3891 18.427 5.97909 14.441 6.00009 10C6.00009 6.691 8.69109 4 12.0001 4Z"
      fill="#0085FF"
    />
  </Svg>
);

const InAppMapIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 25 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0932 23.258L13.0822 23.26L13.0112 23.295L12.9912 23.299L12.9772 23.295L12.9062 23.26C12.8955 23.2567 12.8875 23.2583 12.8822 23.265L12.8782 23.275L12.8612 23.703L12.8662 23.723L12.8762 23.736L12.9802 23.81L12.9952 23.814L13.0072 23.81L13.1112 23.736L13.1232 23.72L13.1272 23.703L13.1102 23.276C13.1075 23.2653 13.1018 23.2593 13.0932 23.258ZM13.3582 23.145L13.3452 23.147L13.1602 23.24L13.1502 23.25L13.1472 23.261L13.1652 23.691L13.1702 23.703L13.1782 23.71L13.3792 23.803C13.3918 23.8063 13.4015 23.8037 13.4082 23.795L13.4122 23.781L13.3782 23.167C13.3748 23.155 13.3682 23.1477 13.3582 23.145ZM12.6432 23.147C12.6388 23.1443 12.6335 23.1435 12.6285 23.1446C12.6234 23.1457 12.619 23.1487 12.6162 23.153L12.6102 23.167L12.5762 23.781C12.5768 23.793 12.5825 23.801 12.5932 23.805L12.6082 23.803L12.8092 23.71L12.8192 23.702L12.8232 23.691L12.8402 23.261L12.8372 23.249L12.8272 23.239L12.6432 23.147Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 4.00002C12.106 4.00002 11.7159 4.07762 11.3519 4.22838C10.988 4.37915 10.6573 4.60012 10.3787 4.8787C10.1001 5.15728 9.87913 5.48799 9.72836 5.85197C9.5776 6.21595 9.5 6.60605 9.5 7.00002C9.5 7.39399 9.5776 7.78409 9.72836 8.14807C9.87913 8.51205 10.1001 8.84276 10.3787 9.12134C10.6573 9.39992 10.988 9.62089 11.3519 9.77166C11.7159 9.92242 12.106 10 12.5 10C13.2956 10 14.0587 9.68395 14.6213 9.12134C15.1839 8.55873 15.5 7.79567 15.5 7.00002C15.5 6.20437 15.1839 5.44131 14.6213 4.8787C14.0587 4.31609 13.2956 4.00002 12.5 4.00002ZM7.5 7.00002C7.50019 6.05399 7.76877 5.12743 8.27454 4.32794C8.7803 3.52846 9.5025 2.88887 10.3573 2.48345C11.212 2.07803 12.1642 1.92342 13.1034 2.03758C14.0425 2.15174 14.9299 2.52998 15.6627 3.12838C16.3954 3.72678 16.9433 4.52077 17.2428 5.41814C17.5423 6.31551 17.5811 7.27944 17.3546 8.19796C17.1282 9.11649 16.6458 9.95192 15.9634 10.6072C15.2811 11.2625 14.4269 11.7108 13.5 11.9V17C13.5 17.2652 13.3946 17.5196 13.2071 17.7071C13.0196 17.8947 12.7652 18 12.5 18C12.2348 18 11.9804 17.8947 11.7929 17.7071C11.6054 17.5196 11.5 17.2652 11.5 17V11.9C10.3706 11.6695 9.3556 11.0558 8.62669 10.1629C7.89778 9.27001 7.49976 8.15267 7.5 7.00002ZM9.989 16.1C10.0089 16.2299 10.003 16.3624 9.97163 16.49C9.94028 16.6176 9.88408 16.7378 9.80626 16.8437C9.72843 16.9496 9.6305 17.0391 9.51807 17.1071C9.40564 17.1751 9.2809 17.2202 9.151 17.24C7.873 17.434 6.858 17.729 6.191 18.055C4.971 18.652 6.397 19.081 7.141 19.313C8.468 19.728 10.363 20 12.5 20C14.637 20 16.532 19.728 17.859 19.313C18.608 19.079 20.029 18.653 18.809 18.055C18.142 17.729 17.127 17.435 15.849 17.24C15.7177 17.222 15.5912 17.1781 15.477 17.1107C15.3628 17.0434 15.2632 16.954 15.1838 16.8478C15.1045 16.7416 15.047 16.6207 15.0149 16.4921C14.9827 16.3635 14.9764 16.2298 14.9963 16.0988C15.0163 15.9677 15.0621 15.842 15.1311 15.7288C15.2001 15.6156 15.2909 15.5172 15.3983 15.4395C15.5056 15.3617 15.6274 15.3061 15.7564 15.2758C15.8855 15.2455 16.0193 15.2411 16.15 15.263C17.538 15.473 18.772 15.81 19.689 16.259C20.573 16.692 21.5 17.421 21.5 18.5C21.5 19.311 20.976 19.9 20.466 20.277C18.316 21.865 15.036 22 12.5 22C10.218 22 8.113 21.712 6.545 21.222C5.295 20.832 3.5 20.062 3.5 18.5C3.5 17.42 4.427 16.692 5.311 16.26C6.228 15.81 7.463 15.474 8.849 15.263C8.97889 15.2431 9.11142 15.249 9.23902 15.2804C9.36662 15.3117 9.4868 15.3679 9.59267 15.4458C9.69854 15.5236 9.78804 15.6215 9.85604 15.734C9.92405 15.8464 9.96923 15.9701 9.989 16.1Z"
      fill="white"
    />
  </Svg>
);

const ModalCloseIcon = () => (
  <Svg width={17.5} height={17.5} viewBox="0 0 18 18" fill="none">
    <Path
      d="M2.25 17.5L0.5 15.75L7.5 8.75L0.5 1.75L2.25 0L9.25 7L16.25 0L18 1.75L11 8.75L18 15.75L16.25 17.5L9.25 10.5L2.25 17.5Z"
      fill="black"
    />
  </Svg>
);

const ImportantIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 25" fill="none">
    <Path
      d="M12 2.50201C10.9723 2.50201 9.98666 2.91027 9.25996 3.63698C8.53326 4.36368 8.125 5.3493 8.125 6.37701C8.125 9.29701 9.332 12.929 9.938 14.576C10.095 14.996 10.3771 15.3576 10.7462 15.6121C11.1154 15.8665 11.5537 16.0016 12.002 15.999C12.906 15.999 13.741 15.457 14.065 14.581C14.671 12.941 15.875 9.32701 15.875 6.37701C15.875 5.3493 15.4667 4.36368 14.74 3.63698C14.0133 2.91027 13.0277 2.50201 12 2.50201ZM12.001 17.5C11.3377 17.5 10.7016 17.7635 10.2325 18.2325C9.7635 18.7016 9.5 19.3377 9.5 20.001C9.5 20.6643 9.7635 21.3005 10.2325 21.7695C10.7016 22.2385 11.3377 22.502 12.001 22.502C12.6643 22.502 13.3004 22.2385 13.7695 21.7695C14.2385 21.3005 14.502 20.6643 14.502 20.001C14.502 19.3377 14.2385 18.7016 13.7695 18.2325C13.3004 17.7635 12.6643 17.5 12.001 17.5Z"
      fill="white"
    />
  </Svg>
);

export default function StartTripScreen() {
  const [showMapModal, setShowMapModal] = useState(false);

  const handleStartTrip = () => {
    setShowMapModal(true);
  };

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

  const handleMapSelection = (mapType: 'google' | 'inapp') => {
    console.log('Selected map:', mapType);
    setShowMapModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <ImageBackground
          source={{
            uri: 'https://api.builder.io/api/v1/image/assets/TEMP/f1d48e4287a613755f3318b4416005431e184595?width=856',
          }}
          style={styles.mapBackground}
          imageStyle={styles.mapImage}
          resizeMode="cover"
        >
          <View style={styles.routeVisualization}>
            <View style={styles.routePath}>
              <NavigationRouteSVG />
            </View>
            <View style={styles.startMarker}>
              <RouteStartMarker />
            </View>
            <View style={styles.endMarker}>
              <RouteEndMarker />
            </View>
          </View>

          <View style={styles.originLabel}>
            <Text style={styles.originLabelText}>Jewel Osco</Text>
          </View>
          <View style={styles.destinationLabel}>
            <Text style={styles.destinationLabelText}>Wes Town</Text>
          </View>

          <SafeAreaView style={styles.headerSafeArea}>
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
          </SafeAreaView>
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
                  uri: 'https://api.builder.io/api/v1/image/assets/TEMP/dbf8d1142bcb6b2582427f0f75f675f0cd1e0a16?width=66',
                }}
                style={styles.storeLogo}
              />
              <View style={styles.storeDetails}>
                <Text style={styles.storeName}>Jewel Osco</Text>
                <Text style={styles.storeAddress}>Wesside 120 ny jersey 2.5 Miles</Text>
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
                  uri: 'https://api.builder.io/api/v1/image/assets/TEMP/e8982379bf4437085e115a280c121ce36487d5e0?width=60',
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

          <View style={styles.deliveryCard}>
            <View style={styles.importantIconContainer}>
              <ImportantIcon />
            </View>
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryLabel}>Delivery Instruction</Text>
              <Text style={styles.deliveryText}>Hand over to customer before you leave</Text>
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

          <TouchableOpacity style={styles.startTripButton} onPress={handleStartTrip}>
            <View style={styles.buttonIcon}>
              <DoubleChevronIcon />
            </View>
            <Text style={styles.startTripText}>Start Trip</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Modal
        visible={showMapModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowMapModal(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowMapModal(false)}
            >
              <ModalCloseIcon />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Select Navigation Map</Text>

            <View style={styles.modalOptions}>
              <TouchableOpacity
                style={styles.googleMapButton}
                onPress={() => handleMapSelection('google')}
              >
                <GoogleMapIcon />
                <Text style={styles.googleMapText}>Google map</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inAppMapButton}
                onPress={() => handleMapSelection('inapp')}
              >
                <InAppMapIcon />
                <Text style={styles.inAppMapText}>In-App Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1100,
    zIndex: 0,
  },
  mapBackground: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-start',
  },
  routeVisualization: {
    position: 'absolute',
    top: 115,
    left: 70,
    width: 221,
    height: 318,
  },
  routePath: {
    position: 'absolute',
    top: 24,
    left: 27,
  },
  startMarker: {
    position: 'absolute',
    top: 0,
    left: 17,
  },
  endMarker: {
    position: 'absolute',
    bottom: 47,
    right: 3,
  },
  originLabel: {
    position: 'absolute',
    top: 100,
    left: 73,
    backgroundColor: '#FFF',
    paddingHorizontal: 11,
    paddingVertical: 3,
    borderRadius: 33.071,
    borderWidth: 1,
    borderColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2.281 },
    shadowOpacity: 0.05,
    shadowRadius: 6.842,
    elevation: 2,
    transform: [{ rotate: '3.5deg' }],
  },
  destinationLabel: {
    position: 'absolute',
    top: 352,
    zIndex: -1,
    left: 230,
    backgroundColor: '#FFF',
    paddingHorizontal: 11,
    paddingVertical: 3,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2.281 },
    shadowOpacity: 0.05,
    shadowRadius: 6.842,
    elevation: 2,
    transform: [{ rotate: '3.5deg' }],
  },
  originLabelText: {
    color: '#454545',
    fontFamily: 'Poppins',
    fontSize: 12.544,
    fontWeight: '400',
    letterSpacing: 0.376,
  },
  destinationLabelText: {
    color: '#454545',
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 0.33,
  },
  headerSafeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21,
    paddingTop: 20,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.40,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 2,
    overflow: 'hidden',
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
    backgroundColor: '#EEE',
    alignSelf: 'center',
    borderRadius: 3,
    marginBottom: 13,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 29,
  },
  backButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderTitle: {
    color: '#22212E',
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  closeButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B4BED4',
    borderRadius: 16,
    padding: 10,
    marginBottom: 13,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  storeLogo: {
    width: 33,
    height: 33,
    borderRadius: 17,
  },
  storeDetails: {
    gap: 2,
  },
  storeName: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#000',
  },
  storeAddress: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#484C52',
  },
  contactIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  customerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B4BED4',
    borderRadius: 16,
    paddingVertical: 11,
    paddingHorizontal: 19,
    marginBottom: 22,
  },
  customerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  customerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  customerName: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#000',
  },
  deliveryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#B4BED4',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 22,
    marginBottom: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  importantIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryInfo: {
    flex: 1,
    gap: 2,
  },
  deliveryLabel: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#898A8D',
  },
  deliveryText: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#000',
  },
  routeContainer: {
    flexDirection: 'row',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  locationInfo: {
    flex: 1,
    gap: 7,
  },
  locationTitle: {
    color: '#797979',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.48,
  },
  locationAddress: {
    color: '#797979',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  navigateButton: {
    alignItems: 'center',
    gap: 4,
  },
  navigateText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.42,
  },
  distanceSection: {
    gap: 7,
  },
  distanceLabel: {
    color: '#797979',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.48,
  },
  distanceValue: {
    color: '#797979',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.48,
  },
  destinationSection: {
    marginTop: -10,
  },
  destinationText: {
    color: '#797979',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.48,
  },
  startTripButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    position: 'relative',
  },
  buttonIcon: {
    position: 'absolute',
    left: 4,
    width: 49,
    height: 48,
    backgroundColor: '#046DCE',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startTripText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    flex: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 398,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 21,
    paddingHorizontal: 41,
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
    marginBottom: 14,
    padding: 4,
  },
  modalTitle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 29,
  },
  modalOptions: {
    gap: 22,
  },
  googleMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  googleMapText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 25,
  },
  inAppMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 16,
    backgroundColor: '#0085FF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  inAppMapText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 25,
  },
});
