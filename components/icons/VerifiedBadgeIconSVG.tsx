import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface VerifiedBadgeIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export function VerifiedBadgeIconSVG({ 
  width = 16, 
  height = 16, 
  color = '#8BC34A' 
}: VerifiedBadgeIconSVGProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path 
        d="M6.00065 2L5.33398 4H2.66732L3.33398 6.66667L1.33398 8L3.33398 9.33333L2.66732 12H5.33398L6.00065 14L8.00065 12.6667L10.0007 14L10.6673 12H13.334L12.6673 9.33333L14.6673 8L12.6673 6.66667L13.334 4H10.6673L10.0007 2L8.00065 3.33333L6.00065 2ZM10.6673 5.33333L11.334 6L6.66732 10.6667L4.66732 8.66667L5.33398 8L6.66732 9.33333L10.6673 5.33333Z" 
        fill={color}
      />
    </Svg>
  );
}
