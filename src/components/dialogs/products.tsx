"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/ui/button"
import { AlertDialogLayout } from "@/components/dialogs/components"
import {
  CreateProductProps,
  createProductSchema,
} from "@/types/validations/products"
import { createProduct } from "@/actions/products/post"
import { useToast } from "@/ui/use-toast"
import { Field } from "@/types/form"
import { SelectItemProps } from "@/ui/select"
import Form from "@/components/form"
import { getSizes } from "@/lib/fn"

const ProductsDialog = ({ categories }: { categories: SelectItemProps[] }) => {
  const { toast } = useToast()
  const form = useForm<CreateProductProps>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      category: "",
      image: "",
      is_new: true,
      price: 0,
      quantity: 0,
      discount: 0,
    },
  })

  const fields: Field<keyof CreateProductProps>[] = [
    {
      type: "input",
      name: "title",
      label: "Title",
      input: { placeholder: "Sapphire Stud Earrings" },
    },
    { type: "input", name: "image", label: "Image" },
    {
      type: "input",
      name: "slug",
      label: "Slug",
      desc: "it must be unique.",
      input: { placeholder: "sapphire-stud-earrings" },
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      textarea: {
        className: "h-40 resize-none",
        placeholder:
          "Classic sapphire stud earrings featuring round-cut blue sapphires set in 14K white gold.",
      },
    },
    {
      type: "select",
      name: "category",
      label: "Category",
      desc: "create a new category, if it doesn't exist.",
      isNewable: true,
      items: categories,
    },
    {
      type: "input",
      name: "sizes",
      label: "Sizes",
      input: { placeholder: "10, 12.5, 15, 17, 18.3" },
    },
    { type: "input", name: "price", label: "Price", input: { type: "number" } },
    {
      type: "input",
      name: "quantity",
      label: "Quantity",
      input: { type: "number" },
    },
    {
      type: "input",
      name: "discount",
      label: "Discount",
      input: { type: "number" },
    },
    {
      type: "checkbox",
      name: "is_new",
      label: "New Arrival",
    },
  ]

  const onSubmit = async (fields: CreateProductProps) => {
    const data = await createProduct(fields)

    if (data.status === "fields") {
      data.errors.map((error) => {
        if (!error.message) {
          form.clearErrors(error.value)
          return
        }

        form.setError(error.value, { message: error.message })
      })
      return
    }

    if (data.status === "failure") {
      toast({
        variant: "destructive",
        title: "Ooh, something wrong occurred.",
        description: data.error,
      })
      return
    }

    if (data.message) toast({ description: data.message })
    form.reset()
    form.clearErrors()
  }

  return (
    <AlertDialogLayout
      title="Create Product"
      desc="Make changes to your products here. Click save when you're done."
      trigger={<Button>New Product</Button>}
      className="w-full sm:max-w-[600px]"
    >
      <Form
        className="[&>#fields]:space-y-4"
        form={form}
        fields={fields}
        onSubmit={onSubmit}
      />
    </AlertDialogLayout>
  )
}
export default ProductsDialog
