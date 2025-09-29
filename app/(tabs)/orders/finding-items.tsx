import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ShoppingItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  size: string;
  upc: string;
  isPerishable: boolean;
}

const MOCK_ITEMS: ShoppingItem[] = [
  {
    id: '1',
    name: 'Valbest Chicken Nuggets',
    price: 3121,
    quantity: 2,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bffa3d330bb5259b8db85d1d8667ade35b3bd9ee?width=330',
    description: 'Fully cooked frozen nuggets, 24 oz family pack, store freezer aisle 6.',
    size: '24 oz',
    upc: '76335342',
    isPerishable: true,
  },
  {
    id: '2',
    name: 'Organic Chicken Fillet',
    price: 4280,
    quantity: 1,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/6b68a047fc4c8322cdc7628a005b839185f29a09?width=370',
    description: 'Free-range fillet, chilled section, keep below 4°C during transit.',
    size: '18 oz',
    upc: '78264311',
    isPerishable: true,
  },
];

export default function FindingItemsScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.push('/(tabs)/orders');
  };

  const handleCantFindItem = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubstituteItem = () => {
    setIsModalVisible(false);
    router.push('/(tabs)/orders/item-substitution');
  };

  const handleOutOfStock = () => {
    setIsModalVisible(false);
    router.push('/(tabs)/orders/finding-item');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground} />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.roundButton} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Finding items</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.roundButton} onPress={() => router.push('/(tabs)/inbox')}>
              <Ionicons name="notifications-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton} onPress={() => router.push('/(tabs)/help')}>
              <Ionicons name="help-buoy-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.badgeRow}>
          <View style={styles.badgeCard}>
            <Ionicons name="list-circle-outline" size={26} color="#FFFFFF" />
            <Text style={styles.badgeText}>35 items left in this order</Text>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.customerCard}>
          <Image
            source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/c91bce15e2114688cb19d13e673d86c47c9917ca?width=60' }}
            style={styles.customerAvatar}
          />
          <View style={styles.customerDetails}>
            <Text style={styles.customerName}>Mr Damilare Adebanjo</Text>
            <View style={styles.customerMetaRow}>
              <View style={styles.metaItem}>
                <Ionicons name="time-outline" size={14} color="#6B7280" />
                <Text style={styles.metaText}>12:00 PM pickup</Text>
              </View>
              <View style={styles.metaItem}>
                <Ionicons name="calendar-outline" size={14} color="#6B7280" />
                <Text style={styles.metaText}>03/11/2025</Text>
              </View>
            </View>
            <View style={styles.customerActions}>
              <TouchableOpacity style={styles.communicationButton} onPress={() => router.push('/(tabs)/inbox')}>
                <Ionicons name="chatbubble-ellipses-outline" size={18} color="#2CAF0B" />
                <Text style={styles.communicationText}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.communicationButton} onPress={() => router.push('/(tabs)/help')}>
                <Ionicons name="call" size={18} color="#2563EB" />
                <Text style={styles.communicationText}>Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Items to locate</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/orders/shopping-list')}>
            <Text style={styles.sectionLink}>View list</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemList}>
          {MOCK_ITEMS.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  {item.isPerishable && (
                    <View style={styles.perishableTag}>
                      <Ionicons name="leaf-outline" size={14} color="#FBBF24" />
                      <Text style={styles.perishableText}>Keep chilled</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <View style={styles.itemMetaRow}>
                  <Text style={styles.itemMeta}>Size: {item.size}</Text>
                  <Text style={styles.itemMeta}>UPC: {item.upc}</Text>
                  <Text style={styles.itemMeta}>Qty: {item.quantity}</Text>
                </View>
                <View style={styles.itemFooter}>
                  <Text style={styles.itemPrice}>{`₦${item.price.toFixed(2)}`}</Text>
                  <TouchableOpacity style={styles.scanButton} onPress={() => router.push('/(tabs)/orders/verify-order-code')}>
                    <Ionicons name="scan-outline" size={18} color="#FFFFFF" />
                    <Text style={styles.scanText}>Scan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleCantFindItem}>
          <Ionicons name="help-circle-outline" size={18} color="#06888C" />
          <Text style={styles.secondaryButtonText}>Can&apos;t find an item?</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={isModalVisible} transparent animationType="fade" onRequestClose={handleCloseModal}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Update customer</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Ionicons name="close" size={20} color="#111827" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalDescription}>
              Let the customer know what happened so we can keep the order moving.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleSubstituteItem}>
              <Ionicons name="swap-horizontal-outline" size={18} color="#FFFFFF" />
              <Text style={styles.modalButtonText}>Suggest a substitute</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonSecondary} onPress={handleOutOfStock}>
              <Ionicons name="close-circle-outline" size={18} color="#DC2626" />
              <Text style={styles.modalButtonSecondaryText}>Mark item out of stock</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#06888C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 26,
  },
  roundButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  badgeRow: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  badgeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 18,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 24,
  },
  customerCard: {
    marginTop: -32,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  customerAvatar: {
    width: 56,
    height: 56,
    borderRadius: 18,
  },
  customerDetails: {
    flex: 1,
    gap: 10,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  customerMetaRow: {
    flexDirection: 'row',
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
  customerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  communicationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
  },
  communicationText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  sectionLink: {
    fontSize: 13,
    fontWeight: '600',
    color: '#06888C',
  },
  itemList: {
    gap: 18,
  },
  itemCard: {
    flexDirection: 'row',
    gap: 16,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  itemImage: {
    width: 88,
    height: 88,
    borderRadius: 16,
  },
  itemDetails: {
    flex: 1,
    gap: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    flex: 1,
  },
  perishableTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: '#FEF3C7',
  },
  perishableText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#B45309',
  },
  itemDescription: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  itemMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  itemMeta: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#06888C',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  scanText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: '#E8F5F6',
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#06888C',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 24,
    gap: 18,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  modalDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#06888C',
  },
  modalButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  modalButtonSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F87171',
    backgroundColor: '#FEF2F2',
  },
  modalButtonSecondaryText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#B91C1C',
  },
});
