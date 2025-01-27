import Link from "next/link"
import { redirect } from "next/navigation"

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
import { LogOutButton, ModeButton } from "@/components/buttons"
import { getFallback } from "@/lib/shadcn-ui"
import { NAV_LINKS_ADMIN } from "@/constants/layout"
import { getAuth } from "@/lib/lucia"
import { Paragraph } from "@/ui/typography"

const Header = async () => {
  const {user} = await getAuth()
  if (!user) redirect("/auth")

  return (
    <header className="border-b">
      <div className="container py-4 flex justify-between items-center">
        <nav className="flex items-center gap-4">
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

        <div className="flex justify-end items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src={user?.image || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>
                  {getFallback(user.name || "")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                {user?.name}
                <Paragraph variant="muted" className="text-[10px]">
                  {user?.email}
                </Paragraph>
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

          <ModeButton />
        </div>
      </div>
    </header>
  )
}
export default Header
