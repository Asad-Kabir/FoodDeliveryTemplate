/**
 * @file cartSlice.ts
 * @description Global cart state management using Redux Toolkit
 * Handles add, remove, update quantity, clear cart operations
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoodItem } from '@typings/index';

// ─── Types ────────────────────────────────────────────────
export interface CartItem {
  foodItem: FoodItem;
  quantity: number;
  notes: string;
}

export interface CartState {
  items: CartItem[];
  restaurantId: string | null;
  restaurantName: string | null;
  promoCode: string;
  promoDiscount: number;
}

// ─── Initial State ────────────────────────────────────────
const initialState: CartState = {
  items: [],
  restaurantId: null,
  restaurantName: null,
  promoCode: '',
  promoDiscount: 0,
};

// ─── Slice ────────────────────────────────────────────────
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Add item to cart
     * If different restaurant — clear cart first
     */
    addItem: (
      state,
      action: PayloadAction<{
        foodItem: FoodItem;
        restaurantId: string;
        restaurantName: string;
      }>,
    ) => {
      const { foodItem, restaurantId, restaurantName } = action.payload;

      // Different restaurant — clear cart
      if (state.restaurantId && state.restaurantId !== restaurantId) {
        state.items = [];
        state.promoCode = '';
        state.promoDiscount = 0;
      }

      state.restaurantId = restaurantId;
      state.restaurantName = restaurantName;

      const existingItem = state.items.find(
        item => item.foodItem.id === foodItem.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ foodItem, quantity: 1, notes: '' });
      }
    },

    /**
     * Remove one quantity of item
     * If quantity becomes 0 — remove from cart
     */
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        item => item.foodItem.id === action.payload,
      );
      if (index === -1) return;

      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity -= 1;
      }

      // Clear restaurant if cart empty
      if (state.items.length === 0) {
        state.restaurantId = null;
        state.restaurantName = null;
      }
    },

    /**
     * Update item quantity directly
     */
    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: string; quantity: number }>,
    ) => {
      const { itemId, quantity } = action.payload;
      const index = state.items.findIndex(
        item => item.foodItem.id === itemId,
      );
      if (index === -1) return;

      if (quantity === 0) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity = quantity;
      }

      if (state.items.length === 0) {
        state.restaurantId = null;
        state.restaurantName = null;
      }
    },

    /**
     * Update item notes
     */
    updateNotes: (
      state,
      action: PayloadAction<{ itemId: string; notes: string }>,
    ) => {
      const item = state.items.find(
        i => i.foodItem.id === action.payload.itemId,
      );
      if (item) {
        item.notes = action.payload.notes;
      }
    },

    /**
     * Apply promo code
     */
    applyPromo: (
      state,
      action: PayloadAction<{ code: string; discount: number }>,
    ) => {
      state.promoCode = action.payload.code;
      state.promoDiscount = action.payload.discount;
    },

    /**
     * Clear entire cart
     */
    clearCart: state => {
      state.items = [];
      state.restaurantId = null;
      state.restaurantName = null;
      state.promoCode = '';
      state.promoDiscount = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  updateNotes,
  applyPromo,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;