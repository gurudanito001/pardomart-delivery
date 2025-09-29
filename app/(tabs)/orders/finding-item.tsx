import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ProductItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

const MOCK_PRODUCT: ProductItem = {
  id: '1',
  name: 'Valbest fully cooked chicken nugget',
  price: 3880,
  quantity: 2,
  image: 'https://api.builder.io/api/v1/image/assets/TEMP/8ca46a868ac10a74a0da8c30074c452c3ddf4ae8?width=114',
  description:
    'Frozen chicken nuggets with 9g protein per serving. 24 oz family pack, stocked in aisle 6 freezer.',
};

export default function FindingItemScreen() {
  const [foundQuantity, setFoundQuantity] = useState('2');

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.push('/(tabs)/orders');
  };

  const handleConfirm = () => {
    router.push('/(tabs)/orders/finding-items');
  };

  const handleAddSubstitute = () => {
    router.push('/(tabs)/orders/item-substitution');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground} />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.roundButton} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Finding item</Text>
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

      <View style={styles.contentSection}>
        <View style={styles.searchResultHeader}>
          <Text style={styles.searchResultText}>Search result (1)</Text>
        </View>

        <View style={styles.productCard}>
          <View style={styles.productImageContainer}>
            <Image source={{ uri: MOCK_PRODUCT.image }} style={styles.productImage} />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{MOCK_PRODUCT.name}</Text>
            <Text style={styles.productDescription}>{MOCK_PRODUCT.description}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{`₦${MOCK_PRODUCT.price.toFixed(2)}`}</Text>
              <Text style={styles.quantityLabel}>(qty {MOCK_PRODUCT.quantity})</Text>
            </View>
          </View>
        </View>

        <View style={styles.quantitySection}>
          <Text style={styles.quantityQuestion}>How many did you find?</Text>
          <View style={styles.quantityInputContainer}>
            <TextInput
              style={styles.quantityInput}
              value={foundQuantity}
              onChangeText={setFoundQuantity}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#9CA3AF"
            />
            <View style={styles.quantityDivider} />
            <Text style={styles.quantityLabel}>out of {MOCK_PRODUCT.quantity}</Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleGoBack}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleAddSubstitute}>
          <Text style={styles.substituteText}>
            Can&apos;t find this product? <Text style={styles.substituteLink}>Add a substitute</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 160,
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
    alignItems: 'center',
    gap: 12,
  },
  contentSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 24,
  },
  searchResultHeader: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchResultText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  productCard: {
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
  },
  productImageContainer: {
    width: 96,
    height: 96,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productDetails: {
    flex: 1,
    gap: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  productDescription: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  quantityLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  quantitySection: {
    gap: 12,
  },
  quantityQuestion: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  quantityInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  quantityInput: {
    flex: 1,
    height: 50,
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  quantityDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  cancelButton: {
    flex: 1,
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4B5563',
  },
  confirmButton: {
    flex: 1,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#06888C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  substituteText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  substituteLink: {
    color: '#06888C',
  },
});
