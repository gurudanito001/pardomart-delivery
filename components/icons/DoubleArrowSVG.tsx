import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface DoubleArrowSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export function DoubleArrowSVG({ 
  width = 19, 
  height = 20, 
  color = '#FFF' 
}: DoubleArrowSVGProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 20" fill="none">
      <Path 
        d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z" 
        fill={color} 
      />
      <Path 
        d="M7 18.23L8.77 20L18.77 10L8.77 0L7 1.77L15.23 10L7 18.23Z" 
        fill={color} 
      />
    </Svg>
  );
}
