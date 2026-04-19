/**
 * @file RestaurantHeader.tsx
 * @description Restaurant hero image with back button and info overlay
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { Restaurant } from '@typings/index';
import { formatRating } from '@utils/index';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = width * 0.65;

interface RestaurantHeaderProps {
  restaurant: Restaurant;
  onBack: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

const RestaurantHeader = ({
  restaurant,
  onBack,
  onFavorite,
  isFavorite,
}: RestaurantHeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Hero Image */}
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Overlay */}
      <View style={styles.overlay} />

      {/* Top Buttons */}
      <View style={styles.topButtons}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onBack}
          activeOpacity={0.8}>
          <AppIcon name="chevron-back" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={onFavorite}
          activeOpacity={0.8}>
          <AppIcon
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={22}
            color={isFavorite ? Colors.error : Colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      {/* Restaurant Info Card */}
      <View style={styles.infoCard}>
        {/* Name & Status */}
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1}>
            {restaurant.name}
          </Text>
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor: restaurant.isOpen
                  ? Colors.success
                  : Colors.error,
              },
            ]}>
            <Text style={styles.statusText}>
              {restaurant.isOpen ? 'Open' : 'Closed'}
            </Text>
          </View>
        </View>

        <Text style={styles.cuisine}>{restaurant.cuisine} Cuisine</Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          {/* Rating */}
          <View style={styles.stat}>
            <AppIcon name="star" size={14} color={Colors.star} />
            <Text style={styles.statValue}>{formatRating(restaurant.rating)}</Text>
            <Text style={styles.statLabel}>({restaurant.reviewCount}+)</Text>
          </View>

          <View style={styles.divider} />

          {/* Delivery Time */}
          <View style={styles.stat}>
            <AppIcon name="time-outline" size={14} color={Colors.primary} />
            <Text style={styles.statValue}>{restaurant.deliveryTime}</Text>
          </View>

          <View style={styles.divider} />

          {/* Delivery Fee */}
          <View style={styles.stat}>
            <AppIcon name="bicycle-outline" size={14} color={Colors.primary} />
            <Text style={styles.statValue}>
              {restaurant.deliveryFee === 0
                ? 'Free'
                : `$${restaurant.deliveryFee}`}
            </Text>
            <Text style={styles.statLabel}>delivery</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT + 80,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: HEADER_HEIGHT,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  topButtons: {
    position: 'absolute',
    top: Spacing.md,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  infoCard: {
    position: 'absolute',
    bottom: 0,
    left: Spacing.lg,
    right: Spacing.lg,
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    flex: 1,
    fontSize: FontSize.xl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginRight: Spacing.sm,
  },
  statusBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
  },
  statusText: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.semiBold,
    color: Colors.textWhite,
  },
  cuisine: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  statLabel: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  divider: {
    width: 1,
    height: 16,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing.md,
  },
});

export default RestaurantHeader;