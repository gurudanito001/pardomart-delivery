import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { GoogleSVG } from '@/components/icons/GoogleSVG';
import PhoneInputWithCountry from '@/components/PhoneInputWithCountry';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { toast } from '@/utils/toast';
import auth from '@/services/auth';


export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleCreateAccount = async () => {
    if (!name.trim()) {
      toast.error('Please enter your name.');
      return;
    }
    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }
    if (!phone.trim()) {
      toast.error('Please enter your phone number.');
      return;
    }
    if (!agreedToTerms) {
      toast.error('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setLoading(true);
    try {
      await auth.register(name.trim(), phone.trim(), email.trim());
      toast.success('Registration successful! Please verify your account.');
      router.push({
        pathname: '/auth/verify',
        params: {
          identifier: phone.trim(),
          fromScreen: 'register',
          role: 'delivery_person',
          mobileNumber: phone.trim(),
        },
      });
    } catch (err: any) {
      const errorMessage =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.response?.data?.errors?.[0]?.msg ||
        'An unexpected error occurred during registration.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = () => {
    router.push('/auth/sign-in');
  };

  const handleSocialLogin = (provider: 'google' | 'facebook' | 'apple') => {
    // Handle social login
    console.log('Social login with:', provider);
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
        <Text style={styles.headerTitle}>Sign up</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* Name Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              placeholderTextColor="rgba(111, 115, 128, 0.27)"
              value={name}
              onChangeText={setName}
              editable={!loading}
              autoCapitalize="words"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="rgba(111, 115, 128, 0.27)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="emailAddress"
              editable={!loading}
            />
          </View>

          {/* Phone Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <PhoneInputWithCountry
              value={phone}
              onChangeText={setPhone}
              editable={!loading}
              placeholder="e.g. 801 234 5678"
            />
          </View>
        </View>

        {/* Terms Text */}
        <View style={styles.termsContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setAgreedToTerms(!agreedToTerms)}
          >
            <View style={[styles.checkboxBox, agreedToTerms && styles.checkboxChecked]}>
              {agreedToTerms && <Text style={styles.checkmark}>✓</Text>}
            </View>
          </TouchableOpacity>
          <Text style={styles.termsText}>
            I agree to the{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount} disabled={loading}>
            {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.createButtonText}>Continue</Text>}
          </TouchableOpacity>

          {/* Social Login Section */}
          <View style={styles.socialContainer}>
            {/* <Text style={styles.orText}>or sign in with</Text>

            <View style={styles.socialButtonsContainer}>
                  <TouchableOpacity
                    style={[styles.socialButton, loading ? { opacity: 0.5 } : {}]}
                    onPress={() => !loading && handleSocialLogin('google')}
                    disabled={loading}
                  >
                    <GoogleSVG width={24} height={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.socialButton, loading ? { opacity: 0.5 } : {}]}
                    onPress={() => !loading && handleSocialLogin('facebook')}
                    disabled={loading}
                  >
                    <FontAwesome name="facebook" size={24} color="#0085FF" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.socialButton, loading ? { opacity: 0.5 } : {}]}
                    onPress={() => !loading && handleSocialLogin('apple')}
                    disabled={loading}
                  >
                    <AntDesign name="apple" size={24} color="#2B2829" />
                  </TouchableOpacity>
            </View> */}

            {/* Sign In Link */}
            <View style={styles.signInSection}>
              <Text style={styles.signInText}>Do you have an account? </Text>
              <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.signInLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
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
    gap: 16,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 0,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#2B2829',
    marginBottom: 8,
  },
  textInput: {
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#B4BED4',
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: 'Nunito Sans',
    color: '#6F7380',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginTop: 7,
    paddingHorizontal: 33,
    marginBottom: 24,
  },
  checkbox: {
    marginTop: 2,
  },
  checkboxBox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#B4BED4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#0085FF',
    borderColor: '#0085FF',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  termsText: {
    flex: 1,
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
    gap: 16,
    paddingVertical: 20,
  },
  createButton: {
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
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway',
    color: '#FFF',
  },
  signInSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  signInText: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#888',
    letterSpacing: 0.32,
  },
  signInLink: {
    fontSize: 16,
    fontFamily: 'Raleway',
    fontWeight: '600',
    color: '#0085FF',
    letterSpacing: 0.32,
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
});
