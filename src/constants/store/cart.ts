import { createSlice } from "@reduxjs/toolkit"

import {
  addCart as addCartFn,
  removeCart as removeCartFn,
  addOrderInfo as addOrderInfoFn,
  resetCart as resetCartFn,
  initialCartState,
} from "./fn"

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart: addCartFn,
    removeCart: removeCartFn,
    addOrderInfo: addOrderInfoFn,
    resetCart: resetCartFn,
  },
})

export const { addCart, removeCart, addOrderInfo, resetCart } =
  cartSlice.actions
export default cartSlice.reducer
