// /**
//  * @file LoginScreen.tsx
//  * @description Login screen with email/password + Google + Apple sign in
//  * Navigation: Login -> MainTabs | Login -> Signup | Login -> ForgotPassword
//  */

// import React, { useState, useCallback } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   ActivityIndicator,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { Colors } from '@theme/colors';
// import { Spacing, BorderRadius } from '@theme/spacing';
// import { FontSize, FontFamily } from '@theme/typography';
// import { RootStackParamList } from '@typings/index';
// import AppIcon from '@components/common/AppIcon';

// // ─── Types ────────────────────────────────────────────────
// type Props = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
// };

// interface FormState {
//   email: string;
//   password: string;
//   emailError: string;
//   passwordError: string;
// }

// // ─── Validation ───────────────────────────────────────────
// const validateEmail = (email: string): string => {
//   if (!email) return 'Email is required';
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) return 'Enter a valid email address';
//   return '';
// };

// const validatePassword = (password: string): string => {
//   if (!password) return 'Password is required';
//   if (password.length < 6) return 'Password must be at least 6 characters';
//   return '';
// };

// // ─── Social Button Component ──────────────────────────────
// /**
//  * Reusable social login button
//  */
// const SocialButton = ({
//   label,
//   iconName,
//   onPress,
//   backgroundColor,
//   textColor,
// }: {
//   label: string;
//   iconName: any;
//   onPress: () => void;
//   backgroundColor: string;
//   textColor: string;
// }) => (
//   <TouchableOpacity
//     style={[styles.socialButton, { backgroundColor }]}
//     onPress={onPress}
//     activeOpacity={0.8}>
//     <AppIcon name={iconName} size={20} color={textColor} />
//     <Text style={[styles.socialButtonText, { color: textColor }]}>{label}</Text>
//   </TouchableOpacity>
// );

// // ─── Input Component ──────────────────────────────────────
// /**
//  * Reusable input field with error handling
//  */
// const InputField = ({
//   label,
//   value,
//   onChangeText,
//   placeholder,
//   secureTextEntry,
//   error,
//   keyboardType,
//   showPasswordToggle,
//   onTogglePassword,
//   showPassword,
// }: {
//   label: string;
//   value: string;
//   onChangeText: (text: string) => void;
//   placeholder: string;
//   secureTextEntry?: boolean;
//   error?: string;
//   keyboardType?: any;
//   showPasswordToggle?: boolean;
//   onTogglePassword?: () => void;
//   showPassword?: boolean;
// }) => (
//   <View style={styles.inputWrapper}>
//     <Text style={styles.inputLabel}>{label}</Text>
//     <View style={[styles.inputContainer, error ? styles.inputError : null]}>
//       <TextInput
//         style={styles.input}
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         placeholderTextColor={Colors.textLight}
//         secureTextEntry={secureTextEntry && !showPassword}
//         keyboardType={keyboardType || 'default'}
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//       {showPasswordToggle && (
//         <TouchableOpacity onPress={onTogglePassword} style={styles.eyeButton}>
//           <AppIcon
//             name={showPassword ? 'eye-off' : 'eye'}
//             size={20}
//             color={Colors.textLight}
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//     {error ? <Text style={styles.errorText}>{error}</Text> : null}
//   </View>
// );

// // ─── Main Screen ──────────────────────────────────────────
// const LoginScreen = ({ navigation }: Props) => {
//   const [form, setForm] = useState<FormState>({
//     email: '',
//     password: '',
//     emailError: '',
//     passwordError: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // Update form field
//   const updateField = useCallback((field: keyof FormState, value: string) => {
//     setForm(prev => ({ ...prev, [field]: value }));
//   }, []);

//   // Validate form
//   const validateForm = (): boolean => {
//     const emailError = validateEmail(form.email);
//     const passwordError = validatePassword(form.password);
//     setForm(prev => ({ ...prev, emailError, passwordError }));
//     return !emailError && !passwordError;
//   };

//   // Handle login
//   const handleLogin = async () => {
//     if (!validateForm()) return;
//     setIsLoading(true);
//     try {
//       // TODO: Add your API call here
//       await new Promise((resolve:any) => setTimeout(resolve, 1500));
//       navigation.replace('MainTabs');
//     } catch (error) {
//       console.error('Login error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle Google login
//   const handleGoogleLogin = async () => {
//     try {
//       // TODO: Add Google Sign In
//       console.log('Google login');
//     } catch (error) {
//       console.error('Google login error:', error);
//     }
//   };

