import Link from "next/link"

import { buttonVariants } from "@/ui/button"
import { Separator } from "@/ui/separator"
import { Heading } from "@/ui/typography"
import { NAV_LINKS } from "@/utils/constants"

const Footer = () => {
  return (
    <footer>
      <div className="container py-4 space-y-4 uppercase">
        <div className="flex items-center justify-between gap-4 pt-4">
          <Heading variant="h2" className="font-extralight">
            {process.env.APP_TITLE}
          </Heading>

          <nav>
            <ul className="flex justify-start items-center gap-4">
              {NAV_LINKS.map((navLink, i) => (
                <li key={i}>
                  <Link
                    href={{ pathname: navLink.to }}
                    className={buttonVariants({
                      variant: "link",
                      size: "none",
                    })}
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={{ pathname: "/cart" }}
                  className={buttonVariants({
                    variant: "link",
                    size: "none",
                  })}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Separator />

        <div className="flex items-center justify-between gap-4 text-muted-foreground">
          <div className="text-sm">
            <p>
              Coded by{" "}
              <Link
                href={{ pathname: "https://github.com/lamiaagabriel" }}
                className={buttonVariants({
                  variant: "link",
                  className: "px-[2px]",
                })}
              >
                Lamiaa Gabriel
              </Link>
            </p>
            <p>
              © {new Date().getFullYear()} {process.env.APP_TITLE}. All rights
              reserved.
            </p>
          </div>
          <div>
            <Link
              href={{ pathname: "/facebook.com" }}
              className={buttonVariants({
                variant: "link",
              })}
            >
              Facebook
            </Link>
            <Link
              href={{ pathname: "/instagram.com" }}
              className={buttonVariants({
                variant: "link",
              })}
            >
              instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
