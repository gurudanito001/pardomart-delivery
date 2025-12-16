import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import * as apiService from "@/services/api";
import authService from "@/services/auth";

interface AuthContextType {
  loading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  initiateLogin: (mobileNumber: string) => Promise<any>;
  verifyLogin: (mobileNumber: string, code: string) => Promise<any>;
  register: (
    name: string,
    mobileNumber: string,
    email?: string
  ) => Promise<any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const t = await apiService.getStoredToken();
      if (!mounted) return;
      setToken(t);
      setLoading(false);
      if (t) {
        // already authenticated, go to go-online screen
        try {
          router.replace("/go-online");
        } catch (e) {}
      } else {
        try {
          router.replace("/auth/sign-in");
        } catch (e) {}
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const initiateLogin = async (mobileNumber: string) => {
    return authService.initiateLogin(mobileNumber).then((res) => res);
  };

  const verifyLogin = async (mobileNumber: string, code: string) => {
    const res = await authService.verifyLogin(mobileNumber, code);
    // if token now present, update state and navigate
    const t = await apiService.getStoredToken();
    setToken(t);
    if (t) {
      router.replace("/go-online");
    }
    return res;
  };

  const register = async (
    name: string,
    mobileNumber: string,
    email?: string
  ) => {
    const res = await authService.register(name, mobileNumber, email);
    const t = await apiService.getStoredToken();
    setToken(t);
    if (t) {
      router.replace("/go-online");
    }
    return res;
  };

  const logout = async () => {
    await authService.logout();
    setToken(null);
    router.replace("/auth");
  };

  const value: AuthContextType = {
    loading,
    isAuthenticated: !!token,
    token,
    initiateLogin,
    verifyLogin,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export default AuthContext;
