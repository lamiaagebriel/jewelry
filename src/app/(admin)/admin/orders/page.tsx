import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Orders | ${process.env.APP_TITLE}`,
}

import { Heading } from "@/ui/typography"
import { DataTable } from "@/ui/data-table"

import { getOrders } from "@/actions"
import { ORDERS_COLUMNS } from "@/constants/columns"

const Orders = async () => {
  const orders = await getOrders()

  return (
    <section>
      <div className="container py-4 space-y-4">
        <div className="flex items-center justify-between space-y-2 mb-10">
          <Heading variant="h3">Orders</Heading>
        </div>

        <DataTable data={orders} columns={ORDERS_COLUMNS} />
      </div>
    </section>
  )
}
export default Orders
