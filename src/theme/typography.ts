/**
 * @file typography.ts
 * @description Typography styles for the app
 * Usage: import { Typography } from '@theme/typography'
 */

import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const FontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 22,
  xxxl: 28,
  display: 34,
} as const;

export const FontWeight = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

export const Typography = StyleSheet.create({
  displayBold: {
    fontSize: FontSize.display,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
  },
  h1: {
    fontSize: FontSize.xxxl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
  },
  h2: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.semiBold,
    color: Colors.textPrimary,
  },
  h3: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.semiBold,
    color: Colors.textPrimary,
  },
  body: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.regular,
    color: Colors.textPrimary,
  },
  bodySmall: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    color: Colors.textSecondary,
  },
  caption: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.regular,
    color: Colors.textLight,
  },
  button: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semiBold,
    color: Colors.textWhite,
  },
});