//   // Handle Apple login
//   const handleAppleLogin = async () => {
//     try {
//       // TODO: Add Apple Sign In
//       console.log('Apple login');
//     } catch (error) {
//       console.error('Apple login error:', error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
//       <KeyboardAvoidingView
//         style={styles.flex}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//           keyboardShouldPersistTaps="handled">

//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={styles.emoji}>🍔</Text>
//             <Text style={styles.title}>Welcome Back!</Text>
//             <Text style={styles.subtitle}>Sign in to continue ordering</Text>
//           </View>

//           {/* Form */}
//           <View style={styles.form}>
//             <InputField
//               label="Email Address"
//               value={form.email}
//               onChangeText={text => updateField('email', text)}
//               placeholder="Enter your email"
//               keyboardType="email-address"
//               error={form.emailError}
//             />

//             <InputField
//               label="Password"
//               value={form.password}
//               onChangeText={text => updateField('password', text)}
//               placeholder="Enter your password"
//               secureTextEntry
//               showPasswordToggle
//               showPassword={showPassword}
//               onTogglePassword={() => setShowPassword(prev => !prev)}
//               error={form.passwordError}
//             />

//             {/* Forgot Password */}
//             <TouchableOpacity
//               style={styles.forgotButton}
//               onPress={() => console.log('Forgot password')}>
//               <Text style={styles.forgotText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             {/* Login Button */}
//             <TouchableOpacity
//               style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
//               onPress={handleLogin}
//               activeOpacity={0.8}
//               disabled={isLoading}>
//               {isLoading ? (
//                 <ActivityIndicator color={Colors.textWhite} />
//               ) : (
//                 <Text style={styles.loginButtonText}>Sign In</Text>
//               )}
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.dividerContainer}>
//               <View style={styles.dividerLine} />
//               <Text style={styles.dividerText}>or continue with</Text>
//               <View style={styles.dividerLine} />
//             </View>

//             {/* Social Buttons */}
//             <View style={styles.socialContainer}>
//               <SocialButton
//                 label="Google"
//                 iconName="search"
//                 onPress={handleGoogleLogin}
//                 backgroundColor={Colors.backgroundGrey}
//                 textColor={Colors.textPrimary}
//               />
//               {Platform.OS === 'ios' && (
//                 <SocialButton
//                   label="Apple"
//                   iconName="close"
//                   onPress={handleAppleLogin}
//                   backgroundColor={Colors.textPrimary}
//                   textColor={Colors.textWhite}
//                 />
//               )}
//             </View>
//           </View>

//           {/* Sign Up Link */}
//           <View style={styles.signupContainer}>
//             <Text style={styles.signupText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//               <Text style={styles.signupLink}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>

