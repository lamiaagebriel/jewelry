import { FC } from "react"

import { UseFormReturn, FieldValues } from "react-hook-form/dist/types"

import Form from "@/components/form"
import { Button } from "@/ui/button"
import { AlertDialogLayout } from "@/components/dialogs/components"
import { CART_ORDER_INFO_FIELDS } from "@/constants/layout"
import { FormProps } from "@/types/form"

type OrderInformationDialogProps = Pick<
  FormProps,
  "children" | "form" | "onSubmit"
> & {}

const OrderInformationDialog: FC<OrderInformationDialogProps> = ({
  children,
  form,
  onSubmit,
}) => {
  return (
    <AlertDialogLayout
      className=" md:w-[70vw] md:max-w-3xl"
      title="Order Information"
      desc="fill the following needed information carefully."
      trigger={children}
    >
      <Form
        className="[&>#fields]:grid [&>#fields]:grid-cols-1 [&>#fields]:gap-4 [&>#fields]:md:grid-cols-2"
        form={form}
        fields={CART_ORDER_INFO_FIELDS}
        onSubmit={onSubmit}
      />
    </AlertDialogLayout>
  )
}
export default OrderInformationDialog
