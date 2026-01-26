import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

interface DeliveryMapProps {
  currentLocation?: Location.LocationObject | null;
  destinationLat?: number;
  destinationLng?: number;
  destinationName?: string;
  currentLocationName?: string;
  isTracking?: boolean;
}

interface RoutePoint {
  latitude: number;
  longitude: number;
}

const DeliveryMap: React.FC<DeliveryMapProps> = ({
  currentLocation,
  destinationLat,
  destinationLng,
  destinationName = 'Destination',
  currentLocationName = 'Current Location',
  isTracking = true,
}) => {
  const mapRef = useRef<MapView>(null);
  const [route, setRoute] = useState<RoutePoint[]>([]);
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);

  // Generate a simple route (in production, use Google Directions API or similar)
  const generateSimpleRoute = () => {
    if (!currentLocation || !destinationLat || !destinationLng) return;

    const startLat = currentLocation.coords.latitude;
    const startLng = currentLocation.coords.longitude;

    // Create an interpolated route between current and destination
    const steps = 30;
    const routePoints: RoutePoint[] = [];

    for (let i = 0; i <= steps; i++) {
      const progress = i / steps;
      routePoints.push({
        latitude: startLat + (destinationLat - startLat) * progress,
        longitude: startLng + (destinationLng - startLng) * progress,
      });
    }

    setRoute(routePoints);
  };

  useEffect(() => {
    generateSimpleRoute();
  }, [currentLocation, destinationLat, destinationLng]);

  // Auto-center map on current location when tracking
  useEffect(() => {
    if (isTracking && currentLocation && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        1000
      );
    }
  }, [currentLocation, isTracking]);

  // Initial map centering
  const handleMapReady = () => {
    if (currentLocation && destinationLat && destinationLng && mapRef.current) {
      const minLat = Math.min(currentLocation.coords.latitude, destinationLat);
      const maxLat = Math.max(currentLocation.coords.latitude, destinationLat);
      const minLng = Math.min(currentLocation.coords.longitude, destinationLng);
      const maxLng = Math.max(currentLocation.coords.longitude, destinationLng);

      const padding = 0.02;
      mapRef.current.fitToCoordinates(
        [
          {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          },
          { latitude: destinationLat, longitude: destinationLng },
        ],
        {
          edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
          animated: true,
        }
      );
    }
  };

  if (!currentLocation) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0085FF" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onMapReady={handleMapReady}
        initialRegion={{
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        rotateEnabled={true}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsScale={true}
      >
        {/* Route Polyline */}
        {route.length > 0 && (
          <Polyline
            coordinates={route}
            strokeColor="#0085FF"
            strokeWidth={4}
            lineDashPattern={[10, 5]}
            geodesic={true}
          />
        )}

        {/* Current Location Marker */}
        <Marker
          coordinate={{
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          }}
          title={currentLocationName}
          description="Your current location"
          pinColor="#0085FF"
          flat={false}
        />

        {/* Destination Marker */}
        {destinationLat && destinationLng && (
          <Marker
            coordinate={{
              latitude: destinationLat,
              longitude: destinationLng,
            }}
            title={destinationName}
            description="Delivery destination"
            pinColor="#FF0000"
            flat={false}
          />
        )}
      </MapView>

      {/* Legend */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#0085FF' }]} />
          <Text style={styles.legendText}>Your Location</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FF0000' }]} />
          <Text style={styles.legendText}>Destination</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
  legend: {
    position: 'absolute',
    bottom: 30,
    left: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 10,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'Open Sans',
  },
});

export default DeliveryMap;
