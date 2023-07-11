import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/shadcn-ui"

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof HeadingVariants> {}
export const HeadingVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "text-3xl font-bold tracking-tight",
      h4: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-xl font-semibold tracking-tight",
      h6: "font-semibold tracking-widest",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
})
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, ...props }, ref) => {
    if (variant === "h1")
      return (
        <h1
          className={cn(HeadingVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      )

    if (variant === "h2")
      return (
        <h2
          className={cn(HeadingVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      )

    if (variant === "h3")
      return (
        <h3
          className={cn(HeadingVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      )
    if (variant === "h4")
      return (
        <h4
          className={cn(HeadingVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      )

    if (variant === "h5")
      return (
        <h5
          className={cn(HeadingVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      )

    return (
      <h6
        className={cn(HeadingVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof ParagraphVariants> {}

export const ParagraphVariants = cva("", {
  variants: {
    variant: {
      default: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <p
        className={cn(ParagraphVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Paragraph.displayName = "Paragraph"

export { Heading, Paragraph }
