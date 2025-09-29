import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

export const ThemedText: React.FC<TextProps & { type?: 'title' | 'link' | 'body' }> = ({ type = 'body', style, children, ...rest }) => {
  const extraStyle = type === 'title' ? styles.title : type === 'link' ? styles.link : undefined;
  return (
    <Text style={[styles.base, extraStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: '#000',
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  link: {
    color: '#06888C',
  },
});

export default ThemedText;
