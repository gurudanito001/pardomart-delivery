import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { NotificationSVG } from "@/components/icons/NotificationSVG";
import { SupportSVG } from "@/components/icons/SupportSVG";
import { ArrowBackSVG } from "@/components";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@tanstack/react-query";
import { OrderApi } from "@/api/endpoints/order-api";
import { apiConfig } from "@/api/config";
import { toast } from "sonner-native";

export default function DeliveryVerificationScreen() {
  const { orderId } = useLocalSearchParams() as { orderId: string };
  const [image, setImage] = useState<{ uri: string; base64: string | null } | null>(null);

  const orderApi = useMemo(() => new OrderApi(apiConfig), []);

  const completeDeliveryMutation = useMutation({
    mutationFn: async (data: { image: string }) => {
      if (!orderId) throw new Error("Order ID is missing");
      return orderApi.orderOrderIdCompleteDeliveryPost({ proofOfDeliveryImage: data.image } as any, orderId);
    },
    onSuccess: () => {
      toast.success("Delivery verified successfully");
      router.push("/(private)/orders/delivery-completed");
    },
    onError: (error: any) => {
      console.error("Delivery verification failed:", error);
      toast.error(error?.message || "Failed to verify delivery");
    },
  });

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleNotifications = () => {
    router.push("/(tabs)/inbox");
  };

  const handleSupport = () => {
    router.push("/(tabs)/help");
  };

  const handleTakePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      toast.error("Permission to access camera is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage({
        uri: result.assets[0].uri,
        base64: result.assets[0].base64 || null,
      });
    }
  };

  const handleSubmit = () => {
    if (!image?.base64) {
      toast.error("Please take a picture of the delivery first");
      return;
    }
    
    const base64Image = `data:image/jpeg;base64,${image.base64}`;
    
    completeDeliveryMutation.mutate({ image: base64Image });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <View style={styles.backButtonCircle}>
                <ArrowBackSVG width={30} height={30} color="#100A37" />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Verify Delivery</Text>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleNotifications}
            >
              <View style={styles.iconCircle}>
                <NotificationSVG width={24} height={24} color="#000" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSupport}>
              <View style={styles.iconCircle}>
                <SupportSVG width={24} height={24} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Upload Section */}
          <View style={styles.uploadSection}>
            <View style={styles.uploadHeader}>
              <Text style={styles.uploadTitle}>Delivery picture</Text>
              <Text style={styles.requiredLabel}>Required*</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.imageContainer}>
                {image ? (
                    <Image source={{ uri: image.uri }} style={styles.previewImage} resizeMode="cover" />
                ) : (
                    <View style={styles.placeholderContainer}>
                        <Ionicons name="image-outline" size={48} color="#CCC" />
                        <Text style={styles.placeholderText}>No image captured</Text>
                    </View>
                )}
            </View>

            <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleTakePhoto}
              >
                <Ionicons name="camera" size={20} color="#FFF" />
                <Text style={styles.uploadButtonText}>{image ? "Retake Picture" : "Take Picture"}</Text>
              </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <View style={styles.submitContainer}>
          <TouchableOpacity 
            style={[styles.submitButton, (!image || completeDeliveryMutation.isPending) && styles.disabledButton]} 
            onPress={handleSubmit}
            disabled={!image || completeDeliveryMutation.isPending}
          >
            {completeDeliveryMutation.isPending ? (
                <ActivityIndicator color="#FFF" />
            ) : (
                <Text style={styles.submitButtonText}>Complete Delivery</Text>
            )}
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
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingBottom: 24,
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
  backButtonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    lineHeight: 22,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
    gap: 21,
  },
  uploadSection: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#BBB",
    padding: 20,
    gap: 19,
  },
  uploadHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  uploadTitle: {
    fontFamily: "Raleway",
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
  requiredLabel: {
    fontFamily: "Open Sans",
    fontSize: 8,
    fontWeight: "400",
    color: "#F00",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#D9D9D9",
  },
  imageContainer: {
    height: 200,
    backgroundColor: "#F0F2F4",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  placeholderContainer: {
    alignItems: "center",
    gap: 8,
  },
  placeholderText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    color: "#7C7B7B",
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: "#0085FF",
  },
  uploadButtonText: {
    fontFamily: "Raleway",
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF",
  },
  submitContainer: {
    paddingHorizontal: 21,
    marginTop: 40,
  },
  submitButton: {
    height: 53,
    borderRadius: 16,
    backgroundColor: "#0085FF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  disabledButton: {
    backgroundColor: "#A0CFFF",
  },
  submitButtonText: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
    lineHeight: 25,
  },
});
