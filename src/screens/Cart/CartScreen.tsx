/**
 * @file CartScreen.tsx
 * @description Cart screen with items, promo code and order summary
 * Navigation: Cart -> OrderTracking
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { RootStackParamList } from '@typings/index';
import { formatPrice } from '@utils/index';

// ─── Components ───────────────────────────────────────────
import CartItem from './components/CartItem';
import PromoCode from './components/PromoCode';
import OrderSummary from './components/OrderSummary';
import useCart from './hooks/useCart';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cart'>;
};

const CartScreen = ({ navigation }: Props) => {
  const {
    cartItems,
    restaurant,
    subtotal,
    deliveryFee,
    discount,
    total,
    totalItems,
    promoInput,
    setPromoInput,
    promoInfo,
    handleApplyPromo,
    handleUpdateQuantity,
    isLoading,
    placeOrder,
  } = useCart();

  const handlePlaceOrder = () => {
    placeOrder(() => {
      navigation.navigate('OrderTracking', { orderId: 'ORD-001' });
    });
  };

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <AppIcon name="chevron-back" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Cart</Text>
          <View style={styles.placeholder} />
        </View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🛒</Text>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptySubtitle}>
            Add items from a restaurant to get started
          </Text>
          <TouchableOpacity
            style={styles.browseButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.browseText}>Browse Restaurants</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <AppIcon name="chevron-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          My Cart ({totalItems} items)
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* Restaurant Info */}
        <View style={styles.restaurantBanner}>
          <AppIcon name="restaurant-outline" size={18} color={Colors.primary} />
          <Text style={styles.restaurantName}>{restaurant?.name}</Text>
        </View>

        {/* Cart Items */}
        <View style={styles.section}>
          {cartItems.map(item => (
            <CartItem
              key={item.foodItem.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </View>

        {/* Promo Code */}
        <PromoCode
          value={promoInput}
          onChange={setPromoInput}
          onApply={handleApplyPromo}
          isApplied={promoInfo.isApplied}
        />

        {/* Order Summary */}
        <OrderSummary
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          discount={discount}
          total={total}
        />

        {/* Delivery Address */}
        <View style={styles.addressCard}>
          <View style={styles.addressRow}>
            <AppIcon name="location" size={20} color={Colors.primary} />
            <Text style={styles.addressTitle}>Delivery Address</Text>
          </View>
          <Text style={styles.address}>123 Main Street, New York, USA</Text>
          <TouchableOpacity>
            <Text style={styles.changeAddress}>Change Address</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Place Order Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.orderButton, isLoading && styles.orderButtonDisabled]}
          onPress={handlePlaceOrder}
          disabled={isLoading}
          activeOpacity={0.8}>
          {isLoading ? (
            <ActivityIndicator color={Colors.textWhite} />
          ) : (
            <>
              <Text style={styles.orderButtonText}>Place Order</Text>
              <Text style={styles.orderButtonPrice}>
                {formatPrice(total)}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.backgroundGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: FontSize.xl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  placeholder: {
    width: 40,
  },
  scrollContent: {
    paddingTop: Spacing.md,
    paddingBottom: 100,
  },
  restaurantBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    backgroundColor: Colors.background,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  restaurantName: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  section: {
    marginBottom: Spacing.md,
  },
  addressCard: {
    backgroundColor: Colors.background,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  addressTitle: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  address: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  changeAddress: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.semiBold,
    color: Colors.primary,
  },
  footer: {
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
  orderButton: {
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
  orderButtonDisabled: {
    opacity: 0.7,
  },
  orderButtonText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
  orderButtonPrice: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emptyEmoji: {
    fontSize: 70,
    marginBottom: Spacing.lg,
  },
  emptyTitle: {
    fontSize: FontSize.xxl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  emptySubtitle: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  browseButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  browseText: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
});

export default CartScreen;