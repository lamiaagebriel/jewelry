"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "@prisma/client"

import { DataTableColumnHeader } from "@/ui/data-table"
import { Badge } from "@/ui/badge"
import { getPrice } from "@/lib/fn"
import { buttonVariants } from "@/ui/button"

export const PRODUCTS_COLUMNS: ColumnDef<Product>[] = [
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
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(parseFloat(row.getValue("price")))
    },
  },
  {
    accessorKey: "discount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Discount" />
    ),
    cell: ({ row }) => {
      if (parseFloat(row.getValue("discount")) === 0)
        return <Badge variant="outline">No Discount</Badge>

      return (
        <div className=" flex items-center gap-4">
          <Badge variant="secondary">{row.getValue("discount")}%</Badge>
          <p className="text-green-500">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(
              getPrice(row.getValue("price"), row.getValue("discount"))
            )}
          </p>
        </div>
      )
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      if (parseFloat(row.getValue("quantity")) === 0)
        return <Badge variant="destructive">Sold Out</Badge>

      return parseFloat(row.getValue("quantity"))
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Price" />
    ),
    cell: ({ row }) => {
      const total = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(
        getPrice(row.getValue("price"), row.getValue("discount")) *
          parseFloat(row.getValue("quantity"))
      )

      return parseFloat(row.getValue("quantity")) === 0 ? "--" : total
    },
    enableSorting: false,
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      return (
        <>
          {new Date(row.getValue("created_at")?.toString()!).toLocaleDateString(
            "en-US",
            { day: "numeric", month: "short" }
          )}
        </>
      )
    },
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated At" />
    ),
    cell: ({ row }) => {
      return (
        <>
          {new Date(row.getValue("updated_at")?.toString()!).toLocaleDateString(
            "en-US",
            { day: "numeric", month: "short" }
          )}
        </>
      )
    },
  },
]
