"use client"

import { FC, useEffect, useState } from "react"
import {
  ControllerRenderProps,
  FieldName,
  FieldValues,
} from "react-hook-form/dist/types"

import { Cross2Icon } from "@radix-ui/react-icons"
import { FormProps, Field } from "@/types/form"
import { AlertDialogFooter } from "@/ui/alert-dialog"
import { Button } from "@/ui/button"
import {
  Form as UIForm,
  FormControl,
  FormDescription as UIFormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { Input } from "@/ui/input"
import { Textarea } from "@/ui/textarea"
import { Toggle } from "@/ui/toggle"
import { useToast } from "@/ui/use-toast"
import { Checkbox } from "@/ui/checkbox"
import { cn } from "@/lib/shadcn-ui"

const Form = ({
  className,
  form,
  fields,
  onSubmit,
  submit = { children: "Submit" },
  children = undefined,
}: FormProps) => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const submitHandler = async (values: FieldValues) => {
    try {
      setIsLoading(true)
      await onSubmit(values)
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Ooh, something wrong occurred.",
        description: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <UIForm {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className={cn(
            "px-2 space-y-8 max-h-[75vh] overflow-y-auto",
            className
          )}
        >
          <div id="fields">
            {fields.map((field, i) => (
              <FormField
                key={i}
                control={form.control}
                name={field.name.toString()}
                render={({ field: inputField }) =>
                  field.type === "checkbox" ? (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-2">
                      <FormControl>
                        <Checkbox
                          checked={inputField.value}
                          onCheckedChange={inputField.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>{field.label}</FormLabel>
                        <FormDescription field={field} />
                      </div>
                    </FormItem>
                  ) : (
                    <FormItem>
                      <FormLabel>{field.label}</FormLabel>
                      <FormControl>
                        <>
                          {field.type === "input" && (
                            <InputForm
                              field={field}
                              isLoading={isLoading}
                              inputField={inputField}
                            />
                          )}

                          {field.type === "textarea" && (
                            <Textarea
                              disabled={isLoading}
                              {...field.textarea}
                              {...inputField}
                            />
                          )}

                          {field.type === "select" && (
                            <SelectForm
                              field={field}
                              isLoading={isLoading}
                              inputField={inputField}
                            />
                          )}
                        </>
                      </FormControl>

                      <FormDescription field={field} />
                      <FormMessage />
                    </FormItem>
                  )
                }
              />
            ))}
          </div>

          {/* {children} */}
          <AlertDialogFooter>
            <Button type="submit" isLoading={isLoading} {...submit} />
          </AlertDialogFooter>
        </form>
      </UIForm>
    </>
  )
}
const InputForm: FC<{
  field: Field<string | number | symbol>
  isLoading: boolean
  inputField: ControllerRenderProps<FieldValues, string>
}> = ({ field, isLoading, inputField }) => {
  return (
    field.type === "input" &&
    (field.input?.type === "number" ? (
      <Input
        type="number"
        disabled={isLoading}
        {...field.input}
        {...inputField}
        onChange={(e) => {
          const value = parseFloat(e.target.value)
          inputField.onChange(value)
        }}
      />
    ) : (
      <Input
        type="text"
        disabled={isLoading}
        {...field.input}
        {...inputField}
      />
    ))
  )
}

const SelectForm: FC<{
  field: Field<string | number | symbol>
  isLoading: boolean
  inputField: ControllerRenderProps<FieldValues, string>
}> = ({ field, isLoading, inputField }) => {
  const [isNewable, setIsNewable] = useState<boolean>(false)

  return (
    field.type === "select" &&
    (field.isNewable && isNewable ? (
      <div className="flex flex-nowrap items-center gap-2">
        <Input type="text" disabled={isLoading} {...inputField} />
        <Toggle onClick={() => setIsNewable(false)}>
          <Cross2Icon className="w-4 h-4" />
        </Toggle>
      </div>
    ) : field.items.length ? (
      <Select
        onValueChange={(val) => {
          if (!isNewable) {
            if (val === "new") {
              setIsNewable(true)
              inputField.onChange("")
              return
            }

            inputField.onChange(val)
          }
        }}
        defaultValue={inputField.value}
        disabled={isLoading}
      >
        <FormControl>
          <SelectTrigger className="w-full" {...field.select}>
            <SelectValue />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="max-h-80">
          {field.items.map((item, i) => (
            <SelectItem key={i} {...item} />
          ))}

          {field.isNewable && (
            <>
              <SelectSeparator />
              <SelectItem value="new">add new value</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
    ) : (
      <Input type="text" disabled={isLoading} {...inputField} />
    ))
  )
}

const FormDescription: FC<
  Omit<typeof UIFormDescription, "$$typeof"> & {
    field: Field<string | number | symbol>
  }
> = ({ field, ...props }) => {
  return (
    field.desc && <UIFormDescription {...props}>{field.desc}</UIFormDescription>
  )
}

export default Form
