import { Address, PaymentMethod, Product } from "@prisma/client"
import { CreateCartProps } from "./validations/cart"

type CartProduct = {
  product: Omit<Product, "created_at" | "updated_at">
  quantity: number
  size: number
}

type CartState = {
  products: CartProduct[] | []
  actual_cost: number
  cost: number
  total_items: number
  order_info: CreateCartProps | null
}

type RemoveCart = Pick<CartProduct, "product" | "quantity">
