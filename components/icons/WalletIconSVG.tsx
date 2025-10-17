import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface WalletIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export function WalletIconSVG({ 
  width = 30, 
  height = 30, 
  color = '#000' 
}: WalletIconSVGProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <Path 
        d="M21.25 10V6.25C21.25 5.91848 21.1183 5.60054 20.8839 5.36612C20.6495 5.1317 20.3315 5 20 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5M5 7.5C5 8.16304 5.26339 8.79893 5.73223 9.26777C6.20107 9.73661 6.83696 10 7.5 10H22.5C22.8315 10 23.1495 10.1317 23.3839 10.3661C23.6183 10.6005 23.75 10.9185 23.75 11.25V15M5 7.5V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C22.8315 25 23.1495 24.8683 23.3839 24.6339C23.6183 24.3995 23.75 24.0815 23.75 23.75V20" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M25 15V20H20C19.337 20 18.7011 19.7366 18.2322 19.2678C17.7634 18.7989 17.5 18.163 17.5 17.5C17.5 16.837 17.7634 16.2011 18.2322 15.7322C18.7011 15.2634 19.337 15 20 15H25Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
