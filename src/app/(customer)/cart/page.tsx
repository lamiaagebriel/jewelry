import type { Metadata } from "next"
export const metadata: Metadata = { title: `Cart | ${process.env.APP_TITLE}` }

const Cart = () => {
  return (
    <section>
      <div className="container">Cart</div>
    </section>
  )
}
export default Cart
