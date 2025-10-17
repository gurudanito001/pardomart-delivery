import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import {
  ArrowBackSVG,
  NotificationSVG,
  SupportSVG,
  MoneyWithdrawalIconSVG,
  EyeIconSVG,
} from "@/components/icons";
import { TransactionItem, Transaction } from "@/components/TransactionItem";

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    type: "deposit",
    name: "Jeremiah Johns",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/222214b9aa6ad996b4688828592130754b6d86ee?width=72",
  },
  {
    id: "2",
    type: "withdrawal",
    name: "Withdrawal",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
  },
  {
    id: "3",
    type: "deposit",
    name: "Jeremiah Johns",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/be49974607e92074195149dd07ce08c646eea48d?width=72",
  },
  {
    id: "4",
    type: "withdrawal",
    name: "Withdrawal",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
  },
  {
    id: "5",
    type: "deposit",
    name: "Jeremiah Johns",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/9d931bd96b4451ec550f55a0d925e05a02ac2c72?width=72",
  },
  {
    id: "6",
    type: "withdrawal",
    name: "Withdrawal",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
  },
  {
    id: "7",
    type: "withdrawal",
    name: "Withdrawal",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
  },
  {
    id: "8",
    type: "withdrawal",
    name: "Withdrawal",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
  },
  {
    id: "9",
    type: "withdrawal",
    name: "Withdrawal",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
  },
  {
    id: "10",
    type: "withdrawal",
    name: "Withdrawal",
    date: "Aug 12, 2025,  04:35am",
    amount: "342.66",
  },
];

export default function WalletScreen() {
  const router = useRouter();
  const [balanceVisible, setBalanceVisible] = useState(true);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleWithdraw = () => {
    console.log("Withdraw pressed");
  };

  const handleViewAll = () => {
    console.log("View all transactions pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <ArrowBackSVG width={30} height={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Wallet</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationSVG width={22} height={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <SupportSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.balanceCard}>
          <View style={styles.cardHeader}>
            <Image
              source={{
                uri: "https://api.builder.io/api/v1/image/assets/TEMP/69aef0aad6967d5fabb837ba0b763f5a53af9b95?width=124",
              }}
              resizeMode="contain"
              style={styles.logo}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setBalanceVisible(!balanceVisible)}
            >
              <EyeIconSVG width={24} height={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.balanceContent}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>
              {balanceVisible ? "$13420.65" : "••••••"}
            </Text>

            <TouchableOpacity
              style={styles.withdrawButton}
              onPress={handleWithdraw}
            >
              <MoneyWithdrawalIconSVG width={20} height={21} color="#FFF" />
              <Text style={styles.withdrawText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.transactionsSection}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Recent Transactions</Text>
            <TouchableOpacity onPress={handleViewAll}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactionsList}>
            {MOCK_TRANSACTIONS.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </View>

          <View style={styles.pagination}>
            <Text style={styles.paginationText}>Showing 1-10 of 20</Text>
            <TouchableOpacity style={styles.nextButton}>
              <Text style={styles.nextText}>Next</Text>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingVertical: 14,
    height: 64,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    color: "#000",
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 22,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 21,
  },
  balanceCard: {
    width: "100%",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8F4FF",
    backgroundColor: "#1F1F1F",
    marginTop: 14,
    paddingTop: 14,
    paddingBottom: 36,
    paddingHorizontal: 26,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },
  logo: {
    width: 124,
    height: 20,
  },
  eyeButton: {
    width: 24,
    height: 20,
  },
  balanceContent: {
    alignItems: "center",
    gap: 12,
  },
  balanceLabel: {
    color: "#FFF",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 22,
    textAlign: "center",
  },
  balanceAmount: {
    color: "#FFF",
    fontFamily: "Open Sans",
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 10,
  },
  withdrawButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#0085FF",
    borderRadius: 16,
    paddingVertical: 9,
    paddingHorizontal: 75,
    width: "100%",
  },
  withdrawText: {
    color: "#FFF",
    fontFamily: "Raleway",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: "center",
  },
  transactionsSection: {
    marginTop: 35,
    gap: 20,
    paddingBottom: 30,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionsTitle: {
    color: "#000",
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 25,
  },
  viewAllText: {
    color: "#06888C",
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 25,
  },
  transactionsList: {
    gap: 8,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  paginationText: {
    color: "#202224",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    opacity: 0.8,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  nextText: {
    color: "#000",
    fontFamily: "Nunito Sans",
    fontSize: 15,
    fontWeight: "500",
  },
  arrow: {
    color: "#000",
    fontSize: 18,
  },
});
