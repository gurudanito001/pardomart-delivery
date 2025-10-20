import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
}

export const SubmitFilledSVG: React.FC<IconProps> = ({ width = 100, height = 100 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 101 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15.625C13 14.7962 13.3292 14.0013 13.9153 13.4153C14.5013 12.8292 15.2962 12.5 16.125 12.5H84.875C85.7038 12.5 86.4987 12.8292 87.0847 13.4153C87.6708 14.0013 88 14.7962 88 15.625V43.75H81.75V18.75H19.25V81.25H31.7812V87.5H16.125C15.2962 87.5 14.5013 87.1708 13.9153 86.5847C13.3292 85.9987 13 85.2038 13 84.375V15.625ZM87.9625 58.325L59.7125 86.5687C59.1267 87.1527 58.3334 87.4806 57.5063 87.4806C56.6791 87.4806 55.8858 87.1527 55.3 86.5687L39.6125 70.8812L44.025 66.4563L57.5063 79.9375L83.5437 53.9L87.9625 58.325Z"
        fill="#90E07C"
      />
    </Svg>
  );
};

export default SubmitFilledSVG;
