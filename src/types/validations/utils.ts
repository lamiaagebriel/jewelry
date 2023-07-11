import { z } from "zod"

export const req_type_message = (title: string, type: string) => {
  return {
    required_error: `${title} is required.`,
    invalid_type_error: `${title} must be a ${type}.`,
  }
}

export const req_string = (title: string) => {
  return z
    .string(req_type_message(title, "string"))
    .nonempty(`${title} is required.`)
}
export const req_positive_number = (title: string) => {
  return z
    .number(req_type_message(title, "number"))
    .min(0, `${title} must be positive.`)
}
