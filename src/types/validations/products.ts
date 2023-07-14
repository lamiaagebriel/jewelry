import { z } from "zod"
import { req_positive_number, req_string, req_type_message } from "./utils"

export const productSchema = z.object({
  id: req_string("id"),
  slug: req_string("slug").regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "no spaces, only symbol - is allowed."
  ),
  title: req_string("title"),
  image: req_string("image"),
  description: req_string("description"),
  category: req_string("category"),
  price: req_positive_number("price"),
  sizes: req_string("sizes").regex(
    /^\s*\d+(?:\.\d+)?(?:\s*,\s*\d+(?:\.\d+)?)*\s*$/,
    "invalid format, write it carefully."
  ),
  quantity: req_positive_number("quantity").int(
    "quantity must be only integer."
  ),
  discount: req_positive_number("discount").max(
    100,
    "discount is a percentage from the price, so it's between 0 and 100."
  ),
  is_new: z.boolean().default(false).optional(),
})

// -------------------- Create
export const createProductSchema = productSchema.pick({
  title: true,
  slug: true,
  description: true,
  category: true,
  price: true,
  quantity: true,
  discount: true,
  is_new: true,
  image: true,
  sizes: true,
})

export interface CreateProductProps
  extends z.infer<typeof createProductSchema> {}
