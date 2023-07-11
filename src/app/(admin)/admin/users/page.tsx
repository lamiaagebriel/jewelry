import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Users | ${process.env.APP_TITLE}`,
}

import { Heading } from "@/ui/typography"
import { DataTable } from "@/ui/data-table"

import { getUsers } from "@/actions"
import { USERS_COLUMNS } from "@/constants/columns"

const Users = async () => {
  const customers = await getUsers()

  return (
    <section>
      <div className="container py-4 space-y-4">
        <div className="flex items-center justify-between space-y-2 mb-10">
          <Heading variant="h3">Users</Heading>
        </div>

        <DataTable
          search="name"
          data={
            customers.status === "success" && customers.data?.length
              ? customers.data
              : []
          }
          columns={USERS_COLUMNS}
        />
      </div>
    </section>
  )
}
export default Users
