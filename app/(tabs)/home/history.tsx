import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import {
  ArrowBackSVG,
  NotificationSVG,
  SupportSVG,
  RefreshIconSVG,
  FilterIconSVG,
} from "@/components/icons";
import { HistoryCard } from "@/components/HistoryCard";
import walletService from "@/services/wallet";
import { toast } from "@/lib/toast";

export default function HistoryScreen() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<
    {
      id: string;
      total: string;
      customerName: string;
      time: string;
      date: string;
      units: string;
      completedDate: string;
    }[]
  >([]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/(tabs)/home");
    }
  };

  const load = () => {
    setLoading(true);
    walletService
      .getTransactions()
      .then((txs) => {
        const mapped =
          (txs ?? []).map((t, idx) => {
            const amount = Math.abs(t.amount ?? 0).toFixed(2);
            const created = t.createdAt ? new Date(t.createdAt) : null;
            const dateStr = created ? created.toLocaleDateString() : "—";
            const timeStr = created ? created.toLocaleTimeString() : "—";
            return {
              id: t.id ?? String(idx),
              total: `$${amount}`,
              customerName: t.description ?? "Transaction",
              time: timeStr,
              date: dateStr,
              units: t.type ? String(t.type) : "—",
              completedDate: dateStr,
            };
          }) ?? [];
        setTransactions(mapped);
      })
      .catch((err) => {
        console.error("Failed to load history", err);
        toast.error("Unable to load history", {
          description: err?.response?.data?.message ?? err?.message ?? "Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <ArrowBackSVG width={30} height={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>History</Text>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationSVG width={22} height={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <SupportSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.refreshButton} onPress={load}>
          <Text style={styles.refreshText}>Refresh</Text>
          <RefreshIconSVG width={16} height={16} color="#484C52" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
          <FilterIconSVG width={16} height={16} color="#000" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Loading history...</Text>
          </View>
        ) : transactions.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No history yet</Text>
            <Text style={styles.emptySubtitle}>Completed orders and payouts will appear here.</Text>
          </View>
        ) : (
          <View style={styles.historyList}>
            {transactions.map((item) => (
              <HistoryCard
                key={item.id}
                total={item.total}
                customerName={item.customerName}
                time={item.time}
                date={item.date}
                units={item.units}
                completedDate={item.completedDate}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 14,
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
    height: 40,
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
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    lineHeight: 22,
  },
  headerIcons: {
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
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  refreshButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  refreshText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "700",
    color: "#484C52",
    lineHeight: 22,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BBB",
  },
  filterText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  loadingContainer: {
    paddingVertical: 40,
    alignItems: "center",
    gap: 10,
  },
  loadingText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#484C52",
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
    gap: 8,
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
    textAlign: "center",
    paddingHorizontal: 10,
  },
  historyList: {
    gap: 19,
  },
});
