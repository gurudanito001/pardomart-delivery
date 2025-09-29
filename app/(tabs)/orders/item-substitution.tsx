import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface OrderedItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantityFound: number;
  totalQuantity: number;
}

const MOCK_ORDERED_ITEM: OrderedItem = {
  id: '1',
  name: 'Valbest Chicken Nugget (24 oz)',
  description:
    'Frozen chicken nuggets with 9g protein per serving. Customer prefers family-sized packs from aisle 6 freezer.',
  price: 3880,
  image: 'https://api.builder.io/api/v1/image/assets/TEMP/b15e90ad66573202e16cb0681e9db93877e30680?width=114',
  quantityFound: 2,
  totalQuantity: 3,
};

export default function ItemSubstitutionScreen() {
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.push('/(tabs)/orders');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground} />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.roundButton} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Item substitution</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.roundButton} onPress={() => router.push('/(tabs)/inbox')}>
              <Ionicons name="notifications-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton} onPress={() => router.push('/(tabs)/help')}>
              <Ionicons name="help-buoy-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.deliveryBar}>
          <View>
            <Text style={styles.deliveryTime}>Deliver by 10:00 AM</Text>
            <Text style={styles.deliveryHint}>Customer expects chilled items in insulated bag.</Text>
          </View>
          <View style={styles.progressWrapper}>
            <Text style={styles.progressLabel}>13 items left</Text>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>
        </View>

        <View style={styles.orderedItemCard}>
          <Image source={{ uri: MOCK_ORDERED_ITEM.image }} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{MOCK_ORDERED_ITEM.name}</Text>
            <Text style={styles.itemDescription}>{MOCK_ORDERED_ITEM.description}</Text>
            <View style={styles.itemMetaRow}>
              <Text style={styles.itemPrice}>{`₦${MOCK_ORDERED_ITEM.price.toFixed(2)}`}</Text>
              <Text style={styles.itemQuantity}>
                {MOCK_ORDERED_ITEM.quantityFound} of {MOCK_ORDERED_ITEM.totalQuantity} located
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.guidanceCard}>
          <Ionicons name="bulb-outline" size={20} color="#F59E0B" />
          <View style={styles.guidanceContent}>
            <Text style={styles.guidanceTitle}>Pick the best alternative</Text>
            <Text style={styles.guidanceText}>
              Choose products similar in size, flavour, and price. Customers approve faster when the match is close.
            </Text>
          </View>
        </View>

        <View style={styles.communicationCard}>
          <Text style={styles.communicationText}>
            Need a confirmation from the customer? Start a quick chat to share item photos before you swap.
          </Text>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => router.push('/(tabs)/inbox')}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={18} color="#FFFFFF" />
            <Text style={styles.chatButtonText}>Chat with customer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.secondaryAction}
          onPress={() => router.push('/(tabs)/orders/finding-items')}
        >
          <Ionicons name="close-circle-outline" size={18} color="#B91C1C" />
          <Text style={styles.secondaryActionText}>No substitution found</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.primaryAction}
          onPress={() => router.push('/(tabs)/orders/verify-order-code')}
        >
          <Ionicons name="scan-outline" size={18} color="#FFFFFF" />
          <Text style={styles.primaryActionText}>Scan new item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: '#06888C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 24,
  },
  deliveryBar: {
    marginTop: -12,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  deliveryHint: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  progressWrapper: {
    alignItems: 'flex-end',
    gap: 6,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  progressBar: {
    width: 140,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#E5E7EB',
  },
  progressFill: {
    width: '40%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#06888C',
  },
  orderedItemCard: {
    flexDirection: 'row',
    gap: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
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
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  itemDescription: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  itemMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  itemQuantity: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  guidanceCard: {
    flexDirection: 'row',
    gap: 14,
    borderRadius: 18,
    backgroundColor: '#FFFBEB',
    padding: 18,
    alignItems: 'flex-start',
  },
  guidanceContent: {
    flex: 1,
    gap: 6,
  },
  guidanceTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#92400E',
  },
  guidanceText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#B45309',
  },
  communicationCard: {
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    padding: 18,
    gap: 16,
  },
  communicationText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 14,
    backgroundColor: '#06888C',
    paddingVertical: 12,
  },
  chatButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  bottomActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    gap: 16,
  },
  secondaryAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#F87171',
  },
  secondaryActionText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#B91C1C',
  },
  primaryAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#06888C',
  },
  primaryActionText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
