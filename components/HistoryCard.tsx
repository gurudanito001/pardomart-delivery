import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  ShoppingBagIconSVG,
  ClockIconSVG,
  CalendarIconSVG,
  CartIconSVG,
} from '@/components/icons';

interface HistoryCardProps {
  total: string;
  customerName: string;
  time: string;
  date: string;
  units: string;
  completedDate: string;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({
  total,
  customerName,
  time,
  date,
  units,
  completedDate,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.headerRow}>
          <ShoppingBagIconSVG width={25} height={25} color="#7C7B7B" />
          <Text style={styles.headerText}>Shop and Deliver</Text>
        </View>

        <View style={styles.divider} />
      </View>

      <View style={styles.detailsSection}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>{total}</Text>
        </View>

        <Text style={styles.customerName}>{customerName}</Text>

        <View style={styles.metaRow}>
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

      <View style={styles.footerRow}>
        <Text style={styles.completedDate}>Completed date - {completedDate}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Completed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FBFBFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 17,
    paddingTop: 12,
    paddingBottom: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  cardContent: {
    gap: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerText: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
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
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '700',
    color: '#7C7B7B',
    lineHeight: 22,
  },
  totalAmount: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '700',
    color: '#100A37',
    lineHeight: 22,
  },
  customerName: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '700',
    color: '#484C52',
    lineHeight: 22,
  },
  metaRow: {
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
    fontFamily: 'Open Sans',
    fontSize: 10,
    fontWeight: '400',
    color: '#7C7B7B',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  completedDate: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    fontWeight: '700',
    color: '#7C7B7B',
  },
  statusBadge: {
    backgroundColor: '#BFE3C6',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 118,
    alignItems: 'center',
  },
  statusText: {
    fontFamily: 'Raleway',
    fontSize: 10,
    fontWeight: '700',
    color: '#2CAF0B',
    textAlign: 'center',
  },
});
