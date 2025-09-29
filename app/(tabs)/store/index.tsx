import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const STORE_PARTNERS = [
  {
    id: 'fresh-mart',
    name: 'Fresh Mart Supermarket',
    address: '12 Admiralty Road, Lekki Phase 1',
    deliveryTime: '30-40 mins',
    status: 'Accepting orders',
  },
  {
    id: 'organics',
    name: 'Green Organics',
    address: '48 Adeola Odeku Street, Victoria Island',
    deliveryTime: '20-35 mins',
    status: 'High priority store',
  },
  {
    id: 'pharmacy',
    name: 'CityCare Pharmacy',
    address: '7 Awolowo Road, Ikoyi',
    deliveryTime: '25-30 mins',
    status: '24/7 pickup available',
  },
  {
    id: 'market',
    name: 'Ajah Farmers Market',
    address: 'Market Square, Ajah',
    deliveryTime: '45-55 mins',
    status: 'Morning restock pending',
  },
];

const INVENTORY_ALERTS = [
  {
    id: 'stock-low',
    title: 'Low stock alert',
    message: 'Golden Bread (700g) is running low at Fresh Mart. Offer premium wheat as substitute.',
    icon: 'alert-circle-outline' as const,
  },
  {
    id: 'new-arrival',
    title: 'New arrival',
    message: 'Organic strawberries now in stock at Green Organics. Promote during deliveries.',
    icon: 'sparkles-outline' as const,
  },
];

export default function StoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={STORE_PARTNERS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Partner stores</Text>
            <Text style={styles.subtitle}>Track inventory updates and preferred pickup windows.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.storeCard}>
            <View style={styles.storeIconWrapper}>
              <Ionicons name="storefront-outline" size={22} color="#06888C" />
            </View>
            <View style={styles.storeDetails}>
              <Text style={styles.storeName}>{item.name}</Text>
              <Text style={styles.storeAddress}>{item.address}</Text>
              <View style={styles.storeMetaRow}>
                <View style={styles.metaItem}>
                  <Ionicons name="time-outline" size={14} color="#6B7280" />
                  <Text style={styles.metaText}>{item.deliveryTime}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="checkmark-circle" size={14} color="#10B981" />
                  <Text style={styles.metaText}>{item.status}</Text>
                </View>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#A0AEC0" />
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View style={styles.alertSection}>
            <Text style={styles.sectionTitle}>Inventory alerts</Text>
            {INVENTORY_ALERTS.map((alert) => (
              <View key={alert.id} style={styles.alertCard}>
                <View style={styles.alertIconWrapper}>
                  <Ionicons name={alert.icon} size={18} color="#F59E0B" />
                </View>
                <View style={styles.alertDetails}>
                  <Text style={styles.alertTitle}>{alert.title}</Text>
                  <Text style={styles.alertMessage}>{alert.message}</Text>
                </View>
              </View>
            ))}
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 20,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 16,
  },
  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    gap: 16,
  },
  storeIconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#E8F5F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeDetails: {
    flex: 1,
    gap: 6,
  },
  storeName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  storeAddress: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },
  storeMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  alertSection: {
    marginTop: 32,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FBBF24',
    backgroundColor: '#FFFBEB',
    gap: 14,
  },
  alertIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertDetails: {
    flex: 1,
    gap: 4,
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#92400E',
  },
  alertMessage: {
    fontSize: 13,
    fontWeight: '500',
    color: '#92400E',
  },
});
