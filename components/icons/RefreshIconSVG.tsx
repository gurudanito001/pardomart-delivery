import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface RefreshIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export const RefreshIconSVG: React.FC<RefreshIconSVGProps> = ({
  width = 16,
  height = 16,
  color = '#484C52',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M13.3327 7.33322C13.1696 6.16003 12.6254 5.07299 11.7838 4.23955C10.9422 3.40611 9.84985 2.8725 8.67513 2.72092C7.50041 2.56934 6.30843 2.80821 5.28282 3.40072C4.2572 3.99323 3.45485 4.90651 2.99935 5.99989M2.66602 3.33322V5.99989H5.33268M2.66602 8.66655C2.82906 9.83974 3.3733 10.9268 4.21492 11.7602C5.05654 12.5937 6.14884 13.1273 7.32357 13.2789C8.49829 13.4304 9.69027 13.1916 10.7159 12.5991C11.7415 12.0065 12.5438 11.0933 12.9993 9.99989M13.3327 12.6666V9.99989H10.666"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
