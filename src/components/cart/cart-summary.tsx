import { FC } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/ui/table"

import { getCurrency } from "@/lib/fn"
import { CartState } from "@/types/cart"
import { GetPrice } from "@/components/products"
import SummaryDataTable from "../summary-data-table"
import { SHIPPING_COST } from "@/constants/layout"

type CartSummaryProps = {
  children?: React.ReactNode
  cart: CartState
}
const CartSummary: FC<CartSummaryProps> = ({ children, cart }) => {
  const SUMMARY: { label: React.ReactNode; value: React.ReactNode }[] = [
    {
      label: "Subtotal",
      value: (
        <GetPrice
          price={cart.actual_cost}
          discount={(1 - cart.cost / cart.actual_cost) * 100}
          className="text-foreground"
        />
      ),
    },
    {
      label: "Saved",
      value:
        cart.actual_cost - cart.cost <= 0
          ? "---"
          : getCurrency(cart.actual_cost - cart.cost),
    },
    {
      label: "Items",
      value: cart.total_items,
    },
    {
      label: "Payment Method",
      value: "Cash",
    },
    {
      label: "Shipping",
      value: getCurrency(SHIPPING_COST),
    },
    {
      label: "Total",
      value: (
        <>
          <p>{getCurrency(cart.cost + SHIPPING_COST)} USD</p>
          <p className="text-muted-foreground/90 text-[9px]">including VAT</p>
        </>
      ),
    },
  ]

  return <SummaryDataTable summaries={SUMMARY}>{children}</SummaryDataTable>
}
export default CartSummary
