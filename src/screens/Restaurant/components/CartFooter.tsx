/**
 * @file CartFooter.tsx
 * @description Sticky cart footer shown when items are added
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { formatPrice } from '@utils/index';

interface CartFooterProps {
  itemCount: number;
  totalPrice: number;
  onPress: () => void;
}

const CartFooter = ({ itemCount, totalPrice, onPress }: CartFooterProps) => {
  if (itemCount === 0) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8}>
        {/* Item Count Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>

        <Text style={styles.buttonText}>View Cart</Text>

        <Text style={styles.price}>{formatPrice(totalPrice)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    paddingBottom: Spacing.xl,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  badge: {
    backgroundColor: Colors.primaryDark,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
  buttonText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
  price: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
});

export default CartFooter;