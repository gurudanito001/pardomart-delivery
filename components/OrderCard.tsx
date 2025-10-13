import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  ShoppingBagIconSVG,
  DeliveryTruckIconSVG,
  ClockIconSVG,
  CalendarIconSVG,
  CartIconSVG
} from './icons';
import Svg, { Path } from 'react-native-svg';

interface OrderCardProps {
  type: 'shop-deliver' | 'deliver';
  total: string;
  customerName: string;
  time: string;
  date: string;
  units: string;
  onPreviewOrder: () => void;
}

const ChevronIcon = () => (
  <Svg width={7} height={13} viewBox="0 0 7 13" fill="none">
    <Path
      d="M0.866949 12.4985C0.66474 12.4988 0.468777 12.4292 0.313076 12.3017C0.225444 12.2299 0.153007 12.1418 0.0999113 12.0423C0.0468157 11.9428 0.0141058 11.8339 0.00365506 11.7219C-0.0067957 11.6098 0.00521815 11.4969 0.0390082 11.3895C0.0727983 11.2821 0.1277 11.1823 0.200571 11.0958L4.07768 6.51173L0.339039 1.91906C0.267152 1.83158 0.213468 1.73092 0.181074 1.62286C0.148679 1.51481 0.138213 1.4015 0.150276 1.28944C0.16234 1.17738 0.196694 1.06878 0.251367 0.969879C0.306039 0.870982 0.379951 0.783737 0.468853 0.713159C0.558395 0.635301 0.663255 0.576573 0.776853 0.540662C0.89045 0.504751 1.01033 0.492432 1.12898 0.504478C1.24762 0.516525 1.36246 0.552676 1.4663 0.610663C1.57014 0.66865 1.66072 0.747221 1.73237 0.841446L5.91238 5.97292C6.03967 6.12596 6.10925 6.31791 6.10925 6.51601C6.10925 6.7141 6.03967 6.90606 5.91238 7.05909L1.58525 12.1906C1.49843 12.2941 1.38815 12.3759 1.26335 12.4294C1.13854 12.4829 1.00274 12.5065 0.866949 12.4985Z"
      fill="#333333"
    />
  </Svg>
);

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
          {isShopDeliver ? (
            <ShoppingBagIconSVG width={25} height={25} color="#0085FF" />
          ) : (
            <DeliveryTruckIconSVG width={24} height={24} color="#0085FF" />
          )}
          <Text style={styles.typeText}>
            {isShopDeliver ? 'Shop and Deliver' : 'Deliver'}
          </Text>
        </View>
        <ChevronIcon />
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
            <ClockIconSVG width={12} height={12} color="#7C7B7B" />
            <Text style={styles.metaText}>{time}</Text>
          </View>
          <View style={styles.metaItem}>
            <CalendarIconSVG width={12} height={12} color="#7C7B7B" />
            <Text style={styles.metaText}>{date}</Text>
          </View>
          <View style={styles.metaItem}>
            <CartIconSVG width={12} height={12} color="#7C7B7B" />
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