//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// // ─── Styles ───────────────────────────────────────────────
// const styles = StyleSheet.create({
//   flex: { flex: 1 },
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingHorizontal: Spacing.lg,
//     paddingBottom: Spacing.xl,
//   },
//   header: {
//     alignItems: 'center',
//     paddingTop: Spacing.xl,
//     paddingBottom: Spacing.lg,
//   },
//   emoji: {
//     fontSize: 60,
//     marginBottom: Spacing.md,
//   },
//   title: {
//     fontSize: FontSize.xxxl,
//     fontFamily: FontFamily.bold,
//     color: Colors.textPrimary,
//     marginBottom: Spacing.xs,
//   },
//   subtitle: {
//     fontSize: FontSize.md,
//     fontFamily: FontFamily.regular,
//     color: Colors.textSecondary,
//   },
//   form: {
//     flex: 1,
//     marginTop: Spacing.md,
//   },
//   inputWrapper: {
//     marginBottom: Spacing.md,
//   },
//   inputLabel: {
//     fontSize: FontSize.sm,
//     fontFamily: FontFamily.semiBold,
//     color: Colors.textPrimary,
//     marginBottom: Spacing.xs,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: Colors.backgroundGrey,
//     borderRadius: BorderRadius.md,
//     borderWidth: 1.5,
//     borderColor: Colors.border,
//     paddingHorizontal: Spacing.md,
//   },
//   inputError: {
//     borderColor: Colors.error,
//   },
//   input: {
//     flex: 1,
//     height: 52,
//     fontSize: FontSize.md,
//     fontFamily: FontFamily.regular,
//     color: Colors.textPrimary,
//   },
//   eyeButton: {
//     padding: Spacing.xs,
//   },
//   errorText: {
//     fontSize: FontSize.xs,
//     fontFamily: FontFamily.regular,
//     color: Colors.error,
//     marginTop: 4,
//   },
//   forgotButton: {
//     alignSelf: 'flex-end',
//     marginBottom: Spacing.lg,
//   },
//   forgotText: {
//     fontSize: FontSize.sm,
//     fontFamily: FontFamily.semiBold,
//     color: Colors.primary,
//   },
//   loginButton: {
//     backgroundColor: Colors.primary,
//     paddingVertical: Spacing.md,
//     borderRadius: BorderRadius.lg,
//     alignItems: 'center',
//     shadowColor: Colors.primary,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   loginButtonDisabled: {
//     opacity: 0.7,
//   },
//   loginButtonText: {
//     fontSize: FontSize.lg,
//     fontFamily: FontFamily.bold,
//     color: Colors.textWhite,
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: Spacing.lg,
//     gap: Spacing.sm,
//   },
//   dividerLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: Colors.border,
//   },
//   dividerText: {
//     fontSize: FontSize.sm,
//     fontFamily: FontFamily.regular,
//     color: Colors.textSecondary,
//   },
//   socialContainer: {
//     flexDirection: 'row',
//     gap: Spacing.md,
//   },
//   socialButton: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: Spacing.md,
//     borderRadius: BorderRadius.md,
//     gap: Spacing.sm,
//     borderWidth: 1.5,
//     borderColor: Colors.border,
//   },
//   socialButtonText: {
//     fontSize: FontSize.md,
//     fontFamily: FontFamily.semiBold,
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: Spacing.xl,
//   },
//   signupText: {
//     fontSize: FontSize.md,
//     fontFamily: FontFamily.regular,
//     color: Colors.textSecondary,
//   },
//   signupLink: {
//     fontSize: FontSize.md,
//     fontFamily: FontFamily.bold,
//     color: Colors.primary,
//   },
// });

// export default LoginScreen;


/**
 * @file LoginScreen.tsx
 * @description Login screen — Email/Password + Google + Apple
 * Navigation: Login -> MainTabs | Login -> Signup
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

// ─── Components ───────────────────────────────────────────
import LoginHeader from './components/LoginHeader';
import InputField from './components/InputField';
import SocialButtons from './components/SocialButtons';
import useLoginForm from './hooks/useLoginForm';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen = ({ navigation }: Props) => {
  const {
    form,
    showPassword,
    isLoading,
    setIsLoading,
    updateField,
    validateForm,
    togglePassword,
  } = useLoginForm();

  const handleLogin = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise((resolve:any) => setTimeout(resolve, 1500));
      navigation.replace('MainTabs');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    // TODO: Google Sign In
    console.log('Google login');
  };

  const handleApple = async () => {
    // TODO: Apple Sign In
    console.log('Apple login');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          {/* Header */}
          <LoginHeader />

          {/* Form */}
          <View style={styles.form}>
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
              placeholder="Enter your password"
              secureTextEntry
              showPasswordToggle
              showPassword={showPassword}
              onTogglePassword={togglePassword}
              error={form.passwordError}
            />

            {/* Forgot Password */}
            <TouchableOpacity
              style={styles.forgotButton}
              onPress={() => console.log('Forgot')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={[
                styles.loginButton,
                isLoading && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              activeOpacity={0.8}
              disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color={Colors.textWhite} />
              ) : (
                <Text style={styles.loginButtonText}>Sign In</Text>
              )}
            </TouchableOpacity>

            {/* Social Buttons */}
            <SocialButtons
              onGooglePress={handleGoogle}
              onApplePress={handleApple}
            />
          </View>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signupLink}>Sign Up</Text>
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
  form: {
    flex: 1,
    marginTop: Spacing.md,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: Spacing.lg,
  },
  forgotText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.semiBold,
    color: Colors.primary,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  signupText: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  signupLink: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.bold,
    color: Colors.primary,
  },
});

export default LoginScreen;