import React from 'react';
import { ArrowBackSVG } from './ArrowBackSVG';

export const BackArrowIcon: React.FC<{ width?: number; height?: number; color?: string }> = ({
  width = 24,
  height = 24,
  color = '#000',
}) => {
  return <ArrowBackSVG width={width} height={height} color={color} />;
};

export default BackArrowIcon;
