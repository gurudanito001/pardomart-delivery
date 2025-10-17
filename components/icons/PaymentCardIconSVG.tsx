import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface PaymentCardIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export function PaymentCardIconSVG({ 
  width = 30, 
  height = 30, 
  color = '#000' 
}: PaymentCardIconSVGProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <Path 
        d="M23.9062 5.625H6.09375C4.28157 5.625 2.8125 7.09407 2.8125 8.90625V21.0938C2.8125 22.9059 4.28157 24.375 6.09375 24.375H23.9062C25.7184 24.375 27.1875 22.9059 27.1875 21.0938V8.90625C27.1875 7.09407 25.7184 5.625 23.9062 5.625Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M2.8125 11.25H27.1875M7.5 17.5781H10.3125V18.75H7.5V17.5781Z" 
        stroke={color} 
        strokeWidth="1.875" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
