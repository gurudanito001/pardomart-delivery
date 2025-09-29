import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  NotificationSVG,
  SupportSVG,
  MenuSVG,
  CloseSVG,
  DoubleArrowSVG,
  LocationPermissionModal
} from '../components';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function GoOnlinePage() {
  const router = useRouter();
  const [showLocationModal, setShowLocationModal] = useState(false);

  const handleGoOnline = () => {
    // Show location permission modal first
    setShowLocationModal(true);
  };

  const handleEnableLocation = () => {
    // Handle location permission granted
    setShowLocationModal(false);
    // Navigate to home after permission is granted
    router.push('/(tabs)/home');
  };

  const handleCancelLocation = () => {
    // Handle location permission denied
    setShowLocationModal(false);
  };

  const handleCloseModal = () => {
    setShowLocationModal(false);
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* World Map Background */}
      <Image
        source={{
          uri: 'https://api.builder.io/api/v1/image/assets/TEMP/3619225119bd10f6a1c9579a1f7e6b81d11749d1?width=860',
        }}
        style={styles.worldMap}
        resizeMode="cover"
      />

      {/* Header with Menu and Icons */}
      <SafeAreaView style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.menuButton}>
            <MenuSVG width={24} height={24} color="#000" />
          </TouchableOpacity>

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <NotificationSVG width={24} height={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <SupportSVG width={24} height={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Bottom Modal Card */}
      <View style={styles.bottomCard}>
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <CloseSVG width={30} height={30} color="#000" />
        </TouchableOpacity>

        {/* Handle Bar */}
        <View style={styles.handleBar} />

        {/* Content */}
        <View style={styles.cardContent}>
          {/* Illustration */}
          <Image
            source={{
              uri: 'https://api.builder.io/api/v1/image/assets/TEMP/03f50fd3e3a434701199d92f125f450382b1bfbb?width=324',
            }}
            style={styles.illustration}
            resizeMode="contain"
          />

          {/* Text */}
          <Text style={styles.mainText}>
            Go online now to start taking Orders and Earn
          </Text>

          {/* Go Online Button */}
          <TouchableOpacity style={styles.goOnlineButton} onPress={handleGoOnline}>
            <View style={styles.buttonIconContainer}>
              <DoubleArrowSVG width={19} height={20} color="#FFF" />
            </View>
            <Text style={styles.buttonText}>Go Online</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Location Permission Modal */}
      <LocationPermissionModal
        visible={showLocationModal}
        onClose={handleCloseModal}
        onEnableLocation={handleEnableLocation}
        onCancel={handleCancelLocation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  worldMap: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.735, // Adjust to match 684px/932px ratio from design
    position: 'absolute',
    top: 0,
    left: 0,
    aspectRatio: 215/342,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21,
    paddingTop: 16,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 16,
    paddingBottom: 34,
    paddingHorizontal: 19,
    height: 435,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 29,
    right: 25,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  handleBar: {
    width: 70,
    height: 5,
    backgroundColor: '#EEE',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 43,
  },
  cardContent: {
    alignItems: 'center',
    gap: 27,
    paddingHorizontal: 19,
    height: 325,
    width: 391,
    alignSelf: 'center',
  },
  illustration: {
    width: 162,
    height: 162,
  },
  mainText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 270,
    fontFamily: 'Open Sans',
  },
  goOnlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 120,
    width: '100%',
    height: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    position: 'relative',
  },
  buttonIconContainer: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#046DCE',
    borderRadius: 14,
    width: 53,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 25,
    fontFamily: 'Raleway',
  },
});
