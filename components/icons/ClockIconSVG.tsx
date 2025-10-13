import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ClockIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ClockIconSVG: React.FC<ClockIconSVGProps> = ({
  width = 12,
  height = 12,
  color = '#7C7B7B',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <Path
        d="M6 1C3.243 1 1 3.243 1 6C1 8.757 3.243 11 6 11C8.757 11 11 8.757 11 6C11 3.243 8.757 1 6 1ZM6 10C3.7945 10 2 8.2055 2 6C2 3.7945 3.7945 2 6 2C8.2055 2 10 3.7945 10 6C10 8.2055 8.2055 10 6 10Z"
        fill={color}
      />
      <Path d="M6.5 3.5H5.5V6.5H8.5V5.5H6.5V3.5Z" fill={color} />
    </Svg>
  );
};
