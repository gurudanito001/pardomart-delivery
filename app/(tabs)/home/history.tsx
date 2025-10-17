import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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

const HISTORY_DATA = [
  {
    id: "1",
    total: "$30.22",
    customerName: "Mr Damilare Adebanjo",
    time: "12:00pm",
    date: "03/2025",
    units: "20 units",
    completedDate: "04/08/2025",
  },
  {
    id: "2",
    total: "$30.22",
    customerName: "Mr Damilare Adebanjo",
    time: "12:00pm",
    date: "03/2025",
    units: "20 units",
    completedDate: "04/08/2025",
  },
  {
    id: "3",
    total: "$30.22",
    customerName: "Mr Damilare Adebanjo",
    time: "12:00pm",
    date: "03/2025",
    units: "20 units",
    completedDate: "04/08/2025",
  },
  {
    id: "4",
    total: "$30.22",
    customerName: "Mr Damilare Adebanjo",
    time: "12:00pm",
    date: "03/2025",
    units: "20 units",
    completedDate: "04/08/2025",
  },
];

export default function HistoryScreen() {
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/(tabs)/home");
    }
  };

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
        <TouchableOpacity style={styles.refreshButton}>
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
        <View style={styles.historyList}>
          {HISTORY_DATA.map((item) => (
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

        <View style={styles.pagination}>
          <Text style={styles.paginationText}>Showing 1-10 of 20</Text>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextText}>Next</Text>
            <Text style={styles.nextArrow}>→</Text>
          </TouchableOpacity>
        </View>
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
  historyList: {
    gap: 19,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    height: 24,
  },
  paginationText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#202224",
    opacity: 0.8,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    opacity: 0.8,
  },
  nextText: {
    fontFamily: "Nunito Sans",
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
  },
  nextArrow: {
    fontSize: 18,
    color: "#000",
  },
});
