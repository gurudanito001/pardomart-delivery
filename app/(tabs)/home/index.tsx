import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import {
  NotificationSVG,
  SupportSVG,
  DoubleArrowSVG,
  OrdersIconSVG,
} from "../../../components/icons";
import { MenuButton } from "../../../components/MenuButton";
import OrderCard from "../../../components/OrderCard";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const ORDERS_DATA = [
  {
    id: "1",
    type: "shop-deliver" as const,
    total: "$30.22",
    customerName: "Mr Damilare Adebanjo",
    time: "12:00pm",
    date: "03/2025",
    units: "20 units",
  },
  {
    id: "2",
    type: "deliver" as const,
    total: "$30.22",
    customerName: "Mr Damilare Adebanjo",
    time: "12:00pm",
    date: "03/2025",
    units: "20 units",
  },
  {
    id: "3",
    type: "shop-deliver" as const,
    total: "$30.22",
    customerName: "Mr Damilare Adebanjo",
    time: "12:00pm",
    date: "03/2025",
    units: "20 units",
  },
];

export default function HomeScreen() {
  const handleGoOffline = () => {
    console.log("Go offline pressed");
  };

  const handlePreviewOrder = () => {
    router.push("/(tabs)/orders/order-preview");
  };

  return (
    <View style={styles.container}>
      {/* World Map Background */}
      <Image
        source={{
          uri: "https://api.builder.io/api/v1/image/assets/TEMP/3619225119bd10f6a1c9579a1f7e6b81d11749d1?width=860",
        }}
        style={styles.worldMap}
        resizeMode="cover"
      />

      {/* Header with Menu and Icons */}
      <View style={styles.header}>
        <MenuButton />

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationSVG width={22} height={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <SupportSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Handle Bar */}
        <View style={styles.handleBar} />

        {/* Go Offline Button */}
        <TouchableOpacity
          style={styles.goOfflineButton}
          onPress={handleGoOffline}
        >
          <View style={styles.offlineIconContainer}>
            <DoubleArrowSVG width={19} height={20} color="#FFF" />
          </View>
          <Text style={styles.goOfflineText}>Go Offline</Text>
        </TouchableOpacity>

        {/* My Orders Section */}
        <View style={styles.myOrdersSection}>
          <View style={styles.myOrdersContent}>
            <View style={styles.myOrdersLeft}>
              <OrdersIconSVG width={24} height={24} color="#000" />
              <Text style={styles.myOrdersText}>My Orders</Text>
            </View>
            <Text style={styles.ordersCount}>3 Orders</Text>
          </View>
        </View>

        {/* Orders List */}
        <ScrollView
          style={styles.ordersList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ordersContent}
        >
          {ORDERS_DATA.map((order) => (
            <OrderCard
              key={order.id}
              type={order.type}
              total={order.total}
              customerName={order.customerName}
              time={order.time}
              date={order.date}
              units={order.units}
              onPreviewOrder={handlePreviewOrder}
            />
          ))}
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
  worldMap: {
    width: SCREEN_WIDTH,
    height: 684,
    position: "absolute",
    top: 0,
    left: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingTop: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contentContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 16,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    height: 650,
  },
  handleBar: {
    width: 70,
    height: 5,
    backgroundColor: "#EEE",
    borderRadius: 2.5,
    alignSelf: "center",
    marginBottom: 20,
  },
  goOfflineButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C43D28",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    height: 48,
    position: "relative",
  },
  offlineIconContainer: {
    position: "absolute",
    left: 4,
    top: 3.2,
    backgroundColor: "#851403",
    borderRadius: 14,
    width: 49,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  goOfflineText: {
    fontSize: 18,
    fontFamily: "Raleway",
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
    lineHeight: 25,
  },
  myOrdersSection: {
    backgroundColor: "#D9EDFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 13,
    paddingRight: 17,
    marginBottom: 20,
    height: 48,
  },
  myOrdersContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  myOrdersLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  myOrdersText: {
    fontSize: 16,
    fontFamily: "Raleway",
    fontWeight: "700",
    color: "#000",
    lineHeight: 25,
  },
  ordersCount: {
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#000",
    lineHeight: 25,
  },
  ordersList: {
    flex: 1,
  },
  ordersContent: {
    gap: 14,
    paddingBottom: 20,
  },
});
