import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface FilterIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export const FilterIconSVG: React.FC<FilterIconSVGProps> = ({
  width = 16,
  height = 16,
  color = '#000',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M3 4.66675H13M4.66667 8.00008H11.3333M6.66667 11.3334H9.33333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
