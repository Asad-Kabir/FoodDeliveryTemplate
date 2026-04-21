/**
 * @file cartSelectors.ts
 * @description Memoized selectors for cart state
 * Usage: const totalItems = useAppSelector(selectTotalItems);
 */

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/index';

const selectCartState = (state: RootState) => state.cart;

/** Total number of items in cart */
export const selectTotalItems = createSelector(
  selectCartState,
  cart => cart.items.reduce((sum, item) => sum + item.quantity, 0),
);

/** All cart items */
export const selectCartItems = createSelector(
  selectCartState,
  cart => cart.items,
);

/** Cart subtotal */
export const selectSubtotal = createSelector(selectCartState, cart =>
  cart.items.reduce(
    (total, item) => total + item.foodItem.price * item.quantity,
    0,
  ),
);

/** Promo discount amount */
export const selectDiscount = createSelector(selectCartState, cart =>
  cart.promoDiscount > 0
    ? cart.items.reduce(
        (total, item) => total + item.foodItem.price * item.quantity,
        0,
      ) * cart.promoDiscount
    : 0,
);

/** Restaurant info */
export const selectRestaurantInfo = createSelector(selectCartState, cart => ({
  restaurantId: cart.restaurantId,
  restaurantName: cart.restaurantName,
}));

/** Get quantity of specific item */
export const selectItemQuantity = (itemId: string) =>
  createSelector(selectCartState, cart => {
    const item = cart.items.find(i => i.foodItem.id === itemId);
    return item ? item.quantity : 0;
  });

/** Promo code info */
export const selectPromoInfo = createSelector(selectCartState, cart => ({
  code: cart.promoCode,
  discount: cart.promoDiscount,
  isApplied: cart.promoDiscount > 0,
}));