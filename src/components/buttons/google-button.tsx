"use client"
import { FC, useState } from "react"
import { FcGoogle } from "react-icons/fc" 
import { Button, ButtonProps, buttonVariants } from "@/ui/button"
import { cn } from "@/lib/shadcn-ui"
import { useToast } from "@/ui/use-toast" 
import Link from "next/link"

const GoogleButton: FC<ButtonProps> = ({ className, ...props }) => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <Link 
      href={{ pathname: '/api/auth/callback/google/trigger' }}
      className={cn( buttonVariants({ variant: 'outline', size: 'lg'}), 'w-full', className)}
      
      // size="lg"
      // onClick={async () => {
      //   setIsLoading(true)
      //   // try {
      //     await loginWithGoogle()
      //     redirect('/auth') 
          
      //   // } catch (error) {
      //   //   console.log(error);
          
      //   //   toast({
      //   //     variant: "destructive",
      //   //     title: "Uh oh! Something went wrong.",
      //   //     description: "An error occurred while signing in.",
      //   //   })
      //   // } finally {
      //   //   setIsLoading(false)
      //   // }
      // }}
      // isLoading={isLoading}
      // {...props} 
    >
      {!isLoading && <FcGoogle className="mr-2 w-5 h-5" />}
      Sign in with Google
    </Link>
  )
}
export default GoogleButton
