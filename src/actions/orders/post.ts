"use server"

import { getPrice } from "@/lib/fn"
import { getAuthSession } from "@/lib/next-auth"
import { db } from "@/lib/prisma"
import { CartState } from "@/types/cart"
import { createCartSchema } from "@/types/validations/cart"
import { Order, OrderProduct } from "@prisma/client"
import { revalidateTag } from "next/cache"

export async function createOrder({
  fields,
}: {
  fields: CartState
}): Promise<ApiResponse<any>> {
  try {
    // Check valid Data
    console.log(
      !fields.actual_cost,
      !fields.cost,
      !fields.order_info,
      !createCartSchema.safeParse(fields.order_info).success,
      !fields.total_items,
      !fields.products.length
    )
    if (
      !fields.actual_cost ||
      !fields.cost ||
      !fields.order_info ||
      !createCartSchema.safeParse(fields.order_info).success ||
      !fields.total_items ||
      !fields.products.length
    )
      return {
        status: "fields",
        errors: [
          {
            value: "",
            message: "Some data is missing, refill all fields.",
          },
        ],
      }

    // Check if user is logged in
    const session = await getAuthSession()
    if (!session || !session?.user.id) {
      return {
        status: "fields",
        errors: [
          {
            value: "",
            message:
              "Sign in first, you can't place an order without signing in.",
          },
        ],
      }
    }

    // Check if user exists
    const isCustomerExist = await db.user.findUnique({
      where: { id: session.user.id },
    })
    if (!isCustomerExist) {
      return {
        status: "fields",
        errors: [
          { value: "", message: "Your account is invalid. Try another one." },
        ],
      }
    }

    // Check if products exist
    const products = await db.product.findMany({
      where: {
        id: {
          in: fields.products.map(({ product }) => product.id),
        },
        quantity: { gt: 0 },
      },
    })

    // Some products are missing, or sold out
    if (products.length < fields.products.length) {
      return {
        status: "fields",
        errors: [
          {
            value: "",
            message:
              "Some products is not available or sold out. try deleting all of them and place a new order.",
          },
        ],
      }
    }
    const cost = products.reduce((acc, product) => {
      const fieldProduct =
        fields.products.filter(({ product: p }) => p.id === product.id).pop() ||
        null

      // miss with the total cost
      if (
        !fieldProduct ||
        fieldProduct.quantity > product.quantity ||
        fieldProduct.product.price != product.price ||
        fieldProduct.product.discount != product.discount
      )
        return 0

      return (
        acc + getPrice(product.price, product.discount) * fieldProduct.quantity
      )
    }, 0)

    if (cost !== fields.cost)
      return {
        status: "fields",
        errors: [
          {
            value: "",
            message:
              "Some products is not available or sold out. try deleting all of them and place a new order.",
          },
        ],
      }

    // Place an order

    const orderProducts = fields.products.map(
      ({ product, quantity, size }) => ({
        product_id: product.id,
        price: product.price,
        discount: product.discount,
        quantity,
        size,
      })
    ) as Omit<OrderProduct, "id" | "order_id">[]

    const order = await db.order.create({
      data: {
        user_id: session.user.id,
        payment_method: fields.order_info.payment_method,
        // actual_amount: fields.actual_cost,
        // amount: fields.cost,
        address: {
          create: {
            name: fields.order_info.name,
            phone: fields.order_info.phone,
            address_line: fields.order_info.address_line,
            zip: fields.order_info.zip,
            city: fields.order_info.city,
            country: fields.order_info.country,
          },
        },
        products: {
          createMany: {
            data: orderProducts,
          },
        },
      },
      include: {
        products: true,
        address: true,
      },
    })

    revalidateTag("orders")
    revalidateTag("users")
    revalidateTag("products")
    revalidateTag("addresses")
    return {
      status: "success",
      data: order.id,
      message: "order has been placed successfully.",
    }
  } catch (error: any) {
    console.log("creating order error - creation.")
    console.log(error)
    return { status: "failure", error: error.message }
  }
}

export async function cancelOrder({
  id,
}: Pick<Order, "id">): Promise<ApiResponse<string>> {
  try {
    if (!id)
      return {
        status: "failure",
        error: "Specify the order first.",
      }

    // Check if user is logged in
    const session = await getAuthSession()
    if (!session || !session?.user.id) {
      return {
        status: "failure",
        error: "Sign in first, you can't cancel an order without signing in.",
      }
    }

    await db.order.update({
      data: { status: "CANCELED" },
      where: { id },
    })

    // Place an order
    revalidateTag("orders")
    return {
      status: "success",
      message: "order has been canceled successfully.",
    }
  } catch (error: any) {
    console.log("canceling order error - cancelation.")
    console.log(error)
    return { status: "failure", error: error.message }
  }
}
