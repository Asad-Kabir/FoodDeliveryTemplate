/**
 * @file types/index.ts
 * @description Global TypeScript types and interfaces
 * All shared types used across the app are defined here.
 */

// ─── User Types ───────────────────────────────────────────
export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    address?: Address[];
  }
  
  // ─── Address Types ────────────────────────────────────────
  export interface Address {
    id: string;
    label: string;       // 'Home', 'Work', 'Other'
    street: string;
    city: string;
    latitude: number;
    longitude: number;
    isDefault: boolean;
  }
  
  // ─── Restaurant Types ─────────────────────────────────────
  export interface Restaurant {
    id: string;
    name: string;
    image: string;
    cuisine: string;
    rating: number;
    reviewCount: number;
    deliveryTime: string;  // '20-30 min'
    deliveryFee: number;
    minimumOrder: number;
    isOpen: boolean;
    isFeatured: boolean;
    categories: Category[];
  }
  
  // ─── Food Item Types ──────────────────────────────────────
  export interface FoodItem {
    id: string;
    restaurantId: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isAvailable: boolean;
    isPopular: boolean;
    extras?: Extra[];
  }
  
  export interface Extra {
    id: string;
    name: string;
    price: number;
  }
  
  // ─── Category Types ───────────────────────────────────────
  export interface Category {
    id: string;
    name: string;
    icon: string;
  }
  
  // ─── Cart Types ───────────────────────────────────────────
  export interface CartItem {
    id: string;
    foodItem: FoodItem;
    quantity: number;
    extras?: Extra[];
    totalPrice: number;
    notes?: string;
  }
  
  export interface Cart {
    restaurantId: string;
    restaurantName: string;
    items: CartItem[];
    subtotal: number;
    deliveryFee: number;
    total: number;
  }
  
  // ─── Order Types ──────────────────────────────────────────
  export type OrderStatus =
    | 'pending'
    | 'confirmed'
    | 'preparing'
    | 'on_the_way'
    | 'delivered'
    | 'cancelled';
  
  export interface Order {
    id: string;
    userId: string;
    restaurant: Restaurant;
    items: CartItem[];
    status: OrderStatus;
    address: Address;
    subtotal: number;
    deliveryFee: number;
    total: number;
    createdAt: string;
    estimatedDelivery: string;
  }
  
  // ─── Navigation Types ─────────────────────────────────────
  export type RootStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    Signup: undefined;
    MainTabs: undefined;
    RestaurantDetail: { restaurantId: string };
    Cart: undefined;
    OrderTracking: { orderId: string };
  };
  
  // ─── API Types ────────────────────────────────────────────
  export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
  }