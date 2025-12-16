import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { GoogleSVG } from '@/components/icons/GoogleSVG';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { toast } from '@/lib/toast';
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

  const handleCreateAccount = () => {
    const mobile = phone.trim();
    const emailValue = email.trim();

    if (!name.trim()) {
      toast.error('Name required', {
        description: 'Please enter your full name.',
      });
      return;
    }

    if (!emailValue) {
      toast.error('Email required', {
        description: 'Please enter your email address.',
      });
      return;
    }

    if (!mobile) {
      toast.error('Phone number required', {
        description: 'Please enter your mobile number.',
      });
      return;
    }

    if (mobile.replace(/[^0-9]/g, '').length < 8) {
      toast.error('Invalid phone number', {
        description: 'Please enter a valid mobile number.',
      });
      return;
    }

    setLoading(true);
    auth
      .register(name.trim(), mobile, emailValue)
      .then(() => {
        toast.success('Account created', {
          description: 'We sent you a verification code to complete signup.',
        });
        router.push({ pathname: '/auth/verify', params: { mobileNumber: mobile } });
      })
      .catch((err) => {
        console.error('register error', err);
        const msg =
          (err as any)?.response?.data?.message ??
          (err as any)?.message ??
          'Unable to create account. Please try again.';
        toast.error('Registration failed', { description: String(msg) });
      })
      .finally(() => setLoading(false));
  };

  const handleSignIn = () => {
    router.push('/auth/sign-in');
  };

  const handleSocialLogin = (provider: 'google' | 'facebook' | 'apple') => {
    // Handle social login
    console.log('Social login with:', provider);
  };

  const handlePhoneInput = (text: string) => {
    // Only allow numbers and some formatting characters
    const cleanedText = text.replace(/[^0-9+\-\s()]/g, '');
    setPhone(cleanedText);
  };

  return (
    <SafeAreaView style={styles.container}>
      
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
            <TextInput
              style={styles.textInput}
              placeholder="Phone"
              placeholderTextColor="rgba(111, 115, 128, 0.27)"
              value={phone}
              onChangeText={handlePhoneInput}
              keyboardType="phone-pad"
              autoCapitalize="none"
              textContentType="telephoneNumber"
              editable={!loading}
            />
          </View>




        </View>

        {/* Terms Text */}
        <View style={styles.termsTextContainer}>
          <Text style={styles.termsOnlyText}>
            By continuing, you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text>,{' '}
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
            <Text style={styles.orText}>or sign in with</Text>

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
            </View>

            {/* Sign In Link */}
            <View style={styles.signInSection}>
              <Text style={styles.signInText}>Do you have an account? </Text>
              <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.signInLink}>SIGN IN</Text>
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
  termsTextContainer: {
    paddingHorizontal: 33,
    marginBottom: 19,
  },
  termsOnlyText: {
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
    paddingBottom: 40,
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
