import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const DownArrowIconSVG: React.FC<IconProps> = ({ width = 16, height = 16, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00048 10.207L11.8545 6.354L11.1475 5.646L8.00048 8.793L4.85448 5.646L4.14648 6.354L8.00048 10.207Z"
        fill={color}
      />
    </Svg>
  );
};

export default DownArrowIconSVG;
