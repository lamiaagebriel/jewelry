import { CartLayout } from "@/components/cart"
import type { Metadata } from "next"
export const metadata: Metadata = { title: `Cart | ${process.env.APP_TITLE}` }

const Cart = () => {
  return <CartLayout />
}
export default Cart
