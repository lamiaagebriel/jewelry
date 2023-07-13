"use server"

import { db } from "@/lib/prisma"
import {
  CreateProductProps,
  createProductSchema,
} from "@/types/validations/products"
import { revalidateTag } from "next/cache"

export async function createProduct(
  fields: CreateProductProps
): Promise<ApiResponse<Pick<CreateProductProps, "slug" | "category">>> {
  try {
    const isValidProduct = createProductSchema.safeParse(fields)
    if (!isValidProduct.success)
      return { status: "failure", error: "The product is not a valid." }

    const isSlugExists = await db.product.findUnique({
      where: { slug: fields.slug },
    })

    if (isSlugExists) {
      return {
        status: "fields",
        errors: [
          {
            value: "slug",
            message: "this slug already exists, try another one.",
          },
          { value: "category", message: null },
        ],
      }
    }

    await db.product.create({
      data: fields,
    })

    revalidateTag("categories")
    return {
      status: "success",
      message: "product has bee created successfully.",
    }
  } catch (error: any) {
    console.log("creating product error - creation.")
    console.log(error)
    return { status: "failure", error: error.message }
  }
}
