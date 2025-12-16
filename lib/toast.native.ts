import { Toaster as NativeToaster, toast as nativeToast } from 'sonner-native';

// Re-export with a common interface used across the app
export const Toaster = NativeToaster;
export const toast = nativeToast;


