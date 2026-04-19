/**
 * @file SocialButtons.tsx
 * @description Google and Apple social login buttons
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';

interface SocialButtonsProps {
  onGooglePress: () => void;
  onApplePress: () => void;
}

const SocialButtons = ({ onGooglePress, onApplePress }: SocialButtonsProps) => {
  return (
    <View style={styles.container}>
      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsRow}>
        {/* Google */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={onGooglePress}
          activeOpacity={0.8}>
          <AppIcon name="logo-google" size={20} color="#DB4437" />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        {/* Apple — iOS only */}
        {Platform.OS === 'ios' && (
          <TouchableOpacity
            style={styles.appleButton}
            onPress={onApplePress}
            activeOpacity={0.8}>
            <AppIcon name="logo-apple" size={20} color={Colors.textWhite} />
            <Text style={styles.appleText}>Apple</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.sm,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.lg,
    gap: Spacing.sm,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  googleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
    backgroundColor: Colors.backgroundGrey,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  googleText: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  appleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
    backgroundColor: Colors.textPrimary,
    borderWidth: 1.5,
    borderColor: Colors.textPrimary,
  },
  appleText: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textWhite,
  },
});

export default SocialButtons;