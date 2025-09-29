import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CloseSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export function CloseSVG({ 
  width = 30, 
  height = 30, 
  color = '#000' 
}: CloseSVGProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <Path 
        d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z" 
        fill={color} 
      />
    </Svg>
  );
}
