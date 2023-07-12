import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Order | ${process.env.APP_TITLE}`,
}

import { FC } from "react"

type OrderProps = {
  params: { id: string }
}

const Order: FC<OrderProps> = async ({ params }) => {
  // const res = await getOrder({ id: params.id })
  // if (res.status !== "success" || !res.data) throw Error("No Order Found.")
  // const product = res.data

  return (
    <section>
      <div className="container">Order {params.id}</div>
    </section>
  )
}
export default Order
