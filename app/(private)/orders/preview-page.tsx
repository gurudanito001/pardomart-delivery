import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { router } from "expo-router";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { ArrowBackSVG, NotificationSVG, SupportSVG } from "@/components";

const LightBulbIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M7 20H11C11 21.1 10.1 22 9 22C7.9 22 7 21.1 7 20ZM5 19H13V17H5V19ZM16.5 9.5C16.5 13.32 13.84 15.36 12.73 16H5.27C4.16 15.36 1.5 13.32 1.5 9.5C1.5 5.36 4.86 2 9 2C13.14 2 16.5 5.36 16.5 9.5ZM14.5 9.5C14.5 6.47 12.03 4 9 4C5.97 4 3.5 6.47 3.5 9.5C3.5 11.97 4.99 13.39 5.85 14H12.15C13.01 13.39 14.5 11.97 14.5 9.5ZM21.37 7.37L20 8L21.37 8.63L22 10L22.63 8.63L24 8L22.63 7.37L22 6L21.37 7.37ZM19 6L19.94 3.94L22 3L19.94 2.06L19 0L18.06 2.06L16 3L18.06 3.94L19 6Z"
      fill="#FFAC06"
    />
  </Svg>
);

const CheckmarkIcon = () => (
  <Svg width={13} height={12} viewBox="0 0 13 12" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.01626 12C6.80633 12 7.58866 11.8448 8.31858 11.5433C9.04851 11.2417 9.71174 10.7998 10.2704 10.2426C10.8291 9.68549 11.2722 9.02405 11.5746 8.2961C11.8769 7.56815 12.0325 6.78793 12.0325 6C12.0325 5.21207 11.8769 4.43185 11.5746 3.7039C11.2722 2.97595 10.8291 2.31451 10.2704 1.75736C9.71174 1.20021 9.04851 0.758251 8.31858 0.456723C7.58866 0.155195 6.80633 -1.17411e-08 6.01626 0C4.42065 2.37122e-08 2.89039 0.632141 1.76212 1.75736C0.633854 2.88258 0 4.4087 0 6C0 7.5913 0.633854 9.11742 1.76212 10.2426C2.89039 11.3679 4.42065 12 6.01626 12ZM5.86117 8.42667L9.20354 4.42667L8.17677 3.57333L5.30233 7.01267L3.81498 5.52867L2.86976 6.47133L4.87518 8.47133L5.39257 8.98733L5.86117 8.42667Z"
      fill="#01891C"
    />
  </Svg>
);

const ShoppingCartCheckoutIcon = () => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
    <Path
      d="M7 22.5C6.45 22.5 5.97934 22.3043 5.588 21.913C5.19667 21.5217 5.00067 21.0507 5 20.5C4.99934 19.9493 5.19534 19.4787 5.588 19.088C5.98067 18.6973 6.45134 18.5013 7 18.5C7.54867 18.4987 8.01967 18.6947 8.413 19.088C8.80634 19.4813 9.002 19.952 9 20.5C8.998 21.048 8.80234 21.519 8.413 21.913C8.02367 22.307 7.55267 22.5027 7 22.5ZM17 22.5C16.45 22.5 15.9793 22.3043 15.588 21.913C15.1967 21.5217 15.0007 21.0507 15 20.5C14.9993 19.9493 15.1953 19.4787 15.588 19.088C15.9807 18.6973 16.4513 18.5013 17 18.5C17.5487 18.4987 18.0197 18.6947 18.413 19.088C18.8063 19.4813 19.002 19.952 19 20.5C18.998 21.048 18.8023 21.519 18.413 21.913C18.0237 22.307 17.5527 22.5027 17 22.5ZM3 4.5H2C1.71667 4.5 1.47934 4.404 1.288 4.212C1.09667 4.02 1.00067 3.78267 1 3.5C0.999337 3.21733 1.09534 2.98 1.288 2.788C1.48067 2.596 1.718 2.5 2 2.5H3.65C3.83334 2.5 4.00834 2.55 4.175 2.65C4.34167 2.75 4.46667 2.89167 4.55 3.075L8.525 11.5H15.525L19.15 5C19.2333 4.83333 19.35 4.70833 19.5 4.625C19.65 4.54167 19.8167 4.5 20 4.5C20.3833 4.5 20.671 4.66267 20.863 4.988C21.055 5.31333 21.059 5.64233 20.875 5.975L17.3 12.45C17.1167 12.7833 16.871 13.0417 16.563 13.225C16.255 13.4083 15.9173 13.5 15.55 13.5H8.1L7 15.5H18C18.2833 15.5 18.521 15.596 18.713 15.788C18.905 15.98 19.0007 16.2173 19 16.5C18.9993 16.7827 18.9033 17.0203 18.712 17.213C18.5207 17.4057 18.2833 17.5013 18 17.5H7C6.25 17.5 5.679 17.175 5.287 16.525C4.895 15.875 4.88267 15.2167 5.25 14.55L6.6 12.1L3 4.5ZM12.175 7.5H9C8.71667 7.5 8.47934 7.404 8.288 7.212C8.09667 7.02 8.00067 6.78267 8 6.5C7.99934 6.21733 8.09534 5.98 8.288 5.788C8.48067 5.596 8.718 5.5 9 5.5H12.175L11.275 4.6C11.075 4.4 10.979 4.16667 10.987 3.9C10.995 3.63333 11.0993 3.4 11.3 3.2C11.5 3.01667 11.7333 2.92067 12 2.912C12.2667 2.90333 12.5 2.99933 12.7 3.2L15.3 5.8C15.5 6 15.6 6.23333 15.6 6.5C15.6 6.76667 15.5 7 15.3 7.2L12.7 9.8C12.5167 9.98333 12.2877 10.0793 12.013 10.088C11.7383 10.0967 11.5007 10.0007 11.3 9.8C11.1167 9.61667 11.025 9.38333 11.025 9.1C11.025 8.81667 11.1167 8.58333 11.3 8.4L12.175 7.5Z"
      fill="white"
    />
  </Svg>
);

const ArrowRightIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12.8333 16.375L17 12M17 12L12.8333 7.625M17 12H7"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface ShoppingItem {
  id: string;
  image: string;
  status: "confirmed";
  foundCount: string;
  description: string;
  price: string;
  perishable?: boolean;
}

const SHOPPING_ITEMS: ShoppingItem[] = [
  {
    id: "1",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b15e90ad66573202e16cb0681e9db93877e30680",
    status: "confirmed",
    foundCount: "2 of 2 found",
    description:
      "Valbest fully cooked chicken Nugget- frozen, 9g protein per 4 nugget serving, 24 0z (1.5lb)",
    price: "$3.88",
  },
  {
    id: "2",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b15e90ad66573202e16cb0681e9db93877e30680",
    status: "confirmed",
    foundCount: "2 of 2 found",
    description:
      "Valbest fully cooked chicken Nugget- frozen, 9g protein per 4 nugget serving, 24 0z (1.5lb)",
    price: "$3.88",
  },
  {
    id: "3",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f01bb60245c119c55bf9106107aa831fc02d8d93",
    status: "confirmed",
    foundCount: "3 of 3 found",
    description:
      "Valbest fully cooked chicken Nugget- frozen, 9g protein per 4 nugget serving, 24 0z (1.5lb)",
    price: "$3.88",
    perishable: true,
  },
  {
    id: "4",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f01bb60245c119c55bf9106107aa831fc02d8d93",
    status: "confirmed",
    foundCount: "3 of 3 found",
    description:
      "Valbest fully cooked chicken Nugget- frozen, 9g protein per 4 nugget serving, 24 0z (1.5lb)",
    price: "$3.88",
    perishable: true,
  },
];

export default function PreviewPageScreen() {
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleNotifications = () => {
    router.push("/(tabs)/inbox");
  };

  const handleSupport = () => {
    router.push("/(tabs)/help");
  };

  const handleCheckout = () => {
    console.log("Go to checkout");
  };

  const handleNext = () => {
    console.log("Next page");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <ArrowBackSVG width={30} height={30} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Preview</Text>
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

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.tipCard}>
          <View style={styles.tipIconContainer}>
            <LightBulbIcon />
          </View>
          <Text style={styles.tipText}>
            Cross check all shopping items and make sure the list is complete
          </Text>
        </View>

        <View style={styles.itemsList}>
          {SHOPPING_ITEMS.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <View style={styles.itemHeader}>
                  <View style={styles.statusContainer}>
                    <CheckmarkIcon />
                    <Text style={styles.statusText}>Confirmed</Text>
                  </View>
                  <Text style={styles.foundText}>{item.foundCount}</Text>
                </View>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <View style={styles.itemFooter}>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  {item.perishable && (
                    <View style={styles.perishableBadge}>
                      <Text style={styles.perishableText}>Perishable</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.pagination}>
          <Text style={styles.paginationText}>Showing 1-10 of 20</Text>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.nextText}>Next</Text>
            <ArrowRightIcon />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
        >
          <ShoppingCartCheckoutIcon />
          <Text style={styles.checkoutText}>Go to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 27,
    paddingVertical: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
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
  content: {
    flex: 1,
    paddingHorizontal: 27,
  },
  tipCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    marginBottom: 23,
  },
  tipIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  tipText: {
    flex: 1,
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#898A8D",
  },
  itemsList: {
    gap: 14,
  },
  itemCard: {
    flexDirection: "row",
    padding: 16,
    gap: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FFF",
  },
  itemImage: {
    width: 57,
    height: 57,
    borderRadius: 16,
  },
  itemDetails: {
    flex: 1,
    gap: 6,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  statusText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
  },
  foundText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "700",
    color: "#7C7B7B",
    textAlign: "right",
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
  perishableBadge: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: "rgba(33, 196, 93, 0.10)",
  },
  perishableText: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: "400",
    color: "#21C45D",
    textAlign: "center",
    lineHeight: 20,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 23,
    marginBottom: 24,
  },
  paginationText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#202224",
    opacity: 0.8,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  nextText: {
    fontFamily: "Nunito Sans",
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
  footer: {
    paddingHorizontal: 22,
    paddingVertical: 16,
  },
  checkoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  checkoutText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
    lineHeight: 25,
  },
});
