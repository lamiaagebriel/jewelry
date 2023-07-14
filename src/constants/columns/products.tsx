"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "@prisma/client"

import { DataTableColumnHeader, DataTableRowActions } from "@/ui/data-table"
import { Badge } from "@/ui/badge"
import { getCurrency, getPrice } from "@/lib/fn"
import { buttonVariants } from "@/ui/button"
import { Image } from "@/ui/image"
import { GetPrice } from "@/components/products"

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
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="image" />
    ),
    cell: ({ row }) => {
      return row.getValue("image") ? (
        <Image
          src={row.getValue("image")}
          alt={`${row.getValue("title")} Image`}
          className="aspect-1 w-28 rounded-md shadow"
        />
      ) : (
        "----"
      )
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="title" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="category" />
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="price" />
    ),
    cell: ({ row }) => {
      return (
        <GetPrice
          price={row.getValue("price")}
          discount={row.getValue("discount")}
        />
      )
    },
  },
  {
    accessorKey: "discount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="discount" />
    ),
    cell: ({ row }) => {
      if (parseFloat(row.getValue("discount")) === 0)
        return <Badge variant="outline">No Discount</Badge>

      return <Badge variant="secondary">{row.getValue("discount")}%</Badge>
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="quantity" />
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
      <DataTableColumnHeader column={column} title="total amount" />
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
