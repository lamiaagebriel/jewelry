"use server"

import { db } from "@/lib/prisma"
import { Product } from "@prisma/client"

export async function getProducts(): Promise<ApiResponse<Product[]>> {
  try {
    const products = await db.product.findMany()

    return {
      status: "success",
      data: products,
    }
  } catch (error: any) {
    console.log("getting products error - GET.")
    console.log(error)
    return { status: "failure", error: error.message }
  } finally {
    await db.$disconnect()
  }
}

export async function getProduct({
  slug,
}: Pick<Product, "slug">): Promise<ApiResponse<Product | null>> {
  try {
    const product = await db.product.findUnique({ where: { slug } })

    return {
      status: "success",
      data: product,
    }
  } catch (error: any) {
    console.log("getting product error - GET.")
    console.log(error)
    return { status: "failure", error: error.message }
  } finally {
    await db.$disconnect()
  }
}
