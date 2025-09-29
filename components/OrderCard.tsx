import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface OrderCardProps {
  type: 'shop-deliver' | 'deliver';
  total: string;
  customerName: string;
  time: string;
  date: string;
  units: string;
  onPreviewOrder: () => void;
}

export default function OrderCard({
  type,
  total,
  customerName,
  time,
  date,
  units,
  onPreviewOrder,
}: OrderCardProps) {
  const isShopDeliver = type === 'shop-deliver';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.typeSection}>
          <Ionicons 
            name={isShopDeliver ? "bag-outline" : "bicycle-outline"} 
            size={24} 
            color="#0085FF" 
          />
          <Text style={styles.typeText}>
            {isShopDeliver ? 'Shop and Deliver' : 'Deliver'}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={12} color="#333" />
      </View>

      <View style={styles.divider} />

      {/* Order Details */}
      <View style={styles.detailsSection}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>{total}</Text>
        </View>
        
        <Text style={styles.customerName}>{customerName}</Text>
        
        <View style={styles.metaInfo}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={12} color="#7C7B7B" />
            <Text style={styles.metaText}>{time}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={12} color="#7C7B7B" />
            <Text style={styles.metaText}>{date}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="cube-outline" size={12} color="#7C7B7B" />
            <Text style={styles.metaText}>{date}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaText}>{units}</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.trackText}>Track your Order request here</Text>
        <TouchableOpacity style={styles.previewButton} onPress={onPreviewOrder}>
          <Text style={styles.previewButtonText}>Preview Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 17,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  typeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  typeText: {
    fontSize: 14,
    fontFamily: 'Open Sans-700',
    fontWeight: '700',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginVertical: 12,
  },
  detailsSection: {
    gap: 7,
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'Open Sans-700',
    fontWeight: '700',
    color: '#7C7B7B',
  },
  totalAmount: {
    fontSize: 16,
    fontFamily: 'Open Sans-700',
    fontWeight: '700',
    color: '#100A37',
  },
  customerName: {
    fontSize: 14,
    fontFamily: 'Open Sans-700',
    fontWeight: '700',
    color: '#484C52',
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  metaText: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#7C7B7B',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackText: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#7C7B7B',
    lineHeight: 22,
  },
  previewButton: {
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  previewButtonText: {
    fontSize: 10,
    fontFamily: 'Raleway-700',
    fontWeight: '700',
    color: '#FFF',
  },
});
