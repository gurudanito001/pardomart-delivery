import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import {
  Configuration,
  AuthApi,
  AdminApi,
  AdsApi,
  BugReportApi,
  CartApi,
  CartItemApi,
  CategoryApi,
  ContentApi,
  CustomersApi,
  DeliveryApi,
  DeliveryAddressApi,
  DeliveryPersonsApi,
  EarningsApi,
  FeeApi,
  GeneralApi,
  GeneralSearchApi,
  HealthApi,
  MediaApi,
  MessagingApi,
  NotificationApi,
  OrderApi,
  ProductApi,
  RatingApi,
  StaffApi,
  SupportApi,
  TagApi,
  TransactionApi,
  TransactionsApi,
  UserApi,
  UsersApi,
  VendorApi,
  VendorOpeningHoursApi,
  WalletApi,
  WishlistApi,
} from "../api-client";

const TOKEN_KEY = "PARDOMART_API_TOKEN";
let inMemoryToken: string | null = null;

const API_BASE = "https://pardomart-node-api-vaje.onrender.com/api/v1";

export async function getStoredToken(): Promise<string | null> {
  if (inMemoryToken) return inMemoryToken;
  try {
    if (Platform.OS === "web") {
      const t = typeof window !== "undefined"
        ? window.localStorage.getItem(TOKEN_KEY)
        : null;
      inMemoryToken = t ?? null;
      return inMemoryToken;
    }

    const t = await SecureStore.getItemAsync(TOKEN_KEY);
    inMemoryToken = t ?? null;
    return inMemoryToken;
  } catch {
    return null;
  }
}

export async function setStoredToken(token: string) {
  inMemoryToken = token;
  if (Platform.OS === "web") {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(TOKEN_KEY, token);
    }
    return;
  }
  await SecureStore.setItemAsync(TOKEN_KEY, token);
}

export async function clearStoredToken() {
  inMemoryToken = null;
  if (Platform.OS === "web") {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(TOKEN_KEY);
    }
    return;
  }
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}

let sharedConfig: Configuration | null = null;

export function createConfiguration(): Configuration {
  return new Configuration({
    basePath: API_BASE,
    accessToken: async () => {
      const t = await getStoredToken();
      return t ?? "";
    },
  });
}

export function getConfiguration(): Configuration {
  if (!sharedConfig) {
    sharedConfig = createConfiguration();
  }
  return sharedConfig;
}

// Typed helpers for each API tag (all share the same configuration/token)
export function getAuthApi(): AuthApi {
  return new AuthApi(getConfiguration());
}
export function getAdminApi(): AdminApi {
  return new AdminApi(getConfiguration());
}
export function getAdsApi(): AdsApi {
  return new AdsApi(getConfiguration());
}
export function getBugReportApi(): BugReportApi {
  return new BugReportApi(getConfiguration());
}
export function getCartApi(): CartApi {
  return new CartApi(getConfiguration());
}
export function getCartItemApi(): CartItemApi {
  return new CartItemApi(getConfiguration());
}
export function getCategoryApi(): CategoryApi {
  return new CategoryApi(getConfiguration());
}
export function getContentApi(): ContentApi {
  return new ContentApi(getConfiguration());
}
export function getCustomersApi(): CustomersApi {
  return new CustomersApi(getConfiguration());
}
export function getDeliveryApi(): DeliveryApi {
  return new DeliveryApi(getConfiguration());
}
export function getDeliveryAddressApi(): DeliveryAddressApi {
  return new DeliveryAddressApi(getConfiguration());
}
export function getDeliveryPersonsApi(): DeliveryPersonsApi {
  return new DeliveryPersonsApi(getConfiguration());
}
export function getEarningsApi(): EarningsApi {
  return new EarningsApi(getConfiguration());
}
export function getFeeApi(): FeeApi {
  return new FeeApi(getConfiguration());
}
export function getGeneralApi(): GeneralApi {
  return new GeneralApi(getConfiguration());
}
export function getGeneralSearchApi(): GeneralSearchApi {
  return new GeneralSearchApi(getConfiguration());
}
export function getHealthApi(): HealthApi {
  return new HealthApi(getConfiguration());
}
export function getMediaApi(): MediaApi {
  return new MediaApi(getConfiguration());
}
export function getMessagingApi(): MessagingApi {
  return new MessagingApi(getConfiguration());
}
export function getNotificationApi(): NotificationApi {
  return new NotificationApi(getConfiguration());
}
export function getOrderApi(): OrderApi {
  return new OrderApi(getConfiguration());
}
export function getProductApi(): ProductApi {
  return new ProductApi(getConfiguration());
}
export function getRatingApi(): RatingApi {
  return new RatingApi(getConfiguration());
}
export function getStaffApi(): StaffApi {
  return new StaffApi(getConfiguration());
}
export function getSupportApi(): SupportApi {
  return new SupportApi(getConfiguration());
}
export function getTagApi(): TagApi {
  return new TagApi(getConfiguration());
}
export function getTransactionApi(): TransactionApi {
  return new TransactionApi(getConfiguration());
}
export function getTransactionsApi(): TransactionsApi {
  return new TransactionsApi(getConfiguration());
}
export function getUserApi(): UserApi {
  return new UserApi(getConfiguration());
}
export function getUsersApi(): UsersApi {
  return new UsersApi(getConfiguration());
}
export function getVendorApi(): VendorApi {
  return new VendorApi(getConfiguration());
}
export function getVendorOpeningHoursApi(): VendorOpeningHoursApi {
  return new VendorOpeningHoursApi(getConfiguration());
}
export function getWalletApi(): WalletApi {
  return new WalletApi(getConfiguration());
}
export function getWishlistApi(): WishlistApi {
  return new WishlistApi(getConfiguration());
}

export default {
  createConfiguration,
  getConfiguration,
  // auth + token helpers
  getStoredToken,
  setStoredToken,
  clearStoredToken,
  // per-tag API helpers
  getAuthApi,
  getAdminApi,
  getAdsApi,
  getBugReportApi,
  getCartApi,
  getCartItemApi,
  getCategoryApi,
  getContentApi,
  getCustomersApi,
  getDeliveryApi,
  getDeliveryAddressApi,
  getDeliveryPersonsApi,
  getEarningsApi,
  getFeeApi,
  getGeneralApi,
  getGeneralSearchApi,
  getHealthApi,
  getMediaApi,
  getMessagingApi,
  getNotificationApi,
  getOrderApi,
  getProductApi,
  getRatingApi,
  getStaffApi,
  getSupportApi,
  getTagApi,
  getTransactionApi,
  getTransactionsApi,
  getUserApi,
  getUsersApi,
  getVendorApi,
  getVendorOpeningHoursApi,
  getWalletApi,
  getWishlistApi,
};
