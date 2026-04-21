/**
 * @file CartItem.tsx
 * @description Single cart item with quantity controls
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { formatPrice } from '@utils/index';
import type { CartItem as CartLine } from '@store/slices/cartSlice';

interface CartItemProps {
  item: CartLine;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
}

const CartItem = ({ item, onUpdateQuantity }: CartItemProps) => {
  const { foodItem, quantity, notes } = item;
  const itemId = foodItem.id;

  return (
    <View style={styles.card}>
      {/* Image */}
      <Image
        source={{ uri: foodItem.image }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Info */}
      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1}>
            {foodItem.name}
          </Text>
          {/* Remove Button */}
          <TouchableOpacity
            onPress={() => onUpdateQuantity(itemId, 0)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <AppIcon name="trash-outline" size={18} color={Colors.error} />
          </TouchableOpacity>
        </View>

        {notes ? (
          <Text style={styles.notes} numberOfLines={1}>
            📝 {notes}
          </Text>
        ) : null}

        <View style={styles.bottomRow}>
          <Text style={styles.price}>
            {formatPrice(foodItem.price * quantity)}
          </Text>

          {/* Quantity Controls */}
          <View style={styles.quantityControl}>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => onUpdateQuantity(itemId, quantity - 1)}>
              <AppIcon
                name={quantity === 1 ? 'trash-outline' : 'remove'}
                size={16}
                color={quantity === 1 ? Colors.error : Colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => onUpdateQuantity(itemId, quantity + 1)}>
              <AppIcon name="add" size={16} color={Colors.primary} />
            </TouchableOpacity>
          </View>
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
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: Spacing.md,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    flex: 1,
    fontSize: FontSize.md,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginRight: Spacing.sm,
  },
  notes: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginTop: 4,
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
  qtyButton: {
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
});

export default CartItem;