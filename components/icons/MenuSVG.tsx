import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface MenuSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export function MenuSVG({ 
  width = 24, 
  height = 24, 
  color = '#000' 
}: MenuSVGProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" 
        fill={color} 
      />
    </Svg>
  );
}
