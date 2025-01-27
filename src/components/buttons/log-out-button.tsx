"use client"
import { FC } from "react"
import { DropdownMenuItem, DropdownMenuItemProps } from "@/ui/dropdown-menu"
import { LogOut } from "lucide-react" 
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/ui/button"
 
const LogOutButton: FC<DropdownMenuItemProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onSelect={(event) => { event.preventDefault() }}
      {...props}
    >
       <Link
      href={{ pathname: '/api/auth/logout' }}
      className={cn('w-full flex items-center gap-2', className)}
    >
       <span>Log out</span>
      <LogOut className="ml-auto h-4 w-4" />
    </Link>
    </DropdownMenuItem>
  )
}

export default LogOutButton
