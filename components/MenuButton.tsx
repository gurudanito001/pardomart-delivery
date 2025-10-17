import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MenuSVG } from '@/components/icons';
import { ProfileDrawer } from './ProfileDrawer';

interface MenuButtonProps {
  iconColor?: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ iconColor = '#000' }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setShowDrawer(true)}
        activeOpacity={0.7}
      >
        <MenuSVG width={24} height={24} color={iconColor} />
      </TouchableOpacity>

      <ProfileDrawer
        visible={showDrawer}
        onClose={() => setShowDrawer(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
