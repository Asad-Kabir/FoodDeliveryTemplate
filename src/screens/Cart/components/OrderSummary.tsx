/**
 * @file OrderSummary.tsx
 * @description Order price breakdown component
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { formatPrice } from '@utils/index';

interface OrderSummaryProps {
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

const Row = ({
  label,
  value,
  isTotal,
  isDiscount,
}: {
  label: string;
  value: string;
  isTotal?: boolean;
  isDiscount?: boolean;
}) => (
  <View style={styles.row}>
    <Text style={[styles.label, isTotal && styles.totalLabel]}>{label}</Text>
    <Text
      style={[
        styles.value,
        isTotal && styles.totalValue,
        isDiscount && styles.discountValue,
      ]}>
      {value}
    </Text>
  </View>
);

const OrderSummary = ({
  subtotal,
  deliveryFee,
  discount,
  total,
}: OrderSummaryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>

      <Row label="Subtotal" value={formatPrice(subtotal)} />
      <Row label="Delivery Fee" value={formatPrice(deliveryFee)} />

      {discount > 0 && (
        <Row
          label="Promo Discount"
          value={`-${formatPrice(discount)}`}
          isDiscount
        />
      )}

      <View style={styles.divider} />

      <Row label="Total" value={formatPrice(total)} isTotal />
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
  title: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  label: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  value: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  totalLabel: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  totalValue: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.primary,
  },
  discountValue: {
    color: Colors.success,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.sm,
  },
});

export default OrderSummary;