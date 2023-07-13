import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Order Details | ${process.env.APP_TITLE}`,
}
import { FC } from "react"
import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/next-auth"
import { db } from "@/lib/prisma"

import { Badge } from "@/ui/badge"
import { Heading, Paragraph } from "@/ui/typography"

import { notFound } from "next/navigation"

type OrderProps = {
  params: { id: string }
}

const Order: FC<OrderProps> = async ({ params }) => {
  const session = await getAuthSession()
  if (!session) redirect("/api/auth/signin")

  const order = await db.order.findUnique({
    where: { id: params.id },
    include: {
      products: {
        include: {
          product: true,
        },
      },
      address: true,
    },
  })

  if (!order) notFound()

  return (
    <>
      <section>
        <div className="container py-6">
          <div className="flex flex-row items-start justify-between gap-2">
            <div>
              <Heading>Order Id: {order.id}</Heading>
              <Paragraph variant="muted">
                View your order history or check the status of a recent order.
              </Paragraph>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" size="default">
                  {order.products.length} product(s)
                </Badge>
                <Badge
                  variant={
                    order.status === "CANCELED"
                      ? "destructive"
                      : order.status === "PENDING"
                      ? "secondary"
                      : "outline"
                  }
                  size="default"
                >
                  {order.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Order
