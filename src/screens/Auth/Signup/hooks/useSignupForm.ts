/**
 * @file useSignupForm.ts
 * @description Signup form state & validation logic
 */

import { useState, useCallback } from 'react';

interface FormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullNameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
}

const validateFullName = (name: string): string => {
  if (!name) return 'Full name is required';
  if (name.length < 3) return 'Name must be at least 3 characters';
  return '';
};

const validateEmail = (email: string): string => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Enter a valid email address';
  return '';
};

const validatePassword = (password: string): string => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return '';
};

const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string => {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return '';
};

const useSignupForm = () => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateField = useCallback(
    (field: keyof FormState, value: string) => {
      setForm(prev => ({ ...prev, [field]: value }));
    },
    [],
  );

  const validateForm = (): boolean => {
    const fullNameError = validateFullName(form.fullName);
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    const confirmPasswordError = validateConfirmPassword(
      form.password,
      form.confirmPassword,
    );
    setForm(prev => ({
      ...prev,
      fullNameError,
      emailError,
      passwordError,
      confirmPasswordError,
    }));
    return !fullNameError && !emailError && !passwordError && !confirmPasswordError;
  };

  return {
    form,
    showPassword,
    showConfirmPassword,
    isLoading,
    setIsLoading,
    updateField,
    validateForm,
    togglePassword: () => setShowPassword(prev => !prev),
    toggleConfirmPassword: () => setShowConfirmPassword(prev => !prev),
  };
};

export default useSignupForm;