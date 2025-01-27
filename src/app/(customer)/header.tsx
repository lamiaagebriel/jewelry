import Link from "next/link"

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
import { buttonVariants } from "@/ui/button"
import { Heading } from "@/ui/typography"
import { NAV_LINKS } from "@/constants/layout"
import { getAuth } from "@/lib/lucia"
import { LogOutButton, CartButton } from "@/components/buttons"
import { getFallback } from "@/lib/shadcn-ui"

const Header = async () => {
  const {user} = await getAuth()

  return (
    <header>
      <div className="container py-6 space-y-4">
        <Heading className="text-center uppercase font-extralight">
          {process.env.APP_TITLE}
        </Heading>

        <nav className="flex justify-between items-center gap-10">
          <ul className="flex justify-start items-center gap-10">
            {NAV_LINKS.map((navLink, i) => (
              <li key={i}>
                <Link
                  href={{ pathname: navLink.to }}
                  className={buttonVariants({
                    variant: "link",
                    size: "none",
                    className: "uppercase",
                  })}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-start items-center gap-8">
            <CartButton />

            <>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src={
                          user?.image || "https://github.com/shadcn.png"
                        }
                      />
                      <AvatarFallback>
                        {getFallback(user.name || "")}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                      {user?.name}
                      <p className="text-[10px] text-muted-foreground">
                        {user?.email}
                      </p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <Link href={{ pathname: "/orders" }}>
                        <DropdownMenuItem>Orders</DropdownMenuItem>
                      </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <LogOutButton />
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={{ pathname: "/auth" }}
                  className={buttonVariants({
                    variant: "link",
                    size: "none",
                    className: "uppercase",
                  })}
                >
                  Sign in
                </Link>
              )}
            </>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
