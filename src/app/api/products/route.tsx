import { NextResponse } from "next/server"

import { db } from "@/lib/prisma"
import { Product } from "@prisma/client"

export async function GET(
  req: Request
): Promise<NextResponse<ApiResponse<Product[]>>> {
  try {
    const products = await db.product.findMany()

    return NextResponse.json({
      status: "success",
      data: products,
    })
  } catch (error: any) {
    console.log("getting products error - GET.")
    console.log(error)
    return NextResponse.json({ status: "failure", error: error.message })
  } finally {
    await db.$disconnect()
  }
}
