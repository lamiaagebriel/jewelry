"use client"

import { ColumnDef } from "@tanstack/react-table"
import { User } from "@prisma/client"

import { DataTableColumnHeader } from "@/ui/data-table"
import { Badge } from "@/ui/badge"

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
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full Name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      return (
        <Badge
          variant={row.getValue("role") === "ADMIN" ? "outline" : "secondary"}
        >
          {row.getValue("role")}
        </Badge>
      )
    },
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
