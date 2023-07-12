import * as SelectPrimitive from "@radix-ui/react-select"
import { ButtonProps } from "@/ui/button"
import { InputProps } from "@/ui/input"
import { TextareaProps } from "@/ui/textarea"
import { SelectItemProps } from "@/ui/select"

type Field<T> = {
  name: T
  label: string
  desc?: string
} & (
  | {
      type: "input"
      input?: InputProps
    }
  | {
      type: "textarea"
      textarea?: TextareaProps
    }
  | {
      type: "select"
      select?: SelectPrimitive.SelectTriggerProps
      isNewable?: boolean
      items: SelectItemProps[]
    }
  | { type: "checkbox" }
)

type FormProps = {
  className?: string
  form: UseFormReturn<FieldValues, any, undefined>
  // fields: () => Promise<Field<keyof FieldName>[]>
  fields: Field<keyof FieldName>[]
  onSubmit: (values: FieldValues) => Promise<void>
  children?: React.ReactNode
  submit?: ButtonProps
}
