import { Platform } from 'react-native';

export const colors = {
  primary: '#06888C',
  background: '#FFFFFF',
  textPrimary: '#100A37',
  border: '#E0E0E0',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

export const typography = {
  families: {
    accent: 'Raleway',
    secondary: 'Open Sans',
    tertiary: 'Nunito Sans',
  },
  sizes: {
    sm: 12,
    base: 14,
    lg: 18,
  },
  weights: {
    normal: '400' as const,
    medium: '600' as const,
    bold: '700' as const,
  },
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
};

export const shadows = {
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: Platform.OS === 'android' ? 2 : 0,
  },
};

export default {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
};
