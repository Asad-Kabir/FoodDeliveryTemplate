/**
 * @file RestaurantCard.tsx
 * @description Restaurant card for lists
 * Used in both Featured (horizontal) and All Restaurants (vertical)
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
import { formatPrice, formatRating } from '@utils/index';

const { width } = Dimensions.get('window');

interface RestaurantCardProps {
  restaurant: Restaurant;
  onPress: (id: string) => void;
  variant?: 'horizontal' | 'vertical';
}

const RestaurantCard = ({
  restaurant,
  onPress,
  variant = 'vertical',
}: RestaurantCardProps) => {
  const isHorizontal = variant === 'horizontal';

  return (
    <TouchableOpacity
      style={[styles.card, isHorizontal ? styles.horizontalCard : styles.verticalCard]}
      onPress={() => onPress(restaurant.id)}
      activeOpacity={0.8}>

      {/* Image */}
      <View style={[styles.imageContainer, isHorizontal ? styles.horizontalImage : styles.verticalImage]}>
        <Image
          source={{ uri: restaurant.image }}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Closed Badge */}
        {!restaurant.isOpen && (
          <View style={styles.closedBadge}>
            <Text style={styles.closedText}>Closed</Text>
          </View>
        )}
        {/* Featured Badge */}
        {restaurant.isFeatured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>⭐ Featured</Text>
          </View>
        )}
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {restaurant.name}
        </Text>
        <Text style={styles.cuisine}>{restaurant.cuisine}</Text>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          {/* Rating */}
          <View style={styles.stat}>
            <AppIcon name="star" size={12} color={Colors.star} />
            <Text style={styles.statText}>{formatRating(restaurant.rating)}</Text>
          </View>

          <Text style={styles.dot}>•</Text>

          {/* Delivery Time */}
          <View style={styles.stat}>
            <AppIcon name="time-outline" size={12} color={Colors.textSecondary} />
            <Text style={styles.statText}>{restaurant.deliveryTime}</Text>
          </View>

          <Text style={styles.dot}>•</Text>

          {/* Delivery Fee */}
          <Text style={styles.statText}>
            {restaurant.deliveryFee === 0
              ? 'Free delivery'
              : `${formatPrice(restaurant.deliveryFee)} delivery`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  horizontalCard: {
    width: width * 0.65,
    marginRight: Spacing.md,
  },
  verticalCard: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  imageContainer: {
    position: 'relative',
  },
  horizontalImage: {
    height: 140,
  },
  verticalImage: {
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closedBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closedText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
  featuredBadge: {
    position: 'absolute',
    top: Spacing.sm,
    left: Spacing.sm,
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  featuredText: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.semiBold,
    color: Colors.textWhite,
  },
  info: {
    padding: Spacing.md,
  },
  name: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  cuisine: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  statText: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  dot: {
    fontSize: FontSize.xs,
    color: Colors.textLight,
  },
});

export default RestaurantCard;