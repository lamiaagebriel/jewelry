"use server"

import { db } from "@/lib/prisma"
import { Image, Product } from "@prisma/client"

export async function getProducts(): Promise<
  (Product & { images: Image[] })[]
> {
  try {
    const products = await db.product.findMany({ include: { images: true } })

    return products
  } catch (error: any) {
    console.log("getting products error - GET.")
    console.log(error)
    return []
  } finally {
    await db.$disconnect()
  }
}

export async function getProduct({
  slug,
}: Pick<Product, "slug">): Promise<(Product & { images: Image[] }) | null> {
  try {
    const product = await db.product.findUnique({
      where: { slug },
      include: { images: true },
    })

    return product
  } catch (error: any) {
    console.log("getting product error - GET.")
    console.log(error)
    return null
  } finally {
    await db.$disconnect()
  }
}
