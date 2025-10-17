import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ArrowBackSVG } from "@/components/icons/ArrowBackSVG";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { MastercardLogoSVG } from "@/components/icons/MastercardLogoSVG";
import { VisaLogoSVG } from "@/components/icons/VisaLogoSVG";
import { BankIconSVG } from "@/components/icons/BankIconSVG";
import { RadioButtonSVG } from "@/components/icons/RadioButtonSVG";
import { TrashIconSVG } from "@/components/icons/TrashIconSVG";
import { AddCardIconSVG } from "@/components/icons/AddCardIconSVG";

interface PaymentMethod {
  id: string;
  type: "mastercard" | "visa" | "bank";
  name: string;
  details: string;
  selected?: boolean;
}

export default function PaymentScreen() {
  const [selectedPaymentId, setSelectedPaymentId] = useState<string>("1");
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "mastercard",
      name: "Master card",
      details: "**** **** 2345  I  Expiry 13/25",
      selected: true,
    },
    {
      id: "2",
      type: "visa",
      name: "Visa",
      details: "**** **** 2345  I  Expiry 13/25",
    },
    {
      id: "3",
      type: "bank",
      name: "Bank Transfer",
      details: "Kuda **** **** 2345 ",
    },
  ]);

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/(tabs)/home");
    }
  };

  const handleSelectPayment = (id: string) => {
    setSelectedPaymentId(id);
  };

  const handleDeletePayment = (id: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    if (selectedPaymentId === id && paymentMethods.length > 1) {
      const remainingMethods = paymentMethods.filter(
        (method) => method.id !== id
      );
      setSelectedPaymentId(remainingMethods[0]?.id || "");
    }
  };

  const handleAddPaymentMethod = () => {
    console.log("Add payment method");
  };

  const renderPaymentLogo = (type: PaymentMethod["type"]) => {
    switch (type) {
      case "mastercard":
        return <MastercardLogoSVG width={52} height={40} />;
      case "visa":
        return <VisaLogoSVG width={62} height={40} />;
      case "bank":
        return <BankIconSVG width={33} height={40} color="#333" />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={handleGoBack}>
              <ArrowBackSVG width={30} height={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Payment Methods</Text>
          </View>

          <TouchableOpacity
            style={styles.notificationButton}
            activeOpacity={0.7}
          >
            <NotificationSVG width={24} height={24} color="#50555C" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Saved Payment Methods</Text>

          <View style={styles.paymentMethodsList}>
            {paymentMethods.map((method) => (
              <View
                key={method.id}
                style={[
                  styles.paymentCard,
                  selectedPaymentId === method.id && styles.paymentCardSelected,
                ]}
              >
                <View style={styles.paymentCardContent}>
                  <View style={styles.paymentLogo}>
                    {renderPaymentLogo(method.type)}
                  </View>

                  <View style={styles.paymentInfo}>
                    <Text style={styles.paymentName}>{method.name}</Text>
                    <Text style={styles.paymentDetails}>{method.details}</Text>
                  </View>

                  <View style={styles.paymentActions}>
                    <TouchableOpacity
                      onPress={() => handleSelectPayment(method.id)}
                      activeOpacity={0.7}
                    >
                      <RadioButtonSVG
                        width={30}
                        height={30}
                        selected={selectedPaymentId === method.id}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => handleDeletePayment(method.id)}
                      activeOpacity={0.7}
                    >
                      <TrashIconSVG width={30} height={30} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddPaymentMethod}
            activeOpacity={0.8}
          >
            <AddCardIconSVG width={20} height={16} color="#FFF" />
            <Text style={styles.addButtonText}>Add Payment Method</Text>
          </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 25,
    gap: 94,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Raleway-700",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22,
    color: "#000",
    textAlign: "center",
  },
  notificationButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: "Raleway-700",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    color: "#333",
    marginBottom: 20,
  },
  paymentMethodsList: {
    gap: 12,
  },
  paymentCard: {
    height: 84,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5EBFC",
    backgroundColor: "#FFF",
  },
  paymentCardSelected: {
    borderColor: "#A1BAFF",
  },
  paymentCardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  paymentLogo: {
    marginRight: 12,
  },
  paymentInfo: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
  paymentName: {
    fontFamily: "Nunito Sans-700",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16,
    color: "#000",
  },
  paymentDetails: {
    fontFamily: "Nunito Sans",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 10,
    color: "#898A8D",
  },
  paymentActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  addButton: {
    marginTop: 24,
    height: 53,
    borderRadius: 11,
    backgroundColor: "#0085FF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  addButtonText: {
    fontFamily: "Nunito Sans-700",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 25,
    color: "#FFF",
  },
});
