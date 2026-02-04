import React, { useEffect, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import {
  MenuSVG,
  NotificationSVG,
  SupportSVG,
  ShoppingBagIconSVG,
} from "../../../components/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { OrderApi } from "../../../api/endpoints/order-api";
import { apiConfig } from "../../../api/config";
import { colors, typography, borderRadius, shadows } from "@/styles/theme";
import { toast } from "sonner-native";

export default function ArrivedStoreScreen() {
  const { id } = useLocalSearchParams() as { id: string };

  const orderApi = useMemo(() => new OrderApi(apiConfig), []);

  const { data: order, isLoading } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      if (!id) return null;
      const response = await orderApi.orderIdGet(id);
      return response.data;
    },
    refetchInterval: 5000,
    enabled: !!id,
  });

  const updateStatusMutation = useMutation({
    mutationFn: (status: string) => orderApi.orderIdStatusPatch({ status: status as any }, id),
    onSuccess: () => {
      router.push({
        pathname: "/(private)/orders/finding-items",
        params: { id }
      });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to start shopping");
    }
  });

  useEffect(() => {
    if (order?.shoppingMethod === "vendor" && order?.pickupOtpVerifiedAt) {
      router.push({
        pathname: "/(private)/orders/success",
        params: { id }
      });
    }
  }, [order?.pickupOtpVerifiedAt, order?.shoppingMethod]);

  const handleStartShopping = () => {
    updateStatusMutation.mutate('currently_shopping');
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#0085FF" />
      </View>
    );
  }

  const isVendorPickup = order?.shoppingMethod === "vendor";

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <MenuSVG width={24} height={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <NotificationSVG width={22} height={22} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <SupportSVG width={24} height={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          {/* <View style={styles.illustrationContainer}>
            <Image
              source={{
                uri: "https://api.builder.io/api/v1/image/assets/TEMP/2606f94dcf3cd1a70095ddce10de471b5ffa2498?width=544",
              }}
              style={styles.illustration}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              Congratulations,{"\n"}You have arrived store
            </Text>
          </View> */}

          {isVendorPickup ? (
            <View style={styles.vendorContent}>
              <Text style={styles.title}>Order Verification</Text>

              <View style={styles.codeContainer}>
                <Text style={styles.label}>Order Code</Text>
                <Text style={styles.codeValue}>{order?.orderCode}</Text>
              </View>
              <View style={styles.codeContainer}>
                <Text style={styles.label}>OTP Code</Text>
                <Text style={styles.codeValue}>{order?.pickupOtp}</Text>
              </View>

              <Text style={styles.footerText}>
                Please wait while your code is been verified. This page automatically redirects you once confirmed
              </Text>

            </View>
          ) : (
            <>
              <View style={styles.illustrationContainer}>
                <Image
                  source={{
                    uri: "https://api.builder.io/api/v1/image/assets/TEMP/2606f94dcf3cd1a70095ddce10de471b5ffa2498?width=544",
                  }}
                  style={styles.illustration}
                  resizeMode="contain"
                />
                <Text style={styles.title}>
                  Congratulations,{"\n"}You have arrived store
                </Text>
              </View>

              <View style={styles.infoCard}>
                <View style={styles.iconCircle}>
                  <ShoppingBagIconSVG width={25} height={25} color="#FFF" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoText}>
                    This Order includes shopping, you should now proceed to shopping
                    the items for the customer
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>

      {!isVendorPickup && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartShopping}
            disabled={updateStatusMutation.isPending}
          >
            {updateStatusMutation.isPending ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.startButtonText}>Start Shopping</Text>
            )}
          </TouchableOpacity>
        </View>
      )}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  vendorContent: {
    width: '100%',
    alignItems: 'center',
    gap: 30,
    paddingHorizontal: 20,
  },
  codeContainer: {
    alignItems: 'center',
    gap: 10,
    width: '100%',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  label: {
    fontFamily: typography.families.secondary,
    fontSize: 16,
    color: '#898A8D',
  },
  codeValue: {
    fontFamily: typography.families.accent,
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 2,
  },
  footerText: {
    fontFamily: typography.families.secondary,
    fontSize: 14,
    color: '#898A8D',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 14,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  headerRight: {
    flexDirection: "row",
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
    width: 370,
    alignSelf: "center",
    alignItems: "center",
    gap: 26,
    marginTop: 50,
  },
  illustrationContainer: {
    width: 272,
    alignItems: "center",
    gap: 26,
  },
  illustration: {
    width: 272,
    height: 272,
    aspectRatio: 1,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontFamily: typography.families.accent,
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    alignSelf: "stretch",
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B4BED4",
    ...shadows.md,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  infoTextContainer: {
    flex: 1,
  },
  infoText: {
    color: "#898A8D",
    fontFamily: typography.families.secondary,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 21,
    paddingVertical: 21,
    backgroundColor: "#FFF",
  },
  startButton: {
    width: "100%",
    height: 55,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    alignItems: "center",
    justifyContent: "center",
    ...shadows.md,
  },
  startButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: typography.families.accent,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 25,
  },
});