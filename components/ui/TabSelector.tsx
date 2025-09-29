import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface TabSelectorProps {
  activeTab: 'email' | 'phone';
  onTabChange: (tab: 'email' | 'phone') => void;
}

export default function TabSelector({ activeTab, onTabChange }: TabSelectorProps) {
  const handleTabSwitch = (tab: 'email' | 'phone') => {
    onTabChange(tab);
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabSelector}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'email' ? styles.activeTab : styles.inactiveTab
          ]}
          onPress={() => handleTabSwitch('email')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'email' ? styles.activeTabText : styles.inactiveTabText
          ]}>
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'phone' ? styles.activeTab : styles.inactiveTab
          ]}
          onPress={() => handleTabSwitch('phone')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'phone' ? styles.activeTabText : styles.inactiveTabText
          ]}>
            Phone Number
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 33,
    paddingTop: 35,
    marginBottom: 27,
  },
  tabSelector: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    padding: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
    position: 'relative',
    alignSelf: 'stretch',
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 53,
  },
  activeTab: {
    backgroundColor: '#FFF',
  },
  inactiveTab: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Raleway',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '700',
  },
  inactiveTabText: {
    color: '#7C7B7B',
    fontWeight: '700',
  },
});
