import { useAuth } from "@/contexts/AppProvider";
import { useUser } from "@/hooks/api/useUser";
import { Redirect, router } from "expo-router";
import React, { useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
  StatusBar,
} from "react-native";
import {
  NotificationSVG,
  SupportSVG,
  DoubleArrowSVG,
  OrdersIconSVG,
} from "../../../components/icons";
import { MenuButton } from "../../../components/MenuButton";
import OrderCard, { OrderCardProps } from "../../../components/OrderCard";
import { toast } from "sonner-native";
import { useQuery } from "@tanstack/react-query";
import { OrderApi } from "../../../api/endpoints/order-api";
import { apiConfig } from "../../../api/config";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function OrdersScreen() {
  const { state: { user } } = useAuth();
  const { updateProfile, loading } = useUser();
  
  const orderApi = useMemo(() => new OrderApi(apiConfig), []);

  const { data: myOrdersData, isLoading: isOrdersLoading, refetch } = useQuery({
    queryKey: ['orders', 'me'],
    queryFn: async () => {
      const response = await orderApi.orderDeliveryMeGet();
      return response.data;
    },
    enabled: !!user?.online,
    refetchInterval: 15000,
  });

  const orders = useMemo(() => {
    const rawItems = (myOrdersData as any)?.data || (myOrdersData as any)?.items || (Array.isArray(myOrdersData) ? myOrdersData : []);
    
    return rawItems.map((order: any) => ({
      id: order.id,
      type: (order.shoppingMethod === 'delivery_person' ? 'shop-deliver' : 'deliver') as "shop-deliver" | "deliver",
      total: `$${Number(order.totalAmount || 0).toFixed(2)}`,
      customerName: order.customerName || order.user?.name || 'Customer',
      time: (order.createdAt || order.scheduledDeliveryTime) ? new Date(order.createdAt || order.scheduledDeliveryTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase() : '',
      date: (order.createdAt || order.scheduledDeliveryTime) ? new Date(order.createdAt || order.scheduledDeliveryTime).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }) : '',
      units: order.numberOfOrderItems ? `${order.numberOfOrderItems} units` : `${order.items?.length || 0} units`,
    }));
  }, [myOrdersData]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const handleGoOffline = async () => {
    try {
      await updateProfile({ online: false });
      toast.success("You are now offline");
    } catch (error: any) {
      console.error("Failed to go offline:", error);
      toast.error(error?.message || "Failed to go offline");
    }
  };

  const handlePreviewOrder = (orderId: string) => {
    router.push({
      pathname: "/(private)/orders/order-preview",
      params: { id: orderId }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
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
       {/*  <View style={styles.handleBar} /> */}

        {/* Go Offline Button */}
        <TouchableOpacity
          style={styles.goOfflineButton}
          onPress={handleGoOffline}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <>
              {/* <View style={styles.offlineIconContainer}>
                <DoubleArrowSVG width={19} height={20} color="#FFF" />
              </View> */}
              <Text style={styles.goOfflineText}>Go Offline</Text>
            </>
          )}
        </TouchableOpacity>

        {/* My Orders Section */}
        <View style={styles.myOrdersSection}>
          <View style={styles.myOrdersContent}>
            <View style={styles.myOrdersLeft}>
              <OrdersIconSVG width={24} height={24} color="#000" />
              <Text style={styles.myOrdersText}>My Orders</Text>
            </View>
            <Text style={styles.ordersCount}>{orders.length} Orders</Text>
          </View>
        </View>

        {/* Orders List */}
        <ScrollView
          style={styles.ordersList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ordersContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#0085FF" colors={["#0085FF"]} />
          }
        >
          {isOrdersLoading ? (
            <ActivityIndicator size="large" color="#0085FF" style={{ marginTop: 20 }} />
          ) : orders.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#7C8BA0' }}>No available orders found.</Text>
          ) : (
            orders.map((order: OrderCardProps) => (
              <OrderCard
                key={order.id}
                type={order.type}
                total={order.total}
                customerName={order.customerName}
                time={order.time}
                date={order.date}
                units={order.units}
                onPreviewOrder={() => handlePreviewOrder(order.id!)}
              />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
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
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingTop: 20,
    position: "absolute",
    top: 15,
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
    gap: 10
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
