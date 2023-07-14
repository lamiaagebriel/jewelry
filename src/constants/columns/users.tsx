"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Order, OrderProduct, Product, User } from "@prisma/client"

import { DataTableColumnHeader, DataTableRowActions } from "@/ui/data-table"
import { Badge } from "@/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { getFallback } from "@/lib/shadcn-ui"
import { getCurrency, getOrderCost, getPrice } from "@/lib/fn"
import { SHIPPING_COST } from "../layout"

export const USERS_COLUMNS: ColumnDef<User>[] = [
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
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="image" />
    ),
    cell: ({ row }) => {
      return row.getValue("image") ? (
        <Avatar className="h-20 w-20">
          <AvatarImage src={row.getValue("image")} />
          <AvatarFallback>
            {getFallback(row.getValue("name") || "")}
          </AvatarFallback>
        </Avatar>
      ) : (
        "----"
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="email" />
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="role" />
    ),
    cell: ({ row }) => {
      return (
        <Badge
          variant={row.getValue("role") === "ADMIN" ? "secondary" : "outline"}
        >
          {row.getValue("role")}
        </Badge>
      )
    },
  },
  {
    accessorKey: "orders",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="orders" />
    ),
    cell: ({ row }) => {
      const orders: Order[] = Array.isArray(row.getValue("orders"))
        ? row.getValue("orders")
        : []

      return (
        <div className="flex flex-nowrap items-center gap-2">
          <Badge variant="secondary">{orders.length} placed</Badge>

          <Badge variant="outline">
            {orders.reduce(
              (acc, order) => acc + (order.status !== "CANCELED" ? 1 : 0),
              0
            )}{" "}
            delivered
          </Badge>

          <Badge variant="destructive">
            {orders.reduce(
              (acc, order) => acc + (order.status === "CANCELED" ? 1 : 0),
              0
            )}{" "}
            canceled
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: "total spent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="total spent" />
    ),
    cell: ({ row }) => {
      const orders: (Order & {
        products: (OrderProduct & { product: Product })[]
      })[] = Array.isArray(row.getValue("orders")) ? row.getValue("orders") : []
      const cost = orders.reduce(
        (acc, order) =>
          acc +
          (order.status !== "CANCELED"
            ? getOrderCost(order.products) + SHIPPING_COST
            : 0),
        0
      )

      return cost ? (
        getCurrency(cost)
      ) : (
        <Badge variant="outline">zero spent</Badge>
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
