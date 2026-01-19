import { GoogleSVG } from '@/components/icons/GoogleSVG';
import PhoneInputWithCountry from '@/components/PhoneInputWithCountry';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { toast } from '@/utils/toast';
import auth from '@/services/auth';


export default function SignInScreen() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);




  
  const handleBack = () => {
    router.back();
  };

  const handleContinue = async () => {
    const value = phone.trim();

    // Basic phone validation
    if (!value) {
      toast.error('Phone number required', {
        description: 'Please enter your mobile number to continue.',
      });
      return;
    }
    if (value.replace(/[^0-9]/g, '').length < 8) {
      toast.error('Invalid phone number', {
        description: 'Please enter a valid mobile number.',
      });
      return;
    }

    setLoading(true);
    try {
      const response = await auth.initiateLogin(value, 'delivery_person');
      toast.success('Code sent', {
        description: 'We sent a verification code to your phone.',
      });
      router.push({
        pathname: '/auth/verify',
        params: { identifier: value, role: response?.role, mobileNumber: value },
      });
    } catch (err) {
      console.error('initiateLogin error', err);
      const msg =
        (err as any)?.response?.data?.message ??
        (err as any)?.message ??
        'Unable to initiate login. Please try again.';
      toast.error('Sign in failed', { description: String(msg) });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    router.push('/auth/register');
  };

  const handleSocialLogin = (provider: 'google' | 'facebook' | 'apple') => {
    // Handle social login
    console.log('Social login with:', provider);
  };

  const SocialButton = ({ provider }: { provider: 'google' | 'facebook' | 'apple' }) => {
    const renderIcon = () => {
      switch (provider) {
        case 'google':
          return <GoogleSVG width={24} height={24} />;
        case 'facebook':
          return <FontAwesome name="facebook" size={24} color="#0085FF" />;
        case 'apple':
          return <AntDesign name="apple" size={24} color="#2B2829" />;
        default: return null;
      }
    };

    return (
      <TouchableOpacity
        style={[styles.socialButton, loading ? { opacity: 0.5 } : {}]}
        onPress={() => !loading && handleSocialLogin(provider)}
        disabled={loading}
      >
        {renderIcon()}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <View style={styles.backButtonCircle}>
            <AntDesign name="left" size={18} color="#100A37" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign in</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Phone Number Input */}
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <PhoneInputWithCountry
            value={phone}
            onChangeText={setPhone}
            editable={!loading}
            placeholder="e.g. +1 801 234 5678"
            autoFocus
          />
        </View>

        {/* Terms Text */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing, you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text>,{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.continueButtonText}>Continue</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Social Login Section */}
        <View style={styles.socialContainer}>
          <Text style={styles.orText}>or sign in with</Text>
          
          <View style={styles.socialButtonsContainer}>
            <SocialButton provider="google" />
            <SocialButton provider="facebook" />
            <SocialButton provider="apple" />
          </View>
          
          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don&apos;t have an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingHorizontal: 21,
    paddingTop: 14,
    gap: 12,
    height: 50,
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
  scrollView: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 33,
    paddingTop: 35,
    marginBottom: 27,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#2B2829',
    marginBottom: 8,
  },
  termsContainer: {
    paddingHorizontal: 33,
    marginBottom: 19,
  },
  termsText: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#7C7B7B',
    lineHeight: 24,
  },
  linkText: {
    color: '#0085FF',
    fontWeight: '700',
  },
  buttonContainer: {
    paddingHorizontal: 33,
    marginBottom: 42,
  },
  continueButton: {
    backgroundColor: '#0085FF',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway',
    color: '#FFF',
  },
  socialContainer: {
    paddingHorizontal: 33,
    alignItems: 'center',
    gap: 27,
    paddingBottom: 60,
  },
  orText: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#888',
    textAlign: 'center',
    letterSpacing: 0.32,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    width: '100%',
  },
  socialButton: {
    width: 86,
    height: 42,
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  signUpText: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#888',
    letterSpacing: 0.32,
  },
  signUpLink: {
    fontSize: 16,
    fontFamily: 'Raleway',
    fontWeight: '600',
    color: '#0085FF',
    letterSpacing: 0.32,
  },
});
