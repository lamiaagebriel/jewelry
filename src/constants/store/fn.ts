// Cart
import { getCookie, setCookie } from "cookies-next";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartState, RemoveCart } from "@/types/cart";
import { getPrice } from "@/lib/fn";
import { CreateCartProps } from "@/types/validations/cart";

export const emptyCart: CartState = {
  products: [],
  actual_cost: 0,
  cost: 0,
  total_items: 0,
  order_info: null,
};

export const initialCartState: CartState = getCookie("cart")
  ? (JSON.parse(getCookie("cart") as string) as unknown as CartState)
  : emptyCart;

export const setCartCookie = (state: CartState) =>
  setCookie("cart", JSON.stringify(state as CartState));

export const addCart = (
  state: CartState,
  { payload: { product, quantity, size } }: PayloadAction<CartProduct>
) => {
  state.total_items += quantity; // counts the total pieces

  const exists =
    state.products.filter(({ product: p }) => p.id === product.id).pop() ||
    null;

  if (exists) {
    // Get its index
    const i = state.products.indexOf(exists as never) as number;

    if (product.quantity < exists.quantity + quantity)
      throw Error(
        "You have reached the maximum, there is no more of this product."
      );

    // increase its quantity
    (state.products.at(i) as CartProduct).quantity += quantity;
  } else {
    if (product.quantity < quantity)
      throw Error(
        "You have reached the maximum, there is no more of this product."
      );

    // push each product, with its properties of quantity and size.
    state.products.push({ product, quantity, size } as never);
  }

  // calculate the total cost.
  state.actual_cost += product.price * quantity;
  state.cost += getPrice(product.price, product.discount) * quantity;

  setCartCookie(state);
};

export const removeCart = (
  state: CartState,
  { payload: { product, quantity } }: PayloadAction<RemoveCart>
) => {
  const exists =
    state.products.filter(({ product: p }) => p.id === product.id).pop() ||
    null;

  if (!exists) throw Error("there is no more of this product in your cart.");

  // Get its index
  const i = state.products.indexOf(exists as never) as number;

  if (exists.quantity > quantity) {
    // 2 exists > 1 to be deleted --> use quantity
    state.total_items -= quantity;
    state.actual_cost -= exists.product.price * quantity;
    state.cost -=
      getPrice(exists.product.price, exists.product.discount) * quantity;

    // decrease quantity
    (state.products.at(i) as CartProduct).quantity -= quantity;
  } else {
    // 2 exists > 3 to be deleted --> use exists
    state.total_items -= exists.quantity;
    state.actual_cost -= exists.product.price * quantity;
    state.cost -=
      getPrice(exists.product.price, exists.product.discount) * exists.quantity;

    // decrease quantity
    (state.products.at(i) as CartProduct).quantity -= exists.quantity;
  }

  // if quantity == 0, then delete the whole product
  if ((state.products.at(i) as CartProduct).quantity === 0)
    state.products = state.products.filter(
      ({ product }) => product.id != exists.product.id
    );

  setCartCookie(state);
};

export const addOrderInfo = (
  state: CartState,
  action: PayloadAction<CreateCartProps>
) => {
  state.order_info = action.payload;
  setCartCookie(state);
};

export const resetCart = (state: CartState) => {
  state = emptyCart;
  setCartCookie(emptyCart);
};
