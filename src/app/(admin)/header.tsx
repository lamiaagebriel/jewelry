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
import { getAuthSession } from "@/lib/next-auth"
import { Paragraph } from "@/ui/typography"

const Header = async () => {
  const session = await getAuthSession()
  if (!session) redirect("/api/auth/signin")

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
                <Paragraph variant="muted" className="text-[10px]">
                  {session.user?.email}
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
