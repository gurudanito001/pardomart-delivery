import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ProfileDrawer } from "../../../components/ProfileDrawer";

interface Order {
  id: string;
  type: "shop-deliver" | "delivery-only";
  total: number;
  customerName: string;
  time: string;
  date: string;
  orderDate: string;
  units: number;
}

const formatCurrency = (amount: number) => `₦${amount.toFixed(2)}`;

const ORDER_REQUESTS: Order[] = [
  {
    id: "1045",
    type: "shop-deliver",
    total: 30220,
    customerName: "Damilare Adebanjo",
    time: "12:00 PM",
    date: "03/11/2025",
    orderDate: "Pickup window closes in 35 mins",
    units: 20,
  },
  {
    id: "1044",
    type: "shop-deliver",
    total: 17800,
    customerName: "Peace Olabisi",
    time: "1:20 PM",
    date: "03/11/2025",
    orderDate: "Substitution pending approval",
    units: 11,
  },
  {
    id: "1043",
    type: "delivery-only",
    total: 8200,
    customerName: "Adeola Joseph",
    time: "2:05 PM",
    date: "03/11/2025",
    orderDate: "Arrive at customer before 2:45 PM",
    units: 6,
  },
];

const getOrderTypeLabel = (type: Order["type"]) =>
  type === "shop-deliver" ? "Shop & deliver" : "Delivery only";

const getOrderTypeIcon = (type: Order["type"]) =>
  type === "shop-deliver" ? "cart-outline" : "bicycle-outline";

export default function OrdersScreen() {
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.push("/(tabs)/home");
  };

  const handleOpenNotifications = () => {
    router.push("/(tabs)/inbox");
  };

  const handleSupport = () => {
    router.push("/(tabs)/help");
  };

  const handlePreviewOrder = (orderId: string) => {
    router.push({
      pathname: "/(tabs)/orders/shopping-list",
      params: { orderId },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#06888C" />
      <View style={styles.headerBackground} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pageHeader}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>My orders</Text>
            <View style={styles.headerActions}>
              <TouchableOpacity
                style={styles.headerAction}
                onPress={handleOpenNotifications}
              >
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headerAction}
                onPress={handleSupport}
              >
                <Ionicons name="help-buoy-outline" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.banner}>
            <View style={styles.bannerIconWrapper}>
              <Ionicons name="list-circle-outline" size={28} color="#FFFFFF" />
            </View>
            <View style={styles.bannerDetails}>
              <Text style={styles.bannerTitle}>Order requests ready</Text>
              <Text style={styles.bannerSubtitle}>
                Three customers are waiting for confirmation.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.cardList}>
          {ORDER_REQUESTS.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <View style={styles.orderTypeWrapper}>
                  <View style={styles.orderTypeIcon}>
                    <Ionicons
                      name={getOrderTypeIcon(order.type)}
                      size={18}
                      color="#06888C"
                    />
                  </View>
                  <View>
                    <Text style={styles.orderType}>
                      {getOrderTypeLabel(order.type)}
                    </Text>
                    <Text style={styles.orderId}>Order #{order.id}</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
              </View>

              <View style={styles.separator} />

              <View style={styles.orderDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Total</Text>
                  <Text style={styles.detailValue}>
                    {formatCurrency(order.total)}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Customer</Text>
                  <Text style={styles.detailValue}>{order.customerName}</Text>
                </View>
                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <Ionicons name="time-outline" size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{order.time}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons
                      name="calendar-outline"
                      size={14}
                      color="#6B7280"
                    />
                    <Text style={styles.metaText}>{order.date}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="cube-outline" size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{order.units} units</Text>
                  </View>
                </View>
                <Text style={styles.statusText}>{order.orderDate}</Text>
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.cardHint}>
                  Track progress and manage substitutions from here.
                </Text>
                <TouchableOpacity
                  style={styles.previewButton}
                  onPress={() => handlePreviewOrder(order.id)}
                >
                  <Text style={styles.previewText}>Open order</Text>
                  <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Profile Drawer */}
      <ProfileDrawer
        visible={showProfileDrawer}
        onClose={() => setShowProfileDrawer(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    backgroundColor: "#06888C",
  },
  scrollContent: {
    paddingBottom: 32,
  },
  pageHeader: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#7AD0D3",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  headerAction: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
  },
  banner: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    gap: 16,
  },
  bannerIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerDetails: {
    flex: 1,
    gap: 4,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  bannerSubtitle: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.78)",
  },
  cardList: {
    paddingHorizontal: 20,
    gap: 18,
  },
  orderCard: {
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 20,
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  orderHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderTypeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  orderTypeIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#EEF7F7",
    alignItems: "center",
    justifyContent: "center",
  },
  orderType: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  orderId: {
    fontSize: 13,
    fontWeight: "500",
    color: "#6B7280",
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  orderDetails: {
    gap: 10,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
  },
  detailValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6B7280",
  },
  statusText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#06888C",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  cardHint: {
    flex: 1,
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
  },
  previewButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#06888C",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  previewText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
