import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  ActivityIndicator,
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
import walletService from "@/services/wallet";
import { toast } from "@/lib/toast";

export default function WalletScreen() {
  const router = useRouter();
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

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

  useEffect(() => {
    let active = true;
    setLoading(true);
    Promise.all([walletService.getWallet(), walletService.getTransactions()])
      .then(([wallet, txs]) => {
        if (!active) return;
        setBalance(wallet?.balance ?? 0);
        const mapped = (txs ?? []).map<Transaction>((t, idx) => {
          const typeRaw = (t.type as string | undefined)?.toLowerCase?.() ?? "";
          const isDeposit = typeRaw === "deposit" || typeRaw === "credit" || typeRaw === "topup";
          const amount = Math.abs(t.amount ?? 0).toFixed(2);
          const date = t.createdAt
            ? new Date(t.createdAt).toLocaleString()
            : "—";
          return {
            id: t.id ?? String(idx),
            type: isDeposit ? "deposit" : "withdrawal",
            name: t.description ?? t.source ?? "Transaction",
            date,
            amount,
          };
        });
        setTransactions(mapped);
      })
      .catch((err) => {
        console.error("Failed to load wallet data", err);
        toast.error("Unable to load wallet", {
          description: err?.response?.data?.message ?? err?.message ?? "Please try again.",
        });
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const content = useMemo(() => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Loading wallet...</Text>
        </View>
      );
    }

    return (
      <>
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
              {balanceVisible ? `$${(balance ?? 0).toFixed(2)}` : "••••••"}
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

          {transactions.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No transactions yet</Text>
              <Text style={styles.emptySubtitle}>New activity will show up here.</Text>
            </View>
          ) : (
            <View style={styles.transactionsList}>
              {transactions.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} />
              ))}
            </View>
          )}
        </View>
      </>
    );
  }, [loading, balanceVisible, balance, transactions]);

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
        {content}
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
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    gap: 10,
  },
  loadingText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#484C52",
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
  emptyState: {
    paddingVertical: 24,
    alignItems: "center",
    gap: 6,
  },
  emptyTitle: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  emptySubtitle: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#484C52",
  },
});
