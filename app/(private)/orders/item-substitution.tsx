import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path, Circle, Rect } from "react-native-svg";

interface OrderedItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  quantityFound: string;
}

const MOCK_ORDERED_ITEM: OrderedItem = {
  id: "1",
  name: "Ordered Item",
  description:
    "Valbest fully cooked chicken Nugget- frozen, 9g protein per 4 nugget serving, 24 0z (1.5lb)",
  price: "$3.88",
  image:
    "https://api.builder.io/api/v1/image/assets/TEMP/b15e90ad66573202e16cb0681e9db93877e30680?width=114",
  quantityFound: "2 of 3 found",
};

const BackArrowIcon = () => (
  <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <Path
      d="M19.6278 21.993C19.8661 22.2135 20 22.5125 20 22.8243C20 23.1361 19.8661 23.4352 19.6278 23.6556C19.3895 23.8761 19.0662 24 18.7292 24C18.3921 24 18.0689 23.8761 17.8306 23.6556L9.37313 15.8313C9.25486 15.7223 9.16102 15.5927 9.09699 15.4501C9.03296 15.3074 9 15.1545 9 15C9 14.8455 9.03296 14.6926 9.09699 14.5499C9.16102 14.4073 9.25486 14.2777 9.37313 14.1687L17.8306 6.34435C18.0689 6.12387 18.3921 6 18.7292 6C19.0662 6 19.3895 6.12387 19.6278 6.34435C19.8661 6.56483 20 6.86387 20 7.17568C20 7.48749 19.8661 7.78653 19.6278 8.00702L12.07 14.999L19.6278 21.993Z"
      fill="black"
    />
  </Svg>
);

const NotificationIcon = () => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Circle cx="20" cy="20" r="20" fill="white" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.777 16.4179C13.777 14.7158 14.4532 13.0833 15.6567 11.8798C16.8603 10.6762 18.4928 10 20.1949 10C21.897 10 23.5294 10.6762 24.733 11.8798C25.9366 13.0833 26.6128 14.7158 26.6128 16.4179V19.8689L28.2833 23.2099C28.3602 23.3636 28.3965 23.5345 28.3888 23.7063C28.381 23.878 28.3295 24.045 28.2391 24.1912C28.1487 24.3374 28.0225 24.4582 27.8723 24.5419C27.7221 24.6256 27.553 24.6695 27.3811 24.6695H23.7467C23.5428 25.4564 23.0833 26.1532 22.4405 26.6507C21.7976 27.1482 21.0078 27.4181 20.1949 27.4181C19.382 27.4181 18.5922 27.1482 17.9493 26.6507C17.3064 26.1532 16.847 25.4564 16.643 24.6695H13.0087C12.8367 24.6695 12.6677 24.6256 12.5175 24.5419C12.3673 24.4582 12.241 24.3374 12.1506 24.1912C12.0603 24.045 12.0087 23.878 12.001 23.7063C11.9933 23.5345 12.0296 23.3636 12.1065 23.2099L13.777 19.8689V16.4179ZM18.6069 24.6695C18.7679 24.9482 18.9993 25.1797 19.2781 25.3406C19.5568 25.5015 19.873 25.5862 20.1949 25.5862C20.5168 25.5862 20.8329 25.5015 21.1117 25.3406C21.3904 25.1797 21.6219 24.9482 21.7829 24.6695H18.6069ZM20.1949 11.8337C18.9791 11.8337 17.8131 12.3167 16.9534 13.1764C16.0937 14.0361 15.6107 15.2021 15.6107 16.4179V19.8689C15.6107 20.1534 15.5444 20.434 15.4172 20.6885L14.3445 22.8358H26.0462L24.9735 20.6885C24.8459 20.4341 24.7794 20.1535 24.7791 19.8689V16.4179C24.7791 15.2021 24.2961 14.0361 23.4364 13.1764C22.5767 12.3167 21.4107 11.8337 20.1949 11.8337Z"
      fill="black"
    />
  </Svg>
);

