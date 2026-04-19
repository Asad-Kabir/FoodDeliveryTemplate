/**
 * @file SignupScreen.tsx
 * @description Signup screen — Full Name, Email, Password, Confirm Password
 * Navigation: Signup -> MainTabs | Signup -> Login
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { RootStackParamList } from '@typings/index';
import AppIcon from '@components/common/AppIcon';

// ─── Components ───────────────────────────────────────────
import SignupHeader from './components/SignupHeader';
import useSignupForm from './hooks/useSignupForm';

// ─── Reuse InputField from Login ──────────────────────────
import InputField from '../Login/components/InputField';
import SocialButtons from '../Login/components/SocialButtons';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>;
};

const SignupScreen = ({ navigation }: Props) => {
  const {
    form,
    showPassword,
    showConfirmPassword,
    isLoading,
    setIsLoading,
    updateField,
    validateForm,
    togglePassword,
    toggleConfirmPassword,
  } = useSignupForm();

  const handleSignup = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise((resolve:any) => setTimeout(resolve, 1500));
      navigation.replace('MainTabs');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = () => console.log('Google signup');
  const handleApple = () => console.log('Apple signup');

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <AppIcon name="chevron-back" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>

          {/* Header */}
          <SignupHeader />

          {/* Form */}
          <View style={styles.form}>
            <InputField
              label="Full Name"
              value={form.fullName}
              onChangeText={text => updateField('fullName', text)}
              placeholder="Enter your full name"
              error={form.fullNameError}
            />

            <InputField
              label="Email Address"
              value={form.email}
              onChangeText={text => updateField('email', text)}
              placeholder="Enter your email"
              keyboardType="email-address"
              error={form.emailError}
            />

            <InputField
              label="Password"
              value={form.password}
              onChangeText={text => updateField('password', text)}
              placeholder="Create a password"
              secureTextEntry
              showPasswordToggle
              showPassword={showPassword}
              onTogglePassword={togglePassword}
              error={form.passwordError}
            />

            <InputField
              label="Confirm Password"
              value={form.confirmPassword}
              onChangeText={text => updateField('confirmPassword', text)}
              placeholder="Confirm your password"
              secureTextEntry
              showPasswordToggle
              showPassword={showConfirmPassword}
              onTogglePassword={toggleConfirmPassword}
              error={form.confirmPasswordError}
            />

            {/* Signup Button */}
            <TouchableOpacity
              style={[
                styles.signupButton,
                isLoading && styles.buttonDisabled,
              ]}
              onPress={handleSignup}
              activeOpacity={0.8}
              disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color={Colors.textWhite} />
              ) : (
                <Text style={styles.signupButtonText}>Create Account</Text>
              )}
            </TouchableOpacity>

            {/* Social Buttons */}
            <SocialButtons
              onGooglePress={handleGoogle}
              onApplePress={handleApple}
            />
          </View>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Sign In</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  backButton: {
    marginTop: Spacing.sm,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.backgroundGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    marginTop: Spacing.sm,
  },
  signupButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    marginTop: Spacing.sm,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  signupButtonText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  loginText: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  loginLink: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.bold,
    color: Colors.primary,
  },
});

export default SignupScreen;