/**
 * @file useRestaurantDetail.ts
 * @description Restaurant detail — now uses Redux cart
 */

import { useMemo,useState } from 'react';
import { DUMMY_RESTAURANTS, DUMMY_FOOD_ITEMS } from '@constants/index';
import { useAppDispatch, useAppSelector } from '@store/index';
import { addItem, removeItem } from '@store/slices/cartSlice';
import {
  selectTotalItems,
  selectItemQuantity,
} from '@store/slices/cartSelectors';

const useRestaurantDetail = (restaurantId: string) => {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const restaurant = DUMMY_RESTAURANTS.find(r => r.id === restaurantId);
  const foodItems = DUMMY_FOOD_ITEMS.filter(
    item => item.restaurantId === restaurantId,
  );

  const categories = useMemo(() => {
    const cats = [...new Set(foodItems.map(item => item.category))];
    return ['All', ...cats];
  }, [foodItems]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return foodItems;
    return foodItems.filter(item => item.category === selectedCategory);
  }, [foodItems, selectedCategory]);

  // Redux cart
  const totalCartItems = useAppSelector(selectTotalItems);

  const getItemQuantity = (itemId: string) =>
    useAppSelector(selectItemQuantity(itemId));

  const handleAddToCart = (itemId: string) => {
    const item = foodItems.find(f => f.id === itemId);
    if (!item || !restaurant) return;
    dispatch(
      addItem({
        foodItem: item,
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
      }),
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  return {
    restaurant,
    categories,
    filteredItems,
    selectedCategory,
    setSelectedCategory,
    totalCartItems,
    getItemQuantity,
    handleAddToCart,
    handleRemoveFromCart,
  };
};

export default useRestaurantDetail;