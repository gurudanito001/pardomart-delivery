import React from 'react';
import Svg, { Path, Rect, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

export const NavigationRouteSVG = () => (
  <Svg width={179} height={276} viewBox="0 0 179 276" fill="none" style={{ transform: [{ rotate: '3.5deg' }] }}>
    <Path
      d="M164.492 274.125L174.686 203.512C179.626 169.287 174.301 134.366 159.385 103.169C134.595 51.3223 85.8962 14.9799 29.1387 5.96937L2.46094 1.73413"
      stroke="url(#paint0_linear_route)"
      strokeWidth={3.42118}
      strokeLinecap="round"
      strokeDasharray="6.84 6.84"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_route"
        x1="0.730059"
        y1="-41.9718"
        x2="119.346"
        y2="199.91"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0.18937" stopColor="#FFB169" />
        <Stop offset="1" stopColor="#000000" stopOpacity="0" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const RouteStartMarker = () => (
  <View style={styles.startMarkerContainer}>
    <View style={styles.outerCircle}>
      <View style={styles.middleCircle}>
        <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
          <Rect
            x="1.44141"
            y="0.966644"
            width="16.789"
            height="16.789"
            rx="8.39449"
            transform="rotate(3.5 1.44141 0.966644)"
            fill="white"
          />
          <Circle
            cx="9.30818"
            cy="9.85795"
            r="4.19725"
            transform="rotate(3.5 9.30818 9.85795)"
            fill="#FEB97A"
          />
        </Svg>
      </View>
    </View>
  </View>
);

export const RouteEndMarker = () => (
  <View style={styles.endMarkerContainer}>
    <View style={styles.navigationCircle} />
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      style={styles.navigationArrow}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.38862 11.9317L13.0832 13.5651C13.2888 13.6368 13.4224 13.5124 13.4705 13.4548C13.5186 13.3971 13.6213 13.2421 13.5336 13.0286L8.92059 1.86352C8.8386 1.66658 8.67396 1.63124 8.60807 1.62549C8.54326 1.61876 8.37981 1.62708 8.27114 1.80039L2.00247 11.9964C1.88373 12.1898 1.96197 12.3633 2.00072 12.4285C2.04039 12.4948 2.15515 12.6441 2.36971 12.6112L7.33014 11.8355L7.7357 6.13971C7.758 5.82714 8.01305 5.59241 8.30573 5.6158C8.59842 5.63919 8.81775 5.91317 8.79545 6.22575L8.38862 11.9317ZM14.1189 14.363C13.7432 14.7044 13.2364 14.8128 12.7547 14.6461L7.77716 12.9138L2.5233 13.7354C1.9568 13.8236 1.41323 13.5579 1.10497 13.0396C0.796169 12.5217 0.801095 11.8829 1.11485 11.3721L7.38353 1.17615C7.67199 0.707233 8.17368 0.447253 8.6959 0.491755C9.22042 0.539145 9.67874 0.888286 9.89167 1.40472L14.5042 12.5692C14.7369 13.1303 14.6431 13.7614 14.2597 14.2161C14.2145 14.2692 14.1686 14.3178 14.1189 14.363Z"
        fill="black"
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  startMarkerContainer: {
    width: 46,
    height: 46,
    transform: [{ rotate: '3.5deg' }],
  },
  outerCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255, 210, 170, 0.20)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(254, 185, 122, 0.40)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endMarkerContainer: {
    width: 32,
    height: 57,
    transform: [{ rotate: '6.435deg' }],
    position: 'relative',
  },
  navigationCircle: {
    width: 22,
    height: 23,
    borderRadius: 12,
    backgroundColor: '#292662',
    position: 'absolute',
    left: 5,
    top: 2,
    transform: [{ rotate: '-40.34deg' }],
  },
  navigationArrow: {
    position: 'absolute',
    left: 11,
    top: 38,
    transform: [{ rotate: '-40.031deg' }],
  },
});
