import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
} from 'react-native';

export interface OTPInputProps {
  length?: number;
  value: string[];
  onChange: (otp: string[]) => void;
  autoFocus?: boolean;
  style?: ViewStyle;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value,
  onChange,
  autoFocus = true,
  style,
}) => {
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (autoFocus) {
      inputRefs.current[0]?.focus();
    }
  }, [autoFocus]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...value];
    newOtp[index] = text;
    onChange(newOtp);

    // Move to next input if current input is filled
    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    // Clear the input when focused for better UX
    if (value[index]) {
      const newOtp = [...value];
      newOtp[index] = '';
      onChange(newOtp);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.inputContainer,
            value[index] ? styles.inputFilled : styles.inputEmpty,
          ]}
        >
          <TextInput
            ref={(ref) => { inputRefs.current[index] = ref; }}
            style={styles.input}
            value={value[index] || ''}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
            onFocus={() => handleFocus(index)}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
            selectTextOnFocus
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  
  inputContainer: {
    width: 49,
    height: 49,
    borderRadius: 6.5,
    borderWidth: 1.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  inputFilled: {
    borderColor: '#0085FF',
    backgroundColor: '#FFFFFF',
  },
  
  inputEmpty: {
    borderColor: 'rgba(207, 219, 236, 1)',
    backgroundColor: 'rgba(230, 102, 26, 0.02)',
  },
  
  input: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Open Sans',
    color: '#1C2035',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    letterSpacing: 0.653,
  },
});
