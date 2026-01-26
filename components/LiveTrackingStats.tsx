import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import Svg, { Path, Circle, G } from 'react-native-svg';

interface LiveTrackingStatsProps {
  distance?: string;
  estimatedTime?: string;
  speed?: string;
  isActive?: boolean;
}

const SpeedGaugeIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke="#0085FF" strokeWidth="1.5" fill="none" />
    <Path d="M12 5V2M12 22V19" stroke="#0085FF" strokeWidth="1.5" />
    <Path d="M19 12H22M2 12H5" stroke="#0085FF" strokeWidth="1.5" />
    <Path d="M12 12L14 8" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

const TimerIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="13" r="9" stroke="#0085FF" strokeWidth="1.5" fill="none" />
    <Path d="M12 9V13L15 14.5" stroke="#0085FF" strokeWidth="1.5" strokeLinecap="round" />
    <Path d="M9 2H15" stroke="#0085FF" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

const RouteDistanceIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2L22 8V16L12 22L2 16V8L12 2Z"
      stroke="#0085FF"
      strokeWidth="1.5"
      fill="none"
    />
    <Path d="M12 9L15 11M12 9L9 11M12 9V15" stroke="#0085FF" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

const LiveTrackingStats: React.FC<LiveTrackingStatsProps> = ({
  distance,
  estimatedTime,
  speed,
  isActive = true,
}) => {
  return (
    <View style={[styles.container, !isActive && styles.containerInactive]}>
      <View style={styles.header}>
        <View style={styles.liveBadge}>
          <View style={styles.livePulse} />
          <Text style={styles.liveText}>LIVE TRACKING</Text>
        </View>
      </View>

      <View style={styles.statsGrid}>
        {distance && (
          <View style={styles.statCard}>
            <View style={styles.iconContainer}>
              <RouteDistanceIcon />
            </View>
            <Text style={styles.statLabel}>Distance</Text>
            <Text style={styles.statValue}>{distance}</Text>
          </View>
        )}

        {estimatedTime && (
          <View style={styles.statCard}>
            <View style={styles.iconContainer}>
              <TimerIcon />
            </View>
            <Text style={styles.statLabel}>ETA</Text>
            <Text style={styles.statValue}>{estimatedTime}</Text>
          </View>
        )}

        {speed && (
          <View style={styles.statCard}>
            <View style={styles.iconContainer}>
              <SpeedGaugeIcon />
            </View>
            <Text style={styles.statLabel}>Speed</Text>
            <Text style={styles.statValue}>{speed}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 85,
    right: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    maxWidth: 280,
  },
  containerInactive: {
    opacity: 0.6,
  },
  header: {
    marginBottom: 10,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F0F8FF',
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  livePulse: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
  },
  liveText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0085FF',
    fontFamily: 'Open Sans',
    letterSpacing: 0.5,
  },
  statsGrid: {
    gap: 8,
  },
  statCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
    fontFamily: 'Open Sans',
    color: '#9CA3AF',
    fontWeight: '500',
    flex: 1,
  },
  statValue: {
    fontSize: 13,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#0085FF',
  },
});

export default LiveTrackingStats;
