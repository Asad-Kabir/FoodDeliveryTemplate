/**
 * @file HomeHeader.tsx
 * @description Home screen header with location and cart icon
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';

interface HomeHeaderProps {
  onCartPress: () => void;
  cartCount?: number;
}

const HomeHeader = ({ onCartPress, cartCount = 0 }: HomeHeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Location */}
      <View style={styles.locationContainer}>
        <AppIcon name="location" size={18} color={Colors.primary} />
        <View style={styles.locationText}>
          <Text style={styles.deliverTo}>Deliver to</Text>
          <View style={styles.locationRow}>
            <Text style={styles.location}>New York, USA</Text>
            <AppIcon name="chevron-forward" size={14} color={Colors.textPrimary} />
          </View>
        </View>
      </View>

      {/* Cart Button */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={onCartPress}
        activeOpacity={0.8}>
        <AppIcon name="cart-outline" size={22} color={Colors.textPrimary} />
        {cartCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  locationText: {
    marginLeft: 4,
  },
  deliverTo: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  location: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.backgroundGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 9,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
});

export default HomeHeader;