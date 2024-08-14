import { configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import productSlice from './productSlice'
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {

    Product: productSlice,

    Cart: cartSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;