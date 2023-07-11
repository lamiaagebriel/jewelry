import { FC } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"

type AlertDialogSectionProps = {
  title: string
  desc: string
  children: React.ReactNode
}
const AlertDialogSection: FC<AlertDialogSectionProps> = ({
  title,
  desc,
  children,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  )
}
export default AlertDialogSection
