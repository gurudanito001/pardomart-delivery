import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ReturnRequestSVG: React.FC<IconProps> = ({ 
  width = 80, 
  height = 80, 
  color = '#F66C2B' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Path 
        d="M10.5 43.3333V26.6667H70.5V43.3333C70.5 55.9033 70.5 62.19 66.5933 66.0933C62.6867 69.9967 56.4033 70 43.8333 70H37.1667C24.5967 70 18.31 70 14.4067 66.0933C10.5033 62.1867 10.5 55.9033 10.5 43.3333Z" 
        stroke={color} 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M10.5 26.6667L13.3833 20.2567C15.6233 15.2833 16.74 12.8 19.0067 11.4C21.2733 10 24.1833 10 30 10H51C56.8167 10 59.7233 10 61.9933 11.4C64.26 12.8 65.3767 15.2833 67.6167 20.2567L70.5 26.6667M40.5 26.6667V10" 
        stroke={color} 
        strokeWidth="5" 
        strokeLinecap="round"
      />
      <Path 
        d="M28.8346 45H47.168C48.9361 45 50.6318 45.7024 51.882 46.9526C53.1323 48.2029 53.8346 49.8986 53.8346 51.6667C53.8346 53.4348 53.1323 55.1305 51.882 56.3807C50.6318 57.631 48.9361 58.3333 47.168 58.3333H43.8346M33.8346 38.3333L27.168 45L33.8346 51.6667" 
        stroke={color} 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ReturnRequestSVG;
