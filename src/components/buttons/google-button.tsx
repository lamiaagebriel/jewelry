"use client"
import { FC, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { signIn } from "next-auth/react"
import { Button, ButtonProps } from "@/ui/button"
import { cn } from "@/lib/shadcn-ui"
import { useToast } from "@/ui/use-toast"

const GoogleButton: FC<ButtonProps> = ({ className, ...props }) => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <Button
      className={cn("w-full", className)}
      size="lg"
      onClick={async () => {
        setIsLoading(true)
        try {
          await signIn("google")
        } catch (error) {
          toast({
            variant: "destructive",
            title: "An error occurred while signing in.",
          })
        } finally {
          setIsLoading(false)
        }
      }}
      isLoading={isLoading}
      {...props}
    >
      {!isLoading && <FcGoogle className="mr-2 w-5 h-5" />}
      Sign in with Google
    </Button>
  )
}
export default GoogleButton
