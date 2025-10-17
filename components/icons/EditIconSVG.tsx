import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const EditIconSVG: React.FC<IconProps> = ({ width = 20, height = 20, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16732 16.6667H15.834C16.055 16.6667 16.267 16.7545 16.4232 16.9108C16.5795 17.0671 16.6673 17.2791 16.6673 17.5001C16.6673 17.7211 16.5795 17.9331 16.4232 18.0893C16.267 18.2456 16.055 18.3334 15.834 18.3334H4.16732C3.9463 18.3334 3.73434 18.2456 3.57806 18.0893C3.42178 17.9331 3.33398 17.7211 3.33398 17.5001C3.33398 17.2791 3.42178 17.0671 3.57806 16.9108C3.73434 16.7545 3.9463 16.6667 4.16732 16.6667ZM3.33398 12.5001L11.6673 4.16675L14.1673 6.66675L5.83398 15.0001H3.33398V12.5001ZM12.5007 3.33341L14.1673 1.66675L16.6673 4.16675L14.9998 5.83425L12.5007 3.33341Z"
        fill={color}
      />
    </Svg>
  );
};

export default EditIconSVG;
