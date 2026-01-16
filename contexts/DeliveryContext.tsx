import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import type { User as DeliveryProfile } from '../api/models';
import { STORAGE_KEYS } from '../constants';
import { getStorageItem, removeStorageItem, setStorageItem } from '../utils/storage';

// Delivery Actions
type DeliveryAction =
  | { type: 'DELIVERY_LOADING' }
  | { type: 'DELIVERY_PROFILE_LOADED'; payload: DeliveryProfile }
  | { type: 'DELIVERY_ERROR'; payload: string }
  | { type: 'DELIVERY_ONLINE_STATUS_CHANGED'; payload: boolean }
  | { type: 'DELIVERY_DOCUMENT_UPLOADED'; payload: any }
  | { type: 'DELIVERY_RESET' }
  | { type: 'CLEAR_DELIVERY_ERROR' };

interface DeliveryState {
  profile: DeliveryProfile | null;
  isOnline: boolean;
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: DeliveryState = {
  profile: null,
  isOnline: false,
  isLoading: false,
  error: null,
};

// Delivery reducer
const deliveryReducer = (state: DeliveryState, action: DeliveryAction): DeliveryState => {
  switch (action.type) {
    case 'DELIVERY_LOADING':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    
    case 'DELIVERY_PROFILE_LOADED':
      return {
        ...state,
        profile: action.payload as any,
        isOnline: (action.payload as any)?.isOnline ?? state.isOnline,
        isLoading: false,
        error: null,
      };
    
    case 'DELIVERY_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    
    case 'DELIVERY_ONLINE_STATUS_CHANGED':
      return {
        ...state,
        isOnline: action.payload,
        profile: state.profile ? ({
          ...(state.profile as any),
          isOnline: action.payload,
        } as any) : null,
      };
    
    case 'DELIVERY_DOCUMENT_UPLOADED':
      return {
        ...state,
        profile: state.profile ? ({
          ...(state.profile as any),
          documents: ([...(state.profile as any).documents ?? [], action.payload] as any),
        } as any) : null,
      };
    
    case 'DELIVERY_RESET':
      return initialState;
    
    case 'CLEAR_DELIVERY_ERROR':
      return {
        ...state,
        error: null,
      };
    
    default:
      return state;
  }
};

// Context interface
interface DeliveryContextType {
  state: DeliveryState;
  loadProfile: () => Promise<void>;
  updateProfile: (data: Partial<DeliveryProfile>) => Promise<any>;
  uploadDocument: (file: FormData) => Promise<void>;
  goOnline: () => Promise<void>;
  goOffline: () => Promise<void>;
  clearError: () => void;
  resetDelivery: () => void;
}

// Create context
const DeliveryContext = createContext<DeliveryContextType | undefined>(undefined);

// Delivery Provider component
interface DeliveryProviderProps {
  children: ReactNode;
}

export const DeliveryProvider: React.FC<DeliveryProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(deliveryReducer, initialState);

  // Load profile from storage on mount
  useEffect(() => {
    loadStoredProfile();
  }, []);

  const loadStoredProfile = async () => {
    try {
      const storedProfile = await getStorageItem<DeliveryProfile>(STORAGE_KEYS.DELIVERY_PROFILE);
      if (storedProfile) {
        dispatch({ type: 'DELIVERY_PROFILE_LOADED', payload: storedProfile });
      }
    } catch (error) {
      console.warn('Failed to load stored delivery profile:', error);
    }
  };

  const saveProfileToStorage = async (profile: DeliveryProfile) => {
    try {
      await setStorageItem(STORAGE_KEYS.DELIVERY_PROFILE, profile);
    } catch (error) {
      console.warn('Failed to save delivery profile to storage:', error);
    }
  };

  const loadProfile = async () => {
    try {
      dispatch({ type: 'DELIVERY_LOADING' });
      // TODO: Replace with OpenAPI call when a delivery profile/me endpoint is available.
      const existing = await getStorageItem<DeliveryProfile>(STORAGE_KEYS.DELIVERY_PROFILE);
      if (existing) {
        dispatch({ type: 'DELIVERY_PROFILE_LOADED', payload: existing });
      } else {
        dispatch({ type: 'DELIVERY_ERROR', payload: 'Delivery profile not available' });
      }
    } catch (error: any) {
      dispatch({ type: 'DELIVERY_ERROR', payload: error.message });
      throw error;
    }
  };

  const updateProfile = async (data: Partial<DeliveryProfile>) => {
    try {
      dispatch({ type: 'DELIVERY_LOADING' });
      // TODO: Replace with the correct OpenAPI call when available
      const response = { data: { ...(state.profile || {}), ...data } } as any;
      
      dispatch({ type: 'DELIVERY_PROFILE_LOADED', payload: response.data });
      await saveProfileToStorage(response.data);
    } catch (error: any) {
      dispatch({ type: 'DELIVERY_ERROR', payload: error.message });
      throw error;
    }
  };

  const uploadDocument = async (file: FormData) => {
    try {
      dispatch({ type: 'DELIVERY_LOADING' });
      // TODO: Replace with the correct OpenAPI call when available
      const response = { data: {} as any } as any;
      
      dispatch({ type: 'DELIVERY_DOCUMENT_UPLOADED', payload: response.data });
      
      // Update profile in storage
      if (state.profile) {
        const updatedProfile = {
          ...(state.profile as any),
          documents: ([...(state.profile as any).documents ?? [], response.data] as any),
        } as any;
        await saveProfileToStorage(updatedProfile);
      }
    } catch (error: any) {
      dispatch({ type: 'DELIVERY_ERROR', payload: error.message });
      throw error;
    }
  };

  const goOnline = async () => {
    try {
      // TODO: Replace with OpenAPI call if available
      dispatch({ type: 'DELIVERY_ONLINE_STATUS_CHANGED', payload: true });
      
      // Update profile in storage
      if (state.profile) {
        const updatedProfile = { ...state.profile, isOnline: true };
        await saveProfileToStorage(updatedProfile);
      }
    } catch (error: any) {
      dispatch({ type: 'DELIVERY_ERROR', payload: error.message });
      throw error;
    }
  };

  const goOffline = async () => {
    try {
      // TODO: Replace with OpenAPI call if available
      dispatch({ type: 'DELIVERY_ONLINE_STATUS_CHANGED', payload: false });
      
      // Update profile in storage
      if (state.profile) {
        const updatedProfile = { ...state.profile, isOnline: false };
        await saveProfileToStorage(updatedProfile);
      }
    } catch (error: any) {
      dispatch({ type: 'DELIVERY_ERROR', payload: error.message });
      throw error;
    }
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_DELIVERY_ERROR' });
  };

  const resetDelivery = async () => {
    dispatch({ type: 'DELIVERY_RESET' });
    await removeStorageItem(STORAGE_KEYS.DELIVERY_PROFILE);
  };

  const value: DeliveryContextType = {
    state,
    loadProfile,
    updateProfile,
    uploadDocument,
    goOnline,
    goOffline,
    clearError,
    resetDelivery,
  };

  return <DeliveryContext.Provider value={value}>{children}</DeliveryContext.Provider>;
};

// Hook to use delivery context
export const useDelivery = (): DeliveryContextType => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDelivery must be used within a DeliveryProvider');
  }
  return context;
};