const SupportIcon = () => (
  <View style={{ width: 40, height: 40, position: "relative" }}>
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      style={{ position: "absolute" }}
    >
      <Circle cx="20" cy="20" r="20" fill="white" />
    </Svg>
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ position: "absolute", left: 8, top: 8 }}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8 10.18C19.49 7.00002 17.61 2 11.8 2C5.99002 2 4.11001 7.00002 3.80002 10.18C2.71252 10.5927 1.9952 11.6368 2.00002 12.8V14.2C2.00002 15.7464 3.25365 17 4.80001 17C6.34642 17 7.60004 15.7464 7.60004 14.2V12.8C7.59498 11.6619 6.90404 10.6393 5.85001 10.21C6.05002 8.36998 7.03004 4.00002 11.8 4.00002C16.57 4.00002 17.54 8.36998 17.74 10.21C16.6882 10.6402 16.0007 11.6636 16 12.8V14.2C16.0022 14.7269 16.1524 15.2425 16.4335 15.6881C16.7147 16.1337 17.1154 16.4913 17.59 16.72C17.17 17.51 16.1 18.58 13.47 18.9C12.9443 18.1017 11.9272 17.787 11.0424 18.1489C10.1578 18.5108 9.65279 19.4481 9.83729 20.386C10.0218 21.3239 10.8442 22 11.8 22C12.1704 21.9979 12.5329 21.8931 12.8472 21.6971C13.1615 21.5011 13.4152 21.2217 13.58 20.89C17.87 20.4 19.24 18.19 19.67 16.89C20.8333 16.5132 21.6157 15.4227 21.6 14.2V12.8C21.6048 11.6368 20.8875 10.5927 19.8 10.18ZM5.60002 14.2C5.60002 14.6418 5.24185 15 4.80001 15C4.35816 15 4.00004 14.6419 4.00004 14.2V12.8C3.99923 12.6944 4.01933 12.5897 4.05917 12.492C4.09901 12.3942 4.15781 12.3053 4.23217 12.2304C4.30654 12.1554 4.395 12.0959 4.49247 12.0553C4.58993 12.0148 4.69446 11.9939 4.80003 11.9939C4.90561 11.9939 5.01014 12.0148 5.1076 12.0553C5.20506 12.0959 5.29352 12.1554 5.36789 12.2304C5.44226 12.3053 5.50105 12.3942 5.5409 12.492C5.58074 12.5897 5.60083 12.6944 5.60002 12.8V14.2ZM18 12.8C18 12.3582 18.3582 12 18.8 12C19.2419 12 19.6 12.3582 19.6 12.8V14.2C19.6 14.6418 19.2419 15 18.8 15C18.3582 15 18 14.6419 18 14.2V12.8Z"
        fill="black"
      />
    </Svg>
  </View>
);

const ChatIcon = () => (
  <Svg width="23" height="22" viewBox="0 0 23 22" fill="none">
    <Path
      d="M4.27473 17.4167L3.42223 17.0776C3.36132 17.2308 3.34289 17.3977 3.36887 17.5606C3.39486 17.7234 3.4643 17.8763 3.56989 18.003C3.67547 18.1297 3.81328 18.2255 3.96879 18.2805C4.1243 18.3354 4.29175 18.3474 4.45348 18.3151L4.27473 17.4167ZM8.58857 16.5587L9.02307 15.7512L8.73248 15.5953L8.40982 15.6595L8.58857 16.5587ZM5.7634 13.674L6.6159 14.0132L6.76532 13.6337L6.58565 13.2679L5.7634 13.674ZM18.0247 11.0001C18.0247 13.9756 15.4095 16.5001 12.0389 16.5001V18.3334C16.2932 18.3334 19.8581 15.1122 19.8581 11.0001H18.0247ZM6.05398 11.0001C6.05398 8.02458 8.67015 5.50008 12.0398 5.50008V3.66675C7.78557 3.66675 4.21973 6.88791 4.21973 11.0001H6.05398ZM12.0398 5.50008C15.4095 5.50008 18.0247 8.02458 18.0247 11.0001H19.8581C19.8581 6.88791 16.2941 3.66675 12.0398 3.66675V5.50008ZM12.0389 16.5001C10.9343 16.5001 9.90582 16.2251 9.02307 15.7512L8.15407 17.3654C9.34878 18.0059 10.6833 18.3386 12.0389 18.3334V16.5001ZM4.45348 18.3151L8.76732 17.4571L8.40982 15.6595L4.09598 16.5175L4.45348 18.316V18.3151ZM6.58565 13.2679C6.23668 12.5628 6.05537 11.7869 6.05398 11.0001H4.21973C4.21973 12.1001 4.47823 13.1432 4.94023 14.0801L6.58565 13.2679ZM4.91182 13.3348L3.42223 17.0785L5.1254 17.755L6.61407 14.0122L4.9109 13.3348H4.91182Z"
      fill="white"
    />
    <Path
      d="M8.85807 11.9168C9.36433 11.9168 9.77474 11.5064 9.77474 11.0002C9.77474 10.4939 9.36433 10.0835 8.85807 10.0835C8.35181 10.0835 7.94141 10.4939 7.94141 11.0002C7.94141 11.5064 8.35181 11.9168 8.85807 11.9168Z"
      fill="white"
    />
    <Path
      d="M12.0671 11.9168C12.5733 11.9168 12.9837 11.5064 12.9837 11.0002C12.9837 10.4939 12.5733 10.0835 12.0671 10.0835C11.5608 10.0835 11.1504 10.4939 11.1504 11.0002C11.1504 11.5064 11.5608 11.9168 12.0671 11.9168Z"
      fill="white"
    />
    <Path
      d="M15.2741 11.9168C15.7803 11.9168 16.1908 11.5064 16.1908 11.0002C16.1908 10.4939 15.7803 10.0835 15.2741 10.0835C14.7678 10.0835 14.3574 10.4939 14.3574 11.0002C14.3574 11.5064 14.7678 11.9168 15.2741 11.9168Z"
      fill="white"
    />
  </Svg>
);

