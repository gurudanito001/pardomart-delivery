import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {
  MenuButton,
  NotificationSVG,
  SupportSVG,
  DeliveryTruckIconSVG,
} from "@/components";

export default function ArrivedStoreScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <MenuButton />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <SupportSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View></View>
        <Image
          source={{
            uri: "https://api.builder.io/api/v1/image/assets/TEMP/2606f94dcf3cd1a70095ddce10de471b5ffa2498?width=544",
          }}
          style={styles.illustration}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Congratulations, {"\n"}You have arrived store
        </Text>

        <View style={styles.cardsContainer}>
          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>Order KTh543Ju</Text>
          </View>

          <View style={styles.deliveryInfoCard}>
            <View style={styles.deliveryIconContainer}>
              <DeliveryTruckIconSVG width={24} height={24} color="#FFF" />
            </View>
            <Text style={styles.deliveryInfoText}>
              This Order is delivery only, Kindly provide the OTP code for
              verification
            </Text>
          </View>

          <View style={styles.otpCard}>
            <Text style={styles.otpText}>
              OTP code - <Text style={styles.otpCode}>4567</Text>
            </Text>
          </View>
        </View>

        <View style={styles.footerWrapper}>
          <Text style={styles.footerText}>
            Please wait while your code is been verified. This page
            automatically redirects you once confirmed
          </Text>
        </View>
      </View>
    </ScrollView>
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
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 14,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  illustration: {
    width: 272,
    height: 272,
    marginTop: 50,
    marginBottom: 26,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Raleway",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 26,
  },
  cardsContainer: {
    width: "100%",
    gap: 14,
  },
  orderIdCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#BFE3C6",
    paddingVertical: 10,
    paddingHorizontal: 98,
    alignItems: "center",
    justifyContent: "center",
  },
  orderIdText: {
    color: "#22212E",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  deliveryInfoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B4BED4",
    paddingVertical: 16,
    paddingHorizontal: 22,
    paddingRight: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  deliveryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  deliveryInfoText: {
    flex: 1,
    color: "#898A8D",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
  },
  otpCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  otpText: {
    color: "#000",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  otpCode: {
    fontWeight: "700",
  },
  footerWrapper: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  footerText: {
    color: "#707070",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
  },
});
