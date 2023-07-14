import type { Metadata } from "next"
export const metadata: Metadata = { title: `Orders | ${process.env.APP_TITLE}` }

import Link from "next/link"
import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/next-auth"
import { db } from "@/lib/prisma"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Badge } from "@/ui/badge"
import { Heading, Paragraph } from "@/ui/typography"
import { Button, buttonVariants } from "@/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion"

import { Cross2Icon } from "@radix-ui/react-icons"
import {
  getCurrency,
  getOrderActualCost,
  getOrderCost,
  getOrderProducts,
  getOrderTotalItems,
  getPrice,
} from "@/lib/fn"
import { CartSummary } from "@/components/cart"
import Empty from "@/components/empty"
import SummaryDataTable from "@/components/summary-data-table"
import { CART_ORDER_INFO_FIELDS, SHIPPING_COST } from "@/constants/layout"
import { Address } from "@prisma/client"
import { GetPrice, Product } from "@/components/products"
import { CancelOrderButton } from "@/components/buttons"
import { Eye } from "lucide-react"

const Orders = async () => {
  const session = await getAuthSession()
  if (!session) redirect("/api/auth/signin")

  const orders = await db.order.findMany({
    where: { user_id: session.user.id },
    include: {
      products: {
        include: {
          product: true,
        },
      },
      address: true,
    },
  })

  if (!orders.length)
    return (
      <Empty
        title="NO ORDERS YET."
        link={{ to: "/products", title: "Go Shopping" }}
      />
    )

  return (
    <>
      <section>
        <div className="container py-6 space-y-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="grow">
            <Heading>My Orders</Heading>
            <Paragraph variant="muted">
              View your order history or check the status of a recent order.
            </Paragraph>
          </div>

          <div className="flex justify-start items-center gap-4">
            <Badge variant="outline" size="default">
              {orders.length} order(s) placed
            </Badge>

            {/* Total Spent */}
            <Badge variant="outline" size="default">
              {getCurrency(
                orders.reduce((acc, order) => {
                  if (order.status === "CANCELED") return acc
                  return acc + getOrderCost(order.products) + SHIPPING_COST
                }, 0)
              )}{" "}
              USD spent.
            </Badge>

            {/* Total Saved */}
            <Badge variant="outline" size="default">
              {getCurrency(
                orders.reduce((acc, order) => {
                  if (order.status === "CANCELED") return acc
                  return acc + getOrderActualCost(order.products)
                }, 0) -
                  orders.reduce((acc, order) => {
                    if (order.status === "CANCELED") return acc
                    return acc + getOrderCost(order.products)
                  }, 0)
              )}{" "}
              USD saved.
            </Badge>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-4">
          {orders.map((order, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <div>
                  <div>
                    <CardTitle>Order Id: {order.id}</CardTitle>
                    <CardDescription>View your order details.</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" size="default">
                      {order.products.length} product(s)
                    </Badge>

                    <Badge
                      variant={
                        order.is_paid === "PAID" ? "default" : "destructive"
                      }
                      size="default"
                    >
                      {order.is_paid}
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

                <div className="flex items-center gap-2 mt-2">
                  <Badge size="default">
                    {getCurrency(getOrderCost(order.products) + SHIPPING_COST)}{" "}
                    USD
                  </Badge>
                  <Link
                    href={{ pathname: `/orders/${order.id}` }}
                    className={buttonVariants({
                      variant: "outline",
                      size: "icon",
                      className: "w-9 h-9 p-2 text-foreground/95",
                    })}
                  >
                    <Eye />
                  </Link>

                  <CancelOrderButton order={order}>
                    <Cross2Icon />
                  </CancelOrderButton>
                </div>
              </CardHeader>
              <CardContent>
                {/* Products */}
                <Accordion type="multiple" className="grid grid-cols-6 gap-4">
                  <AccordionItem value="products" className="col-span-6">
                    <AccordionTrigger>Products</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {order.products.map(({ product, quantity }, i) => (
                          <Product
                            key={i}
                            isTitle={false}
                            product={product}
                            quantity={quantity}
                            className="aspect-h-9"
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Address details */}
                  <AccordionItem
                    value="address"
                    className="col-span-6 md:col-span-3"
                  >
                    <AccordionTrigger>Address</AccordionTrigger>
                    <AccordionContent>
                      <SummaryDataTable
                        summaries={CART_ORDER_INFO_FIELDS.map((field) => {
                          const data = order.address as Address

                          if (field.name === "payment_method")
                            return {
                              label: field.label,
                              value: data ? order.payment_method : "---",
                            }

                          return {
                            label: field.label,
                            value: data ? data[field.name] : "---",
                          }
                        })}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  {/* Summary */}
                  <AccordionItem
                    value="summary"
                    className="col-span-6 md:col-span-3"
                  >
                    <AccordionTrigger>Summary</AccordionTrigger>
                    <AccordionContent>
                      <CartSummary
                        cart={{
                          products: getOrderProducts(order.products),
                          actual_cost: getOrderActualCost(order.products),
                          cost: getOrderCost(order.products),
                          total_items: getOrderTotalItems(order.products),
                          order_info: {
                            payment_method: order.payment_method,
                            name: order.address?.name!,
                            phone: order.address?.phone!,
                            zip: order.address?.zip!,
                            city: order.address?.city!,
                            country: order.address?.country!,
                            address_line: order.address?.address_line || "",
                          },
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
export default Orders