const ScanIcon = () => (
  <Svg width="18" height="19" viewBox="0 0 18 19" fill="none">
    <Path
      d="M1 5.5V3.5C1 2.96957 1.21071 2.46086 1.58579 2.08579C1.96086 1.71071 2.46957 1.5 3 1.5H5M1 13.5V15.5C1 16.0304 1.21071 16.5391 1.58579 16.9142C1.96086 17.2893 2.46957 17.5 3 17.5H5M13 1.5H15C15.5304 1.5 16.0391 1.71071 16.4142 2.08579C16.7893 2.46086 17 2.96957 17 3.5V5.5M13 17.5H15C15.5304 17.5 16.0391 17.2893 16.4142 16.9142C16.7893 16.5391 17 16.0304 17 15.5V13.5M4 9.5H14"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function ItemSubstitutionScreen() {
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.push("/(tabs)/orders");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={handleGoBack}>
              <BackArrowIcon />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Item Substitution</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => router.push("/(tabs)/inbox")}>
              <NotificationIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/(tabs)/help")}>
              <SupportIcon />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentCard}>
            <View style={styles.deliveryHeader}>
              <View style={styles.deliveryHeaderContent}>
                <Text style={styles.deliveryTime}>Deliver by 10:00 AM</Text>
                <View style={styles.progressSection}>
                  <Text style={styles.itemsLeft}>13 Items left</Text>
                  <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarFill} />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.cardContent}>
              <View style={styles.orderedItemCard}>
                <View style={styles.itemRow}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: MOCK_ORDERED_ITEM.image }}
                      style={styles.itemImage}
                    />
                  </View>
                  <View style={styles.itemDetails}>
                    <Text style={styles.itemLabel}>
                      {MOCK_ORDERED_ITEM.name}
                    </Text>
                    <Text style={styles.itemDescription}>
                      {MOCK_ORDERED_ITEM.description}
                    </Text>
                    <View style={styles.itemFooter}>
                      <Text style={styles.itemPrice}>
                        {MOCK_ORDERED_ITEM.price}
                      </Text>
                      <Text style={styles.itemQuantity}>
                        {MOCK_ORDERED_ITEM.quantityFound}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.instructionsSection}>
                <Text style={styles.instructionsTitle}>
                  Feel free to pick your own substitution
                </Text>
                <Text style={styles.instructionsSubtitle}>
                  We suggest finding an item similar in price, size, quantity or
                  type.
                </Text>
              </View>

              <View style={styles.chatCard}>
                <Text style={styles.chatText}>
                  Feeling unsure about what to pick?{"\n"}you can always chat
                  the customer
                </Text>
                <TouchableOpacity
                  style={styles.chatButton}
                  onPress={() => router.push("/(tabs)/inbox")}
                >
                  <ChatIcon />
                  <Text style={styles.chatButtonText}>Chat</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.noSubstitutionButton}
            onPress={() => router.push("/(tabs)/orders/finding-items")}
          >
            <Text style={styles.noSubstitutionText}>No substitution found</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => router.push("/(tabs)/orders/verify-order-code")}
          >
            <ScanIcon />
            <Text style={styles.scanButtonText}>Scan Item</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 12,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  scrollView: {
    flex: 1,
  },
  contentCard: {
    marginHorizontal: 19,
    marginTop: 10,
  },
  deliveryHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingVertical: 5,
  },
  deliveryHeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  deliveryTime: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#101010",
  },
  progressSection: {
    width: 123,
    gap: 4,
  },
  itemsLeft: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#0085FF",
    textAlign: "right",
  },
  progressBarContainer: {
    height: 4,
    borderRadius: 16,
    backgroundColor: "#D9D9D9",
  },
  progressBarFill: {
    width: 18,
    height: 4,
    borderRadius: 16,
    backgroundColor: "#0085FF",
  },
  cardContent: {
    paddingVertical: 27,
    paddingHorizontal: 9,
    backgroundColor: "#FAFAFB",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    gap: 21,
  },
  orderedItemCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FFF",
  },
  itemRow: {
    flexDirection: "row",
  },
  imageContainer: {
    width: 81,
    height: 76,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  itemImage: {
    width: 57,
    height: 57,
  },
  itemDetails: {
    flex: 1,
    gap: 6,
  },
  itemLabel: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
  },
  itemDescription: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#484C52",
  },
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPrice: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
  itemQuantity: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#7C7B7B",
  },
  instructionsSection: {
    gap: 8,
  },
  instructionsTitle: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
  instructionsSubtitle: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#7C7B7B",
  },
  chatCard: {
    padding: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#0085FF",
    backgroundColor: "#FAFAFB",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  chatText: {
    flex: 1,
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#707070",
    lineHeight: 20,
  },
  chatButton: {
    flexDirection: "row",
    paddingVertical: 9,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  chatButtonText: {
    fontFamily: "Raleway",
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF",
  },
  bottomButtons: {
    paddingHorizontal: 22,
    paddingBottom: 13,
    gap: 13,
  },
  noSubstitutionButton: {
    paddingVertical: 14,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#0085FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  noSubstitutionText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    lineHeight: 25,
    textAlign: "center",
  },
  scanButton: {
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 120,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  scanButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
    lineHeight: 25,
    textAlign: "center",
  },
});
