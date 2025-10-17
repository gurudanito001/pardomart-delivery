import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface BankIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export const BankIconSVG: React.FC<BankIconSVGProps> = ({ 
  width = 33, 
  height = 40,
  color = '#333'
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 33 40" fill="none">
      <Path 
        d="M7.81579 18H4.34211V32H7.81579V18ZM18.2368 18H14.7632V32H18.2368V18ZM33 36H0V40H33V36ZM28.6579 18H25.1842V32H28.6579V18ZM16.5 4.52L25.5489 10H7.45105L16.5 4.52ZM16.5 0L0 10V14H33V10L16.5 0Z" 
        fill={color}
      />
    </Svg>
  );
};
