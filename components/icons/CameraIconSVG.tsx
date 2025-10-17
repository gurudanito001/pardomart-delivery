import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const CameraIconSVG: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "white",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="12" fill="#333333" />
      <Path
        d="M13.8466 6.76929H10.7697L9.23122 8.61544H7.38507C7.05865 8.61544 6.74559 8.74511 6.51478 8.97593C6.28397 9.20674 6.1543 9.51979 6.1543 9.84621V15.3847C6.1543 15.7111 6.28397 16.0241 6.51478 16.255C6.74559 16.4858 7.05865 16.6154 7.38507 16.6154H17.2312C17.5576 16.6154 17.8707 16.4858 18.1015 16.255C18.3323 16.0241 18.462 15.7111 18.462 15.3847V9.84621C18.462 9.51979 18.3323 9.20674 18.1015 8.97593C17.8707 8.74511 17.5576 8.61544 17.2312 8.61544H15.3851L13.8466 6.76929Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.3071 14.1537C13.3267 14.1537 14.1532 13.3272 14.1532 12.3076C14.1532 11.288 13.3267 10.4614 12.3071 10.4614C11.2875 10.4614 10.4609 11.288 10.4609 12.3076C10.4609 13.3272 11.2875 14.1537 12.3071 14.1537Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CameraIconSVG;
