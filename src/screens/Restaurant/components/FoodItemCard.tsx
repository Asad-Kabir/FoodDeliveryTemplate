/**
 * @file FoodItemCard.tsx
 * @description Individual food item card with add/remove from cart
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { FoodItem } from '@typings/index';
import { formatPrice } from '@utils/index';

interface FoodItemCardProps {
  item: FoodItem;
  quantity: number;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
}

const FoodItemCard = ({ item, quantity, onAdd, onRemove }: FoodItemCardProps) => {
  return (
    <View style={[styles.card, !item.isAvailable && styles.unavailable]}>
      {/* Food Image */}
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Popular Badge */}
      {item.isPopular && (
        <View style={styles.popularBadge}>
          <Text style={styles.popularText}>🔥 Popular</Text>
        </View>
      )}

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        {/* Price + Cart Controls */}
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{formatPrice(item.price)}</Text>

          {!item.isAvailable ? (
            <Text style={styles.unavailableText}>Unavailable</Text>
          ) : quantity === 0 ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => onAdd(item.id)}
              activeOpacity={0.8}>
              <AppIcon name="add" size={20} color={Colors.textWhite} />
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityControl}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => onRemove(item.id)}>
                <AppIcon name="remove" size={16} color={Colors.primary} />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => onAdd(item.id)}>
                <AppIcon name="add" size={16} color={Colors.primary} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  unavailable: {
    opacity: 0.5,
  },
  image: {
    width: 110,
    height: 110,
  },
  popularBadge: {
    position: 'absolute',
    top: Spacing.xs,
    left: Spacing.xs,
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
  },
  popularText: {
    fontSize: 9,
    fontFamily: FontFamily.semiBold,
    color: Colors.primaryDark,
  },
  info: {
    flex: 1,
    padding: Spacing.md,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  description: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    lineHeight: 16,
    flex: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.sm,
  },
  price: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.primary,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.backgroundGrey,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  quantityButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    minWidth: 16,
    textAlign: 'center',
  },
  unavailableText: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.semiBold,
    color: Colors.error,
  },
});

export default FoodItemCard;