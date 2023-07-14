"use server"

import { db } from "@/lib/prisma"
import { Order, OrderProduct, Product } from "@prisma/client"

type OrderType = Order & {
  products: (OrderProduct & { product: Product })[]
}
export async function getOrders(): Promise<OrderType[]> {
  try {
    const orders = await db.order.findMany({
      include: { products: { include: { product: true } }, user: true },
    })

    return orders
  } catch (error: any) {
    console.log("getting orders error - GET.")
    console.log(error)
    return []
  } finally {
    await db.$disconnect()
  }
}

export async function getOrder({
  id,
}: Pick<Order, "id">): Promise<OrderType | null> {
  try {
    const order = await db.order.findUnique({
      where: { id },
      include: { products: { include: { product: true } } },
    })
    return order
  } catch (error: any) {
    console.log("getting order error - GET.")
    console.log(error)
    return null
  } finally {
    await db.$disconnect()
  }
}
