/**
 * @file LoginHeader.tsx
 * @description Login screen header with logo and title
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@theme/colors';
import { Spacing } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🍔</Text>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Sign in to continue ordering</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  emoji: {
    fontSize: 60,
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: FontSize.xxxl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
});

export default LoginHeader;