import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowBackSVG } from "@/components/icons/ArrowBackSVG";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";

export default function FindingItemScreen() {
  const [quantity, setQuantity] = useState("2");

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/(tabs)/orders");
    }
  };

  const handleCancel = () => {
    handleGoBack();
  };

  const handleConfirm = () => {
    router.push("/(tabs)/orders/finding-items");
  };

  const handleAddSubstitute = () => {
    router.push("/(tabs)/orders/item-substitution");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <ArrowBackSVG width={30} height={30} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Scan Item</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconCircle}>
              <NotificationSVG width={24} height={24} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconCircle}>
              <SupportSVG width={24} height={24} color="#000000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.searchResultHeader}>
          <Text style={styles.searchResultText}>Search Result (1)</Text>
        </View>

        <View style={styles.productCard}>
          <View style={styles.productContent}>
            <View style={styles.productImageContainer}>
              <Image
                source={{
                  uri: "https://api.builder.io/api/v1/image/assets/TEMP/8ca46a868ac10a74a0da8c30074c452c3ddf4ae8?width=114",
                }}
                style={styles.productImage}
              />
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productDescription}>
                Valbest fully cooked chicken Nugget- frozen, 9g protein per 4
                nugget serving, 24 0z (1.5lb)
              </Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>$3.88</Text>
                <Text style={styles.quantity}>(qty 2)</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.quantitySection}>
          <Text style={styles.quantityLabel}>How many did you find?</Text>
          <View style={styles.inputContainer}>
            <View style={styles.cursorLine} />
            <TextInput
              style={styles.input}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
              placeholder="2"
              placeholderTextColor="#969BA0"
            />
            <View style={styles.inputDivider}>
              <View style={styles.dividerLine} />
              <Text style={styles.outOfText}>out of 2</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonsSection}>
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleAddSubstitute}>
            <Text style={styles.substituteText}>
              Can't find a product?{" "}
              <Text style={styles.substituteLink}>Add a substitute</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 14,
    paddingBottom: 14,
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
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
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
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchResultHeader: {
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    marginBottom: 23,
  },
  searchResultText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#898A8D",
  },
  productCard: {
    borderWidth: 1,
    borderColor: "#B4BED4",
    borderRadius: 16,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 1,
    marginBottom: 10,
  },
  productContent: {
    flexDirection: "row",
    gap: 21,
  },
  productImageContainer: {
    width: 81,
    height: 76,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 57,
    height: 57,
  },
  productDetails: {
    flex: 1,
    gap: 6,
  },
  productDescription: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#484C52",
    lineHeight: 16,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  price: {
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
  },
  quantity: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#898A8D",
  },
  quantitySection: {
    gap: 14,
    marginBottom: 29,
  },
  quantityLabel: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#101010",
  },
  inputContainer: {
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B4BED4",
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  cursorLine: {
    width: 2,
    height: 26,
    backgroundColor: "#2D9CDB",
    position: "absolute",
    left: 18,
  },
  input: {
    flex: 1,
    fontFamily: "Nunito Sans",
    fontSize: 16,
    fontWeight: "400",
    color: "#969BA0",
    paddingLeft: 2,
  },
  inputDivider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dividerLine: {
    width: 1,
    height: 28,
    backgroundColor: "#D9D9D9",
  },
  outOfText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "400",
    color: "#979797",
    lineHeight: 25,
  },
  buttonsSection: {
    gap: 29,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 18,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#0085FF",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 1,
  },
  cancelButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#0085FF",
    lineHeight: 25,
  },
  confirmButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 1,
  },
  confirmButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 25,
  },
  substituteText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
    textAlign: "center",
    lineHeight: 25,
  },
  substituteLink: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FF0000",
  },
});
