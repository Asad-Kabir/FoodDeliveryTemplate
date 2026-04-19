/**
 * @file useRestaurantDetail.ts
 * @description Restaurant detail screen data & state
 */

import { useState, useMemo } from 'react';
import { DUMMY_RESTAURANTS, DUMMY_FOOD_ITEMS } from '@constants/index';
import { FoodItem } from '@typings/index';

const useRestaurantDetail = (restaurantId: string) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});

  // Find restaurant
  const restaurant = DUMMY_RESTAURANTS.find(r => r.id === restaurantId);

  // Get food items for this restaurant
  const foodItems = DUMMY_FOOD_ITEMS.filter(
    item => item.restaurantId === restaurantId,
  );

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(foodItems.map(item => item.category))];
    return ['All', ...cats];
  }, [foodItems]);

  // Filter by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return foodItems;
    return foodItems.filter(item => item.category === selectedCategory);
  }, [foodItems, selectedCategory]);

  // Cart functions
  const addToCart = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => {
      if (!prev[itemId] || prev[itemId] === 0) return prev;
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const totalCartItems = Object.values(cartItems).reduce((a, b) => a + b, 0);

  const totalCartPrice = Object.entries(cartItems).reduce((total, [id, qty]) => {
    const item = foodItems.find(f => f.id === id);
    return total + (item ? item.price * qty : 0);
  }, 0);

  return {
    restaurant,
    categories,
    filteredItems,
    selectedCategory,
    setSelectedCategory,
    cartItems,
    addToCart,
    removeFromCart,
    totalCartItems,
    totalCartPrice,
  };
};

export default useRestaurantDetail;