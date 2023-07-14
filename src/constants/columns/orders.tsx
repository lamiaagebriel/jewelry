"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Order, OrderProduct, Product, User } from "@prisma/client"

import { DataTableColumnHeader, DataTableRowActions } from "@/ui/data-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { getFallback } from "@/lib/shadcn-ui"
import { Paragraph } from "@/ui/typography"
import { getCurrency, getOrderActualCost, getOrderCost } from "@/lib/fn"
import { Badge } from "@/ui/badge"
import { SHIPPING_COST } from "../layout"

export const ORDERS_COLUMNS: ColumnDef<
  Order & { products: (OrderProduct & { product: Product })[] }
>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] truncate">{row.getValue("id")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "user",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="customer" />
    ),
    cell: ({ row }) => {
      const user: User = row.getValue("user")
      return user.image ? (
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.image} />
            <AvatarFallback>{getFallback(user.name || "")}</AvatarFallback>
          </Avatar>
          <div>
            <Paragraph>{user.name}</Paragraph>
            <Paragraph variant="muted" className="text-sm">
              {user.email}
            </Paragraph>
          </div>
        </div>
      ) : (
        "----"
      )
    },
  },
  {
    accessorKey: "products",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="total cost" />
    ),
    cell: ({ row }) => {
      const products: (OrderProduct & { product: Product })[] =
        row.getValue("products")
      return (
        <div className="flex items-center gap-2">
          {getCurrency(getOrderCost(products))}

          {getOrderCost(products) < 1000 ? (
            <p className="ml-4 text-xs text-muted-foreground">
              + {getCurrency(SHIPPING_COST)} shipping
            </p>
          ) : (
            <p className="ml-4 text-xs text-muted-foreground">
              + free shipping
            </p>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "saved",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="total saved" />
    ),
    cell: ({ row }) => {
      const products: (OrderProduct & { product: Product })[] =
        row.getValue("products")
      return getCurrency(getOrderActualCost(products) - getOrderCost(products))
    },
  },
  {
    accessorKey: "is_paid",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="paid" />
    ),
    cell: ({ row }) => {
      const isPaid = row.getValue("is_paid") as "PAID" | "UNPAID"
      return (
        <Badge variant={isPaid === "PAID" ? "default" : "outline"}>
          {isPaid.toLowerCase()}
        </Badge>
      )
    },
  },
  {
    accessorKey: "payment_method",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="payment method" />
    ),
    cell: ({ row }) => {
      return (
        <div className=" text-center">{row.getValue("payment_method")}</div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="STATUS" />
    ),
    cell: ({ row }) => {
      const status: string = row.getValue("status")
      return (
        <Badge variant={status === "CANCELED" ? "destructive" : "secondary"}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="created" />
    ),
    cell: ({ row }) => {
      return (
        <>
          {new Date(row.getValue("created_at")?.toString()!).toLocaleDateString(
            "en-US",
            { year: "numeric", day: "numeric", month: "short" }
          )}
        </>
      )
    },
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="last updated" />
    ),
    cell: ({ row }) => {
      return (
        <>
          {new Date(row.getValue("updated_at")?.toString()!).toLocaleDateString(
            "en-US",
            { year: "numeric", day: "numeric", month: "short" }
          )}
        </>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
