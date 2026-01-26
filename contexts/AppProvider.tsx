import React, { ReactNode } from 'react';
import { AuthProvider, useAuth as useAuthFromContext } from './AuthContext';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  );
};

// Re-export hooks for convenience
export const useAuth = useAuthFromContext;

// No state type re-exports to avoid coupling with removed local types
