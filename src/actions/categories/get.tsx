"use server"

import { db } from "@/lib/prisma"
import { SelectItemProps } from "@/ui/select"

export async function getCategories(): Promise<ApiResponse<SelectItemProps[]>> {
  try {
    const categories = await db.product.findMany({
      select: { category: true },
      distinct: ["category"],
    })

    return {
      status: "success",
      data: categories.map(
        (item) =>
          ({
            value: item.category,
            label: item.category,
          } as SelectItemProps)
      ),
    }
  } catch (error: any) {
    console.log("getting categories error - GET.")
    console.log(error)
    return { status: "failure", error: error.message }
  } finally {
    await db.$disconnect()
  }
}
