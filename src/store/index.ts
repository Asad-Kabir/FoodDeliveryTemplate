/**
 * @file store/index.ts
 * @description Redux store configuration
 * Usage: import { useAppDispatch, useAppSelector } from '@store/index'
 */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import cartReducer from './slices/cartSlice';

// ─── Store ────────────────────────────────────────────────
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// ─── Types ────────────────────────────────────────────────
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ─── Typed Hooks ──────────────────────────────────────────
/**
 * Use these instead of plain useDispatch and useSelector
 * for full TypeScript support
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;