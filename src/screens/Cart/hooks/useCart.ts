/**
 * @file useCart.ts
 * @description Cart screen — now uses Redux store
 */

import { useState } from 'react';
import { DUMMY_RESTAURANTS } from '@constants/index';
import { useAppDispatch, useAppSelector } from '@store/index';
import {
  updateQuantity,
  applyPromo,
  clearCart,
} from '@store/slices/cartSlice';
import {
  selectCartItems,
  selectSubtotal,
  selectDiscount,
  selectRestaurantInfo,
  selectTotalItems,
  selectPromoInfo,
} from '@store/slices/cartSelectors';

const DELIVERY_FEE = 2.99;

const useCart = () => {
  const dispatch = useAppDispatch();
  const [promoInput, setPromoInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redux selectors
  const cartItems = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectSubtotal);
  const discount = useAppSelector(selectDiscount);
  const totalItems = useAppSelector(selectTotalItems);
  const restaurantInfo = useAppSelector(selectRestaurantInfo);
  const promoInfo = useAppSelector(selectPromoInfo);

  const restaurant = DUMMY_RESTAURANTS.find(
    r => r.id === restaurantInfo.restaurantId,
  );

  const deliveryFee = restaurant?.deliveryFee ?? DELIVERY_FEE;
  const total = subtotal + deliveryFee - discount;

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  const handleApplyPromo = () => {
    if (promoInput.toLowerCase() === 'save10') {
      dispatch(applyPromo({ code: 'SAVE10', discount: 0.1 }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const placeOrder = async (onSuccess: () => void) => {
    setIsLoading(true);
    try {
      await new Promise((resolve:any) => setTimeout(resolve, 1500));
      dispatch(clearCart());
      onSuccess();
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
    handleUpdateQuantity,
    handleApplyPromo,
    handleClearCart,
    isLoading,
    placeOrder,
  };
};

export default useCart;