import { CartProduct } from "@/types/cart"
import { SelectItemProps } from "@/ui/select"
import { OrderProduct, Product } from "@prisma/client"

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

export const getCurrency = (currency: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(currency)
}

// Products
export const getCategories = (products: Product[]): SelectItemProps[] => {
  const categoriesSet: Set<string> = new Set()

  for (const product of products) {
    if (product.category) {
      categoriesSet.add(product.category)
    }
  }

  const distinctCategories: string[] = Array.from(categoriesSet)
  return distinctCategories.map((category) => ({
    value: category,
    children: category,
  }))
}

// Order
export const getOrderProducts = (
  products: (OrderProduct & { product: Product })[]
): CartProduct[] => {
  return products.map(({ product, quantity, size }) => ({
    product: product,
    quantity,
    size,
  }))
}

export const getOrderActualCost = (
  products: (OrderProduct & { product: Product })[]
): number => {
  return products.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0
  )
}
export const getOrderCost = (
  products: (OrderProduct & { product: Product })[]
): number => {
  return products.reduce(
    (acc, { product, quantity }) =>
      acc + getPrice(product.price, product.discount) * quantity,
    0
  )
}
export const getOrderTotalItems = (
  products: (OrderProduct & { product: Product })[]
): number => {
  return products.reduce((acc, { quantity }) => acc + quantity, 0)
}
