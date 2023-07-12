import {
  Provider,
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./cart"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Reducers
export const useCart = (state: RootState) => state.cart
