import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const SupportSVG: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return <Ionicons name="headset-outline" size={Math.max(width, height)} color={color} />;
};

export default SupportSVG;
