import type { Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"
import { Role } from "@prisma/client"

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: Role
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string
      role: Role
    }
  }
}
