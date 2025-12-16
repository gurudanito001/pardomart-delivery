import api from "./api";

export type Role =
  | "customer"
  | "vendor"
  | "store_admin"
  | "store_shopper"
  | "delivery_person"
  | "admin";

// Default role for this delivery app is delivery_person
const DEFAULT_ROLE: Role = "delivery_person";

// Simple helper to coerce local mobile numbers into E.164.
// Adjust the default country code if needed.
function toE164(raw: string, defaultCountryCode = "+234"): string {
  const phone = raw.trim();

  // Already E.164 (e.g. +14155552671, +49123456789)
  if (phone.startsWith("+")) return phone;

  // Strip all non-digits for processing
  const digits = phone.replace(/\D/g, "");
  if (!digits) return phone;

  // Local Nigerian-style numbers like 080..., 070..., 090... → +23480...
  if (defaultCountryCode === "+234" && digits.length === 11 && digits.startsWith("0")) {
    return defaultCountryCode + digits.slice(1);
  }

  // For foreign numbers (non-Nigerian) we **do not** guess the country.
  // Require the user to type the full E.164 number with a '+' prefix in the UI.
  // Here we just add '+' so backend still sees something like +441234567890.
  return `+${digits}`;
}

export async function initiateLogin(
  mobileNumber: string,
  role: Role = DEFAULT_ROLE
) {
  const authApi = api.getAuthApi();
  const payload = { mobileNumber: toE164(mobileNumber), role };
  const resp = await authApi.authInitiateLoginPost(payload as any);
  return resp.data;
}

export async function verifyLogin(
  mobileNumber: string,
  verificationCode: string,
  role: Role = DEFAULT_ROLE
) {
  const authApi = api.getAuthApi();
  const payload = { mobileNumber: toE164(mobileNumber), verificationCode, role };
  const resp = await authApi.authVerifyLoginPost(payload as any);
  const token =
    (resp.data as any)?.token ??
    (resp.data as any)?.accessToken ??
    (resp.data as any)?.data?.accessToken;
  if (token) {
    await api.setStoredToken(token);
  }
  return resp.data;
}

/**
 * Register a new delivery user. Returns the API response.
 * On success the server may still require verification; this function
 * only stores the token if returned by the register endpoint.
 */
export async function register(
  name: string,
  mobileNumber: string,
  email?: string,
  role: Role = DEFAULT_ROLE
) {
  const authApi = api.getAuthApi();
  const payload: any = { name, mobileNumber: toE164(mobileNumber), role };
  if (email) payload.email = email;
  const resp = await authApi.authRegisterPost(payload as any);
  const token =
    (resp.data as any)?.token ??
    (resp.data as any)?.accessToken ??
    (resp.data as any)?.data?.accessToken;
  if (token) {
    await api.setStoredToken(token);
  }
  return resp.data;
}

export async function logout() {
  await api.clearStoredToken();
}

export default { initiateLogin, verifyLogin, register, logout };
