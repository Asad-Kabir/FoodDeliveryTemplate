/**
 * @file typography.ts
 * @description Typography styles using Poppins font family
 */

import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const FontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

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
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  h1: {
    fontSize: FontSize.xxxl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  h2: {
    fontSize: FontSize.xxl,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  h3: {
    fontSize: FontSize.xl,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  body: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textPrimary,
  },
  bodySmall: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  caption: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.regular,
    color: Colors.textLight,
  },
  button: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textWhite,
  },
});