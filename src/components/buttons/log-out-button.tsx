"use client"
import { FC } from "react"
import { DropdownMenuItem, DropdownMenuItemProps } from "@/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

type LogOutButtonProps = DropdownMenuItemProps & {}

const LogOutButton: FC<LogOutButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onSelect={(event) => {
        event.preventDefault()
        signOut({
          callbackUrl: `${window.location.origin}/api/auth/signin`,
        })
      }}
      {...props}
    >
      <span>Log out</span>
      <LogOut className="ml-auto h-4 w-4" />
    </DropdownMenuItem>
  )
}

export default LogOutButton
