/**
 * @file constants/index.ts
 * @description Global constants used across the app
 */

// ─── App Info ─────────────────────────────────────────────
export const APP_NAME = 'FoodDelivery';
export const APP_VERSION = '1.0.0';

// ─── API ──────────────────────────────────────────────────
export const API_BASE_URL = 'https://api.yourapp.com/v1';
export const API_TIMEOUT = 10000; // 10 seconds

// ─── AsyncStorage Keys ────────────────────────────────────
export const STORAGE_KEYS = {
  USER_TOKEN: '@user_token',
  USER_DATA: '@user_data',
  ONBOARDING_DONE: '@onboarding_done',
} as const;

// ─── Dummy Data ───────────────────────────────────────────
export const DUMMY_RESTAURANTS = [
  {
    id: '1',
    name: 'Burger Palace',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    cuisine: 'American',
    rating: 4.5,
    reviewCount: 230,
    deliveryTime: '20-30 min',
    deliveryFee: 2.99,
    minimumOrder: 10,
    isOpen: true,
    isFeatured: true,
    categories: [],
  },
  {
    id: '2',
    name: 'Pizza House',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
    cuisine: 'Italian',
    rating: 4.3,
    reviewCount: 180,
    deliveryTime: '25-35 min',
    deliveryFee: 1.99,
    minimumOrder: 15,
    isOpen: true,
    isFeatured: false,
    categories: [],
  },
  {
    id: '3',
    name: 'Sushi World',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500',
    cuisine: 'Japanese',
    rating: 4.7,
    reviewCount: 320,
    deliveryTime: '30-40 min',
    deliveryFee: 3.99,
    minimumOrder: 20,
    isOpen: false,
    isFeatured: true,
    categories: [],
  },
];

export const DUMMY_FOOD_ITEMS = [
  {
    id: '1',
    restaurantId: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato and cheese',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    category: 'Burgers',
    isAvailable: true,
    isPopular: true,
  },
  {
    id: '2',
    restaurantId: '1',
    name: 'Cheese Fries',
    description: 'Crispy fries topped with melted cheese',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500',
    category: 'Sides',
    isAvailable: true,
    isPopular: false,
  },
];

// ─── Categories ───────────────────────────────────────────
export const FOOD_CATEGORIES = [
  { id: '1', name: 'Burgers', icon: '🍔' },
  { id: '2', name: 'Pizza', icon: '🍕' },
  { id: '3', name: 'Sushi', icon: '🍱' },
  { id: '4', name: 'Salads', icon: '🥗' },
  { id: '5', name: 'Desserts', icon: '🍰' },
  { id: '6', name: 'Drinks', icon: '🥤' },
];

// ─── Onboarding Data ──────────────────────────────────────
export const ONBOARDING_DATA = [
  {
    id: '1',
    title: 'Order From Best\nRestaurants',
    subtitle: 'Discover the best restaurants near you and order your favorite food with ease.',
    emoji: '🍔',
    backgroundColor: '#FFF5F0',
  },
  {
    id: '2',
    title: 'Fast & Reliable\nDelivery',
    subtitle: 'Get your food delivered hot and fresh right to your doorstep in minutes.',
    emoji: '🚀',
    backgroundColor: '#F0FFF4',
  },
  {
    id: '3',
    title: 'Track Your\nOrder Live',
    subtitle: 'Real-time order tracking so you always know when your food will arrive.',
    emoji: '📍',
    backgroundColor: '#EBF8FF',
  },
];