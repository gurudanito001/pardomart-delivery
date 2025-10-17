import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import {
  CloseSVG,
  ProfileIconMenuSVG,
  WalletIconSVG,
  SupportTicketIconSVG,
  PaymentCardIconSVG,
  HistoryIconSVG,
  SettingsIconSVG,
  VerifiedBadgeIconSVG,
  StarIconSVG,
} from "@/components/icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const DRAWER_WIDTH = SCREEN_WIDTH * 0.89;

interface ProfileDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  visible,
  onClose,
}) => {
  const router = useRouter();
  const slideAnim = React.useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const [isVisible, setIsVisible] = React.useState(visible);

  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -DRAWER_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setIsVisible(false);
      });
    }
  }, [visible, slideAnim]);

  const handleMenuItemPress = (item: string) => {
    if (item === "Edit Profile") {
      onClose();
      router.push("/(tabs)/home/edit-profile");
    } else if (item === "Wallet") {
      onClose();
      router.push("/(tabs)/home/wallet");
    } else if (item === "Create Ticket") {
      onClose();
      router.push("/(tabs)/help");
    } else if (item === "Payment") {
      onClose();
      router.push("/(tabs)/home/payment");
    } else if (item === "History") {
      onClose();
      router.push("/(tabs)/home/history");
    } else {
      console.log(`${item} pressed`);
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.drawer,
                {
                  transform: [{ translateX: slideAnim }],
                },
              ]}
            >
              <View style={styles.header}>
                <View style={styles.profileSection}>
                  <Image
                    source={{
                      uri: "https://api.builder.io/api/v1/image/assets/TEMP/8765f10a6ed08eb2d4c0dc4475a25e1b18347e4e?width=90",
                    }}
                    style={styles.avatar}
                  />
                  <View style={styles.profileInfo}>
                    <View style={styles.nameRow}>
                      <Text style={styles.name} numberOfLines={1}>
                        Damilare Adebanjo
                      </Text>
                      <VerifiedBadgeIconSVG width={16} height={16} />
                    </View>
                    <View style={styles.starsRow}>
                      <StarIconSVG width={12} height={12} filled />
                      <StarIconSVG width={12} height={12} filled />
                      <StarIconSVG width={12} height={12} filled />
                      <StarIconSVG width={12} height={12} filled />
                      <StarIconSVG width={12} height={12} filled={false} />
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <CloseSVG width={24} height={24} color="#FFF" />
                </TouchableOpacity>
              </View>

              <View style={styles.menuSection}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress("Edit Profile")}
                >
                  <ProfileIconMenuSVG width={30} height={30} color="#000" />
                  <Text style={styles.menuText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress("Wallet")}
                >
                  <WalletIconSVG width={30} height={30} color="#000" />
                  <Text style={styles.menuText}>Wallet</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress("Create Ticket")}
                >
                  <SupportTicketIconSVG width={30} height={30} color="#000" />
                  <Text style={styles.menuText}>Create Ticket</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress("Payment")}
                >
                  <PaymentCardIconSVG width={30} height={30} color="#000" />
                  <Text style={styles.menuText}>Payment </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress("History")}
                >
                  <HistoryIconSVG width={30} height={30} color="#000" />
                  <Text style={styles.menuText}>History</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress("Settings")}
                >
                  <SettingsIconSVG width={30} height={30} color="#000" />
                  <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity
                  style={styles.footerItem}
                  onPress={() => handleMenuItemPress("About")}
                >
                  <Text style={styles.footerText}>About</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.footerItem}
                  onPress={() => handleMenuItemPress("Privacy Policy")}
                >
                  <Text style={styles.footerText}>Privacy Policy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.footerItem}
                  onPress={() => handleMenuItemPress("Terms & Condition")}
                >
                  <Text style={styles.footerText}>Terms & Condition</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  drawer: {
    width: DRAWER_WIDTH,
    height: "100%",
    backgroundColor: "#FFF",
  },
  header: {
    height: 121,
    backgroundColor: "#0085FF",
    position: "relative",
  },
  profileSection: {
    position: "absolute",
    left: 39,
    top: 52,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 32,
  },
  profileInfo: {
    width: 152,
    gap: 4,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 6,
  },
  name: {
    width: 130,
    color: "#FFF",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 14,
  },
  starsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  closeButton: {
    position: "absolute",
    right: 21,
    top: 24,
    width: 24,
    height: 24,
  },
  menuSection: {
    marginTop: 27,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 35,
    paddingVertical: 21,
    gap: 15,
  },
  menuText: {
    color: "#000",
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 20,
  },
  footer: {
    marginTop: 27,
    gap: 8,
  },
  footerItem: {
    paddingHorizontal: 37,
    paddingVertical: 7,
    height: 34,
    justifyContent: "center",
  },
  footerText: {
    color: "#797979",
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 16,
  },
});
