import { OTPInput } from '@/components/ui/OTPInput';
import { AntDesign } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { AuthInitiateLoginPostRequestRoleEnum } from '@/api/models';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toast } from '@/utils/toast';
import auth from '@/services/auth';
import { useAuth } from '@/contexts/AppProvider';
export default function VerifyScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  // Key to force re-mount of OTPInput on resend for a better UX
  const [otpKey, setOtpKey] = useState(0);
  const [resendCooldown, setResendCooldown] = useState(0);

  const { identifier, fromScreen, role } = useLocalSearchParams() as {
    identifier: string;
    fromScreen?: string;
    role: AuthInitiateLoginPostRequestRoleEnum;
  };
  // Fallback if mobileNumber isn't explicitly passed but identifier is.
  // The `identifier` from `useLocalSearchParams` is already typed.
  const phone = identifier;

  const { verifyOTP, resendOTP, state } = useAuth();
  

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleVerify = async() => {
    const code = otp.join('');
    if (!phone) {
      toast.error('Missing phone number', {
        description: 'No phone number provided. Please go back and try again.',
      });
      return;
    }
    if (!role) {
      toast.error('Missing role', {
        description: 'No role provided. Please go back and try again.',
      });
      return;
    }
    if (code.length < 6) {
      toast.error('Invalid code', {
        description: 'Please enter the full verification code.',
      });
      return;
    }

    try {
      // Construct the payload to match the API expectation
      await verifyOTP({
        mobileNumber: identifier,
        verificationCode: code,
        role: role || 'vendor', // Use the role from params, with a fallback
      });
      toast.success('Verification successful!');

      // Navigate to the next step based on the flow
      if (fromScreen === 'register') {
        router.push('/auth/take-photo');
      } else {
        // For sign-in, the root layout will handle the redirect
        // to the main app stack automatically.
      }
    } catch (err: any) {
      const errorMessage =
        err?.response?.data?.error ||            // Handles logic errors (e.g., "Invalid verification code")
        err?.response?.data?.errors?.[0]?.msg || // Handles validation errors (e.g., "Verification code must be 6 digits")
        err?.response?.data?.message ||          // Handles generic messages (fallback)
        'An unexpected error occurred during verification.';

      toast.error(errorMessage);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleResend = () => {
    if (resendCooldown > 0 || !phone) return;

    // Reset OTP inputs and force re-mount of OTPInput to focus the first field
    setOtp(['', '', '', '', '', '']);
    setOtpKey((prevKey) => prevKey + 1);

    resendOTP({ identifier: phone, role })
      .then(() => {
        toast.success('Code resent', {
          description: 'We sent you a new verification code.',
        });
        setResendCooldown(60);
      })
      .catch((err) => {
        console.error('resend code error', err);
        const msg =
          (err as any)?.response?.data?.message ??
          (err as any)?.message ??
          'Unable to resend code. Please try again.';
        toast.error('Resend failed', { description: String(msg) });
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <View style={styles.backButtonCircle}>
            <AntDesign name="left" size={18} color="#100A37" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Title and Description */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.description}>
            Enter the 6-digit verification code we just sent to your phone number{' '}
            <Text style={styles.identifierText}>{phone}</Text>
          </Text>
        </View>

        {/* OTP Input */}
        <OTPInput
          key={otpKey}
          length={6}
          value={otp}
          onChange={setOtp}
          style={styles.otpContainer}
        />
        {/* Verify Button */}
        <TouchableOpacity 
          style={[styles.verifyButton, state.isLoading && styles.disabledButton]} 
          onPress={handleVerify} 
          disabled={state.isLoading}
        >
          {state.isLoading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.verifyButtonText}>Verify</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Resend Section */}
      <View style={styles.resendSection}>
        <Text style={styles.resendText}>Didn&apos;t receive a code? </Text>
        <TouchableOpacity onPress={handleResend} disabled={resendCooldown > 0}>
          <Text style={[styles.resendLink, resendCooldown > 0 && styles.disabledLink]}>
            {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    gap: 12,
  },
  backButton: {
    padding: 6,
  },
  backButtonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Raleway',
    color: '#000',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginBottom: 28,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Raleway',
    color: '#2B2829',
    lineHeight: 32,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    color: '#2B2829',
    letterSpacing: 0.7,
    lineHeight: 20,
  },
  identifierText: {
    fontWeight: 'bold',
    color: '#000',
  },
  otpContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  verifyButton: {
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 14,
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway',
    color: '#FFF',
  },
  resendSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 4,
  },
  resendText: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    color: '#303651',
    letterSpacing: 0.7,
    lineHeight: 16,
  },
  resendLink: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Open Sans',
    color: '#0085FF',
    letterSpacing: 0.7,
  },
  disabledLink: {
    color: '#A9A9A9',
  },
});
