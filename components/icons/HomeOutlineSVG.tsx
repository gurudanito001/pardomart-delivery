import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface HomeOutlineSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export function HomeOutlineSVG({ 
  width = 24, 
  height = 24, 
  color = '#484C52' 
}: HomeOutlineSVGProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path 
        d="M3.42039 7.823C2.90039 8.77 2.90039 9.915 2.90039 12.203V13.725C2.90039 17.625 2.90039 19.576 4.07239 20.788C5.24439 22 7.12939 22 10.9004 22H14.9004C18.6714 22 20.5574 22 21.7284 20.788C22.8994 19.576 22.9004 17.626 22.9004 13.725V12.204C22.9004 9.915 22.9004 8.771 22.3804 7.823C21.8624 6.874 20.9134 6.286 19.0164 5.108L17.0164 3.867C15.0114 2.622 14.0084 2 12.9004 2C11.7924 2 10.7904 2.622 8.78439 3.867L6.78439 5.108C4.88739 6.286 3.93939 6.874 3.42039 7.823Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M12.1504 18V15" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
