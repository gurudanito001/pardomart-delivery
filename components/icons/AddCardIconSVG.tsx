import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface AddCardIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export const AddCardIconSVG: React.FC<AddCardIconSVGProps> = ({ 
  width = 23, 
  height = 18,
  color = '#FFF'
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 23 18" fill="none">
      <Path 
        d="M12 17H10C6.241 17 4.362 17 3.107 16.01C2.90756 15.852 2.7222 15.677 2.553 15.487C1.5 14.307 1.5 12.537 1.5 9C1.5 5.463 1.5 3.694 2.553 2.513C2.72167 2.32367 2.90633 2.14967 3.107 1.991C4.362 1 6.241 1 10 1H13C16.759 1 18.638 1 19.892 1.99C20.0933 2.15 20.2783 2.32433 20.447 2.513C21.339 3.513 21.476 4.936 21.497 7.5M18 17V10M14.5 13.5H21.5M1.5 6H21.5" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};
