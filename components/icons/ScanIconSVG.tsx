import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ScanIconSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ScanIconSVG: React.FC<ScanIconSVGProps> = ({
  width = 24,
  height = 24,
  color = 'white',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
      <Path
        d="M4.5 8.5V6.5C4.5 5.96957 4.71071 5.46086 5.08579 5.08579C5.46086 4.71071 5.96957 4.5 6.5 4.5H8.5M4.5 16.5V18.5C4.5 19.0304 4.71071 19.5391 5.08579 19.9142C5.46086 20.2893 5.96957 20.5 6.5 20.5H8.5M16.5 4.5H18.5C19.0304 4.5 19.5391 4.71071 19.9142 5.08579C20.2893 5.46086 20.5 5.96957 20.5 6.5V8.5M16.5 20.5H18.5C19.0304 20.5 19.5391 20.2893 19.9142 19.9142C20.2893 19.5391 20.5 19.0304 20.5 18.5V16.5M7.5 12.5H17.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ScanIconSVG;
