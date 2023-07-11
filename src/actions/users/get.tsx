"use server"

import { db } from "@/lib/prisma"
import { User } from "@prisma/client"

export async function getUsers(): Promise<ApiResponse<User[]>> {
  try {
    const users = await db.user.findMany()

    return {
      status: "success",
      data: users,
    }
  } catch (error: any) {
    console.log("getting users error - GET.")
    console.log(error)
    return { status: "failure", error: error.message }
  } finally {
    await db.$disconnect()
  }
}
