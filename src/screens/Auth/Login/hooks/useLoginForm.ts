/**
 * @file useLoginForm.ts
 * @description Login form state & validation logic
 */

import { useState, useCallback } from 'react';

interface FormState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}

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

const useLoginForm = () => {
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateField = useCallback(
    (field: keyof FormState, value: string) => {
      setForm(prev => ({ ...prev, [field]: value }));
    },
    [],
  );

  const validateForm = (): boolean => {
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    setForm(prev => ({ ...prev, emailError, passwordError }));
    return !emailError && !passwordError;
  };

  const togglePassword = () => setShowPassword(prev => !prev);

  return {
    form,
    showPassword,
    isLoading,
    setIsLoading,
    updateField,
    validateForm,
    togglePassword,
  };
};

export default useLoginForm;