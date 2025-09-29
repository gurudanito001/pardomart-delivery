import TabSelector from '@/components/ui/TabSelector';
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
} from 'react-native';


export default function RegisterScreen() {
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);



  const handleBack = () => {
    router.back();
  };

  const handleCreateAccount = () => {
    router.push('/auth/verify');
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
        {/* Tab Selector */}
        <TabSelector
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

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
              autoCapitalize="words"
            />
          </View>

          {/* Dynamic Email/Phone Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={activeTab === 'email' ? 'Email' : 'Phone'}
              placeholderTextColor="rgba(111, 115, 128, 0.27)"
              value={activeTab === 'email' ? email : phone}
              onChangeText={activeTab === 'email' ? setEmail : handlePhoneInput}
              keyboardType={activeTab === 'email' ? 'email-address' : 'phone-pad'}
              autoCapitalize="none"
              textContentType={activeTab === 'email' ? 'emailAddress' : 'telephoneNumber'}
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
          <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
            <Text style={styles.createButtonText}>Continue</Text>
          </TouchableOpacity>

          {/* Social Login Section */}
          <View style={styles.socialContainer}>
            <Text style={styles.orText}>or sign in with</Text>

            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('google')}
              >
                <GoogleSVG width={24} height={24} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('facebook')}
              >
                <FontAwesome name="facebook" size={24} color="#0085FF" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('apple')}
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
