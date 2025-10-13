import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const InboxIconSVG: React.FC<IconProps> = ({ width = 24, height = 24, color = '#484C52' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M3 20L4.5 16.1C2.176 12.663 3.074 8.228 6.6 5.726C10.126 3.225 15.19 3.43 18.445 6.206C21.7 8.983 22.14 13.472 19.474 16.707C16.808 19.942 11.859 20.922 7.9 19L3 20Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default InboxIconSVG;
