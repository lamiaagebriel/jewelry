import { z } from "zod"
import { en_characters, req_string, req_type_message } from "./utils"
import { PaymentMethod } from "@prisma/client"

export const createCartSchema = z.object({
  payment_method: z.enum([PaymentMethod.CASH, PaymentMethod.PAYPAL]),
  // payment_method: en_characters(req_string("payment method")),
  name: en_characters(req_string("full name")),
  phone: req_string("phone number").regex(
    /^01[0,1,2,5][0-9]{8}$/,
    "only an egyptian phone number is valid."
  ),
  address_line: z
    .string(req_type_message("payment method", "string"))
    .optional(),
  zip: req_string("zip").regex(/^\d{5}$/, "Only egyptian zip is valid."),
  city: en_characters(req_string("city")),
  country: en_characters(req_string("country")),
})

export interface CreateCartProps extends z.infer<typeof createCartSchema> {}
