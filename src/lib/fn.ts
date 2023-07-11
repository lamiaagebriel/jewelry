// export const fetcher = async <T>(
//   url: RequestInfo | URL,
//   options: RequestInit | undefined
// ) =>
//   // : Promise<ApiResponse<T>>
//   {
//     return await fetch(
//       process.env.NODE_ENV === "development"
//         ? `http://localhost:3000/api${url}`
//         : `https://${process.env.VERCEL_URL}/api${url}`,
//       options
//     )
//     // .then((res) => res.json())
//   }

import { SelectItem } from "@/types/dialogs"
import { Product } from "@prisma/client"

export const fetcher = async <T>(
  url: RequestInfo | URL,
  options?: RequestInit | undefined
): Promise<ApiResponse<T>> => {
  const response = await fetch(
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api${url}`
      : `https://${process.env.VERCEL_URL}/api${url}`,
    options
  )

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const contentType = response.headers.get("content-type")
  if (!contentType || !contentType.includes("application/json"))
    throw new Error("Expected JSON response")

  const data = await response.json()
  return data
}

export const getPrice = (
  price: number | string,
  discount?: number | string
): number => {
  return (
    parseFloat(price.toString()) *
    (1 - parseFloat(discount?.toString() || "0") / 100)
  )
}

export const getCategories = (products: Product[]): SelectItem[] => {
  const categoriesSet: Set<string> = new Set()

  for (const product of products) {
    if (product.category) {
      categoriesSet.add(product.category)
    }
  }

  const distinctCategories: string[] = Array.from(categoriesSet)
  return distinctCategories.map((category) => ({
    value: category,
    label: category,
  }))
}
