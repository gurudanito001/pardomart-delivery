import { useAuth } from "@/contexts/AppProvider";
import { router } from "expo-router";
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
  OrdersIconSVG,
} from "../../../components/icons";
import OrderCard, { OrderCardProps } from "../../../components/OrderCard";
import { toast } from "sonner-native";
import { useQuery } from "@tanstack/react-query";
import { OrderApi } from "../../../api/endpoints/order-api";
import { apiConfig } from "../../../api/config";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function OrdersScreen() {
  const { state: { user } } = useAuth();
  
  const orderApi = useMemo(() => new OrderApi(apiConfig), []);

  const { data: myOrdersData, isLoading: isOrdersLoading, refetch } = useQuery({
    queryKey: ['orders', 'me'],
    queryFn: async () => {
      const response = await orderApi.orderDeliveryMeGet();
      return response.data;
    },
    enabled: !!user,
    refetchInterval: 15000,
  });

  const [selectedTab, setSelectedTab] = useState<'pending' | 'completed'>('pending');

  const orders = useMemo(() => {
    const rawItems = (myOrdersData as any)?.data || (myOrdersData as any)?.items || (Array.isArray(myOrdersData) ? myOrdersData : []);
    
    return rawItems.map((order: any) => ({
      id: order.id,
      status: order.orderStatus,
      type: (order.shoppingMethod === 'delivery_person' ? 'shop-deliver' : 'deliver') as "shop-deliver" | "deliver",
      total: `$${Number(order.totalAmount || 0).toFixed(2)}`,
      customerName: order.customerName || order.user?.name || 'Customer',
      time: (order.createdAt || order.scheduledDeliveryTime) ? new Date(order.createdAt || order.scheduledDeliveryTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase() : '',
      date: (order.createdAt || order.scheduledDeliveryTime) ? new Date(order.createdAt || order.scheduledDeliveryTime).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }) : '',
      units: order.numberOfOrderItems ? `${order.numberOfOrderItems} units` : `${order.items?.length || 0} units`,
    }));
  }, [myOrdersData]);

  const filteredOrders = useMemo(() => {
    return orders.filter((order: any) => {
      const isCompleted = order.status === 'delivered' || order.status === 'picked_up_by_customer' || order.status === 'cancelled';
      if (selectedTab === 'completed') return isCompleted;
      return !isCompleted; // Pending statuses
    });
  }, [orders, selectedTab]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const handlePreviewOrder = (orderId: string) => {
    router.push({
      pathname: "/(private)/orders/order-preview",
      params: { id: orderId }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationSVG width={22} height={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <SupportSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "pending" && styles.activeTab]}
          onPress={() => setSelectedTab("pending")}
        >
          <Text style={[styles.tabText, selectedTab === "pending" && styles.activeTabText]}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "completed" && styles.activeTab]}
          onPress={() => setSelectedTab("completed")}
        >
          <Text style={[styles.tabText, selectedTab === "completed" && styles.activeTabText]}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>

        {/* My Orders Section */}
        <View style={styles.myOrdersSection}>
          <View style={styles.myOrdersContent}>
            <View style={styles.myOrdersLeft}>
              <OrdersIconSVG width={24} height={24} color="#000" />
              <Text style={styles.myOrdersText}>My Orders</Text>
            </View>
            <Text style={styles.ordersCount}>{filteredOrders.length} Orders</Text>
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
          ) : filteredOrders.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#7C8BA0' }}>No {selectedTab} orders found.</Text>
          ) : (
            filteredOrders.map((order: any) => (
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 14,
    paddingBottom: 14,
  },
  headerTitle: {
    fontFamily: "Raleway",
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 28,
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
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
    gap: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#0085FF',
    borderColor: '#0085FF',
  },
  tabText: {
    fontFamily: 'Raleway',
    fontSize: 14,
    fontWeight: '600',
    color: '#484C52',
  },
  activeTabText: {
    color: "#FFF",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
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
