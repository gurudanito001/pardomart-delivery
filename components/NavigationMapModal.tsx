import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

interface NavigationMapModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectGoogleMap: () => void;
  onSelectInAppMap: () => void;
}

const CloseIconModal = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path
      d="M2.25 17.5L0.5 15.75L7.5 8.75L0.5 1.75L2.25 0L9.25 7L16.25 0L18 1.75L11 8.75L18 15.75L16.25 17.5L9.25 10.5L2.25 17.5Z"
      fill="black"
    />
  </Svg>
);

const GoogleMapIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z"
      fill="#0085FF"
    />
    <Path
      d="M11.4201 21.814C11.5894 21.9346 11.7922 21.9994 12.0001 21.9994C12.208 21.9994 12.4107 21.9346 12.5801 21.814C12.8841 21.599 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2C7.58909 2 4.00009 5.589 4.00009 9.995C3.97109 16.44 11.1161 21.599 11.4201 21.814ZM12.0001 4C15.3091 4 18.0001 6.691 18.0001 10.005C18.0211 14.443 13.6121 18.428 12.0001 19.735C10.3891 18.427 5.97909 14.441 6.00009 10C6.00009 6.691 8.69109 4 12.0001 4Z"
      fill="#0085FF"
    />
  </Svg>
);

const InAppMapIcon = () => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 4.00002C12.106 4.00002 11.7159 4.07762 11.3519 4.22838C10.988 4.37915 10.6573 4.60012 10.3787 4.8787C10.1001 5.15728 9.87913 5.48799 9.72836 5.85197C9.5776 6.21595 9.5 6.60605 9.5 7.00002C9.5 7.39399 9.5776 7.78409 9.72836 8.14807C9.87913 8.51205 10.1001 8.84276 10.3787 9.12134C10.6573 9.39992 10.988 9.62089 11.3519 9.77166C11.7159 9.92242 12.106 10 12.5 10C13.2956 10 14.0587 9.68395 14.6213 9.12134C15.1839 8.55873 15.5 7.79567 15.5 7.00002C15.5 6.20437 15.1839 5.44131 14.6213 4.8787C14.0587 4.31609 13.2956 4.00002 12.5 4.00002ZM7.5 7.00002C7.50019 6.05399 7.76877 5.12743 8.27454 4.32794C8.7803 3.52846 9.5025 2.88887 10.3573 2.48345C11.212 2.07803 12.1642 1.92342 13.1034 2.03758C14.0425 2.15174 14.9299 2.52998 15.6627 3.12838C16.3954 3.72678 16.9433 4.52077 17.2428 5.41814C17.5423 6.31551 17.5811 7.27944 17.3546 8.19796C17.1282 9.11649 16.6458 9.95192 15.9634 10.6072C15.2811 11.2625 14.4269 11.7108 13.5 11.9V17C13.5 17.2652 13.3946 17.5196 13.2071 17.7071C13.0196 17.8947 12.7652 18 12.5 18C12.2348 18 11.9804 17.8947 11.7929 17.7071C11.6054 17.5196 11.5 17.2652 11.5 17V11.9C10.3706 11.6695 9.3556 11.0558 8.62669 10.1629C7.89778 9.27001 7.49976 8.15267 7.5 7.00002ZM9.989 16.1C10.0089 16.2299 10.003 16.3624 9.97163 16.49C9.94028 16.6176 9.88408 16.7378 9.80626 16.8437C9.72843 16.9496 9.6305 17.0391 9.51807 17.1071C9.40564 17.1751 9.2809 17.2202 9.151 17.24C7.873 17.434 6.858 17.729 6.191 18.055C4.971 18.652 6.397 19.081 7.141 19.313C8.468 19.728 10.363 20 12.5 20C14.637 20 16.532 19.728 17.859 19.313C18.608 19.079 20.029 18.653 18.809 18.055C18.142 17.729 17.127 17.435 15.849 17.24C15.7177 17.222 15.5912 17.1781 15.477 17.1107C15.3628 17.0434 15.2632 16.954 15.1838 16.8478C15.1045 16.7416 15.047 16.6207 15.0149 16.4921C14.9827 16.3635 14.9764 16.2298 14.9963 16.0988C15.0163 15.9677 15.0621 15.842 15.1311 15.7288C15.2001 15.6156 15.2909 15.5172 15.3983 15.4395C15.5056 15.3617 15.6274 15.3061 15.7564 15.2758C15.8855 15.2455 16.0193 15.2411 16.15 15.263C17.538 15.473 18.772 15.81 19.689 16.259C20.573 16.692 21.5 17.421 21.5 18.5C21.5 19.311 20.976 19.9 20.466 20.277C18.316 21.865 15.036 22 12.5 22C10.218 22 8.113 21.712 6.545 21.222C5.295 20.832 3.5 20.062 3.5 18.5C3.5 17.42 4.427 16.692 5.311 16.26C6.228 15.81 7.463 15.474 8.849 15.263C8.97889 15.2431 9.11142 15.249 9.23902 15.2804C9.36662 15.3117 9.4868 15.3679 9.59267 15.4458C9.69854 15.5236 9.78804 15.6215 9.85604 15.734C9.92405 15.8464 9.96923 15.9701 9.989 16.1Z"
      fill="white"
    />
  </Svg>
);

export const NavigationMapModal: React.FC<NavigationMapModalProps> = ({
  visible,
  onClose,
  onSelectGoogleMap,
  onSelectInAppMap,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.modalContainer} onPress={(e) => e.stopPropagation()}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <CloseIconModal />
          </TouchableOpacity>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>Select Navigation Map</Text>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.googleMapButton}
                onPress={onSelectGoogleMap}
              >
                <GoogleMapIcon />
                <Text style={styles.googleMapText}>Google map</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inAppMapButton}
                onPress={onSelectInAppMap}
              >
                <InAppMapIcon />
                <Text style={styles.inAppMapText}>In-App Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 398,
    paddingVertical: 21,
    paddingHorizontal: 41,
    backgroundColor: '#FFF',
    borderRadius: 16,
    gap: 10,
  },
  closeButton: {
    width: 17.5,
    height: 17.5,
    alignSelf: 'flex-end',
  },
  contentContainer: {
    gap: 14,
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
  },
  buttonsContainer: {
    gap: 22,
  },
  googleMapButton: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 70,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  googleMapText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 25,
  },
  inAppMapButton: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 70,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 16,
    backgroundColor: '#0085FF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  inAppMapText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 25,
  },
});

export default NavigationMapModal;
