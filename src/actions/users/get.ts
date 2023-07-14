"use server"

import { db } from "@/lib/prisma"
import { User } from "@prisma/client"

export async function getUsers(): Promise<User[]> {
  try {
    const users = await db.user.findMany({
      include: {
        orders: { include: { products: { include: { product: true } } } },
      },
    })

    return users
  } catch (error: any) {
    console.log("getting users error - GET.")
    console.log(error)
    return []
  } finally {
    await db.$disconnect()
  }
}
