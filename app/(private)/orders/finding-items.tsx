import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MenuSVG } from "@/components/icons/MenuSVG";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";
import { OrdersIconSVG } from "@/components/icons/OrdersIconSVG";
import { ClockIconSVG } from "@/components/icons/ClockIconSVG";
import { CalendarIconSVG } from "@/components/icons/CalendarIconSVG";
import { MessageIconSVG } from "@/components/icons/MessageIconSVG";
import { PhoneIconSVG } from "@/components/icons/PhoneIconSVG";
import { ScanIconSVG } from "@/components/icons/ScanIconSVG";
import { Svg, Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const CloseIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <Path
      d="M2.25 17.5L0.5 15.75L7.5 8.75L0.5 1.75L2.25 0L9.25 7L16.25 0L18 1.75L11 8.75L18 15.75L16.25 17.5L9.25 10.5L2.25 17.5Z"
      fill="black"
    />
  </Svg>
);

export default function FindingItemScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity style={styles.menuButton}>
                <MenuSVG width={24} height={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Finding Item</Text>
            </View>
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
            <View style={styles.itemsLeftCard}>
              <View style={styles.itemsLeftContent}>
                <OrdersIconSVG width={24} height={24} color="#000" />
                <Text style={styles.itemsLeftText}>35 Items left</Text>
              </View>
            </View>

            <View style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Image
                  source={{
                    uri: "https://api.builder.io/api/v1/image/assets/TEMP/c91bce15e2114688cb19d13e673d86c47c9917ca?width=60",
                  }}
                  style={styles.profileImage}
                />
                <View style={styles.orderInfo}>
                  <View style={styles.orderInfoTop}>
                    <View style={styles.customerInfo}>
                      <Text style={styles.customerName}>
                        Mr Damilare Adebanjo
                      </Text>
                      <View style={styles.orderMeta}>
                        <View style={styles.metaItem}>
                          <ClockIconSVG
                            width={12}
                            height={12}
                            color="#7C7B7B"
                          />
                          <Text style={styles.metaText}>12:00pm</Text>
                        </View>
                        <View style={styles.metaItem}>
                          <CalendarIconSVG
                            width={12}
                            height={12}
                            color="#7C7B7B"
                          />
                          <Text style={styles.metaText}>03/2025</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.actionIcons}>
                      <MessageIconSVG width={30} height={30} />
                      <PhoneIconSVG width={30} height={30} />
                    </View>
                  </View>
                  <View style={styles.addressRow}>
                    <Text style={styles.address}>
                      47 North Union Avenue, Chicago, Illinious{"\n"}606102,
                      United states
                    </Text>
                    <Text style={styles.distance}>4.5 Miles</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.shoppingCard}>
              <Text style={styles.shoppingItemsLabel}>SHOPPING ITEMS</Text>
              <Text style={styles.itemTitle}>Chicken Item</Text>

              <View style={styles.productContainer}>
                <View style={styles.productImageWrapper}>
                  <Image
                    source={{
                      uri: "https://api.builder.io/api/v1/image/assets/TEMP/bffa3d330bb5259b8db85d1d8667ade35b3bd9ee?width=330",
                    }}
                    style={styles.productImage}
                  />
                  <View style={styles.perishableBadge}>
                    <Text style={styles.perishableText}>Perishable</Text>
                  </View>
                </View>

                <View style={styles.productDetails}>
                  <View style={styles.productDetailRow}>
                    <Text style={styles.priceLabel}>
                      <Text style={styles.priceLabelGray}>Price</Text>{" "}
                      <Text style={styles.priceValue}>$31.21</Text>
                    </Text>
                    <Text style={styles.quantity}>2 qty</Text>
                  </View>
                  <Text style={styles.productDescription}>
                    Valbet fully cooked chicken nuggets - frozen, 9g protein
                    per4 nugget serving, 24 oz (1.5lb) Bag
                  </Text>
                  <View style={styles.productInfoRow}>
                    <Text style={styles.sizeText}>Size - 24 oz</Text>
                    <Text style={styles.upcText}>
                      <Text style={styles.upcLabel}>UPC </Text>
                      <Text style={styles.upcValue}>76335342</Text>
                    </Text>
                  </View>
                </View>

                <View style={styles.divider} />
              </View>
            </View>

            <View style={styles.bottomSection}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.cantFindText}>Can't find an item?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.scanButton}>
                <ScanIconSVG width={24} height={24} color="#FFFFFF" />
                <Text style={styles.scanButtonText}>Scan an Item</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* "Can't Find Item" Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <CloseIcon />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Can&apos;t find an Item?</Text>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.substituteButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.substituteButtonText}>Substitute Item</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.outOfStockButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.outOfStockButtonText}>Out of Stock</Text>
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
    backgroundColor: "#FFFFFF",
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 14,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 22,
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
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 21,
    paddingTop: 12,
    gap: 20,
  },
  itemsLeftCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 9,
    paddingHorizontal: 22,
  },
  itemsLeftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  itemsLeftText: {
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
    lineHeight: 22,
  },
  orderCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FBFBFB",
    padding: 18,
  },
  orderHeader: {
    flexDirection: "row",
    gap: 9,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 32,
  },
  orderInfo: {
    flex: 1,
    gap: 14,
  },
  orderInfoTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  customerInfo: {
    gap: 6,
  },
  customerName: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
  },
  orderMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  metaText: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: "400",
    color: "#7C7B7B",
  },
  actionIcons: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 13,
  },
  addressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  address: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: "700",
    color: "#484C52",
    width: 200,
  },
  distance: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: "400",
    color: "#484C52",
  },
  shoppingCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FAFAFB",
    padding: 16,
    paddingBottom: 268,
    gap: 15,
  },
  shoppingItemsLabel: {
    fontFamily: "Open Sans",
    fontSize: 10,
    fontWeight: "400",
    color: "#484C52",
  },
  itemTitle: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
  },
  productContainer: {
    gap: 22,
  },
  productImageWrapper: {
    alignSelf: "center",
    width: 252,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#FAFAFB",
    position: "relative",
  },
  productImage: {
    width: 165,
    height: 194,
    resizeMode: "contain",
  },
  perishableBadge: {
    position: "absolute",
    top: 12,
    right: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "rgba(191, 227, 198, 0.50)",
  },
  perishableText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "700",
    color: "#01891C",
    lineHeight: 18,
  },
  productDetails: {
    gap: 6,
  },
  productDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceLabel: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
  },
  priceLabelGray: {
    color: "#898A8D",
  },
  priceValue: {
    color: "#000000",
  },
  quantity: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
  },
  productDescription: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "700",
    color: "#484C52",
    lineHeight: 18,
  },
  productInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sizeText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "700",
    color: "#898A8D",
  },
  upcText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
  },
  upcLabel: {
    color: "#898A8D",
  },
  upcValue: {
    color: "#484C52",
  },
  divider: {
    height: 1,
    backgroundColor: "#D9D9D9",
  },
  bottomSection: {
    gap: 16,
    paddingBottom: 40,
  },
  cantFindText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "600",
    color: "#C43D28",
    textAlign: "center",
    lineHeight: 25,
  },
  scanButton: {
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
  scanButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 25,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  modalContainer: {
    width: "100%",
    maxWidth: 398,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 21,
    paddingHorizontal: 41,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 14,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "center",
    marginBottom: 29,
  },
  modalActions: {
    gap: 22,
  },
  substituteButton: {
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 9,
    elevation: 3,
  },
  substituteButtonText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#FFF",
    lineHeight: 25,
    textAlign: "center",
  },
  outOfStockButton: {
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 16,
    backgroundColor: "#BBB",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 9,
    elevation: 3,
  },
  outOfStockButtonText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#FFF",
    lineHeight: 25,
    textAlign: "center",
  },
});
