import React from 'react';
import { Svg, Circle, Path } from 'react-native-svg';

export const VerifiedIcon: React.FC<{ width?: number; height?: number; color?: string }> = ({
  width = 200,
  height = 200,
  color = '#06888C',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 200" fill="none">
      <Circle cx="100" cy="100" r="90" fill={color} opacity={0.12} />
      <Path d="M70 100l15 15 40-40" stroke={color} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default VerifiedIcon;
