declare module 'expo-router';
declare module 'expo-router/entry';
declare module 'expo-symbols';
declare module 'expo-blur';

declare module 'react-native-reanimated' {
  export type SharedValue<T = any> = any;
  export function useSharedValue<T = any>(value: T): SharedValue<T>;
  export function useAnimatedStyle(fn: any): any;
  export function withTiming(value: any, config?: any): any;
  export const View: any;
  const _default: any;
  export default _default;
}

declare module 'react-native-svg' {
  import * as React from 'react';
  export const Svg: any;
  export const Path: any;
  export const Rect: any;
  export const Ellipse: any;
  export const Circle: any;
  export const G: any;
  export const Defs: any;
  export const LinearGradient: any;
  export const Stop: any;
  export const Use: any;
  export const Polygon: any;
  export const Line: any;
  export default any;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
