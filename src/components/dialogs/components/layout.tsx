import { FC } from "react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogContentProps,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/ui/alert-dialog"
import { cn } from "@/lib/shadcn-ui"

type AlertDialogLayoutProps = AlertDialogContentProps & {
  title: string
  desc: string
  children: React.ReactNode
  trigger: React.ReactNode
}

const AlertDialogLayout: FC<AlertDialogLayoutProps> = ({
  title,
  desc,
  children,
  trigger,
  className,
  ...props
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent
        className={cn("sm:max-w-[425px]", className)}
        {...props}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>

        {children}
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default AlertDialogLayout
