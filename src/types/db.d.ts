type ApiResponse<T> =
  | {
      status: "success"
      message?: string
      data?: T
    }
  | {
      status: "fields"
      errors: { value: keyof T; message: string | null }[]
    }
  | {
      status: "failure"
      error: string
    }
