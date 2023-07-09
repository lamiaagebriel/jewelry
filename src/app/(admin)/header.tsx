import Link from "next/link"
import { redirect } from "next/navigation"
import { Session } from "next-auth"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { LogOutButton } from "@/components/buttons"
import { getFallback } from "@/lib/shadcn-ui"
import { NAV_LINKS_ADMIN } from "@/utils/constants"
import { getAuthSession } from "@/lib/next-auth"

const Header = async () => {
  const session = await getAuthSession()
  if (!session) redirect("/api/auth/signin")

  return (
    <header className="border-b">
      <div className="container py-4 flex items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {NAV_LINKS_ADMIN.map((link, i) => (
            <Link
              key={i}
              href={{ pathname: link.to }}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src={session.user?.image || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>
                  {getFallback(session.user.name || "")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                {session.user?.name}
                <p className="text-[10px] text-slate-500">
                  {session.user?.email}
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <LogOutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
export default Header
