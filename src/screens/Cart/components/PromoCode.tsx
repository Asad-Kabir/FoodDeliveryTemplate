/**
 * @file PromoCode.tsx
 * @description Promo code input component
 * Test code: SAVE10 (10% discount)
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';

interface PromoCodeProps {
  value: string;
  onChange: (text: string) => void;
  onApply: () => void;
  isApplied: boolean;
}

const PromoCode = ({ value, onChange, onApply, isApplied }: PromoCodeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppIcon name="pricetag-outline" size={20} color={Colors.primary} />
        <Text style={styles.title}>Promo Code</Text>
      </View>

      {isApplied ? (
        <View style={styles.appliedContainer}>
          <AppIcon name="checkmark-circle" size={20} color={Colors.success} />
          <Text style={styles.appliedText}>
            "SAVE10" applied — 10% off!
          </Text>
        </View>
      ) : (
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder="Enter promo code"
            placeholderTextColor={Colors.textLight}
            autoCapitalize="characters"
          />
          <TouchableOpacity
            style={[styles.applyButton, !value && styles.applyButtonDisabled]}
            onPress={onApply}
            disabled={!value}
            activeOpacity={0.8}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  inputRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  input: {
    flex: 1,
    height: 46,
    backgroundColor: Colors.backgroundGrey,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textPrimary,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  applyButton: {
    paddingHorizontal: Spacing.lg,
    height: 46,
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonDisabled: {
    backgroundColor: Colors.textLight,
  },
  applyText: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textWhite,
  },
  appliedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.backgroundGrey,
    padding: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  appliedText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.semiBold,
    color: Colors.success,
  },
});

export default PromoCode;