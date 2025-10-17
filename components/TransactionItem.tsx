import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MoneyWithdrawalIconSVG } from './icons/MoneyWithdrawalIconSVG';

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  name: string;
  date: string;
  amount: string;
  avatar?: string;
}

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const isWithdrawal = transaction.type === 'withdrawal';
  const isDeposit = transaction.type === 'deposit';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {isWithdrawal ? (
          <View style={styles.iconContainer}>
            <MoneyWithdrawalIconSVG width={20} height={20} color="#000" />
          </View>
        ) : (
          <Image
            source={{ uri: transaction.avatar }}
            style={styles.avatar}
          />
        )}

        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <View style={styles.info}>
              <Text style={styles.name}>{transaction.name}</Text>
              <Text style={styles.date}>{transaction.date}</Text>
            </View>
            <Text style={[styles.amount, isDeposit ? styles.positive : styles.negative]}>
              {isDeposit ? '+' : '-'}${transaction.amount}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 15,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#BFE3C6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  detailsContainer: {
    flex: 1,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    gap: 4,
  },
  name: {
    color: '#000',
    fontFamily: 'Open Sans',
    fontSize: 12,
    fontWeight: '700',
  },
  date: {
    color: '#707070',
    fontFamily: 'Open Sans',
    fontSize: 10,
    fontWeight: '400',
  },
  amount: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'right',
  },
  positive: {
    color: '#2CAF0B',
  },
  negative: {
    color: '#C70000',
  },
});
