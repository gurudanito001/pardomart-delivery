import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface LocationPermissionModalProps {
  visible: boolean;
  onClose: () => void;
  onEnableLocation: () => void;
  onCancel: () => void;
}

export default function LocationPermissionModal({
  visible,
  onClose,
  onEnableLocation,
  onCancel,
}: LocationPermissionModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      {/* Backdrop */}
      <View style={styles.backdrop}>
        {/* Modal Content */}
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={18} color="#000" />
          </TouchableOpacity>

          {/* Modal Content */}
          <View style={styles.content}>
            {/* Header Section */}
            <View style={styles.headerSection}>
              <Text style={styles.title}>Location Access</Text>
              <Text style={styles.description}>
                Allow Pardomart to access this device's location for optimal route calculation and receiving new orders
              </Text>
            </View>

            {/* Buttons Section */}
            <View style={styles.buttonsSection}>
              {/* Enable Location Button */}
              <TouchableOpacity
                style={styles.enableButton}
                onPress={onEnableLocation}
              >
                <Text style={styles.enableButtonText}>Enable location</Text>
              </TouchableOpacity>

              {/* Cancel Button */}
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onCancel}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalContainer: {
    width: SCREEN_WIDTH - 32,
    maxWidth: 398,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 41,
    paddingVertical: 21,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 21,
    right: 21,
    width: 17.5,
    height: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  content: {
    gap: 29,
    paddingTop: 14,
  },
  headerSection: {
    gap: 19,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway-700',
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#484C52',
    textAlign: 'center',
    lineHeight: 18,
  },
  buttonsSection: {
    gap: 11,
  },
  enableButton: {
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  enableButtonText: {
    fontSize: 16,
    fontFamily: 'Raleway-700',
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 25,
  },
  cancelButton: {
    backgroundColor: '#BBB',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  cancelButtonText: {
    fontSize: 16,
    fontFamily: 'Raleway-700',
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 25,
  },
});
