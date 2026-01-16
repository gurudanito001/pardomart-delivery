import React, { ReactNode } from 'react';
import { AuthProvider, useAuth as useAuthFromContext } from './AuthContext';
import { DeliveryProvider, useDelivery as useVendorFromContext } from './DeliveryContext';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <DeliveryProvider>
        {children}
      </DeliveryProvider>
    </AuthProvider>
  );
};

// Re-export hooks for convenience
export const useAuth = useAuthFromContext;
export const useVendor = useVendorFromContext;

// No state type re-exports to avoid coupling with removed local types
