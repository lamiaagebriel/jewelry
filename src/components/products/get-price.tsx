import { getCurrency, getPrice } from "@/lib/fn"
import { cn } from "@/lib/shadcn-ui"
import { Paragraph } from "@/ui/typography"
import { Product } from "@prisma/client"
import { FC } from "react"

type GetPriceProps = Pick<Product, "price" | "discount"> & {
  className?: string
}

const GetPrice: FC<GetPriceProps> = ({ price, discount, className }) => {
  return (
    <div className="inline-flex items-center justify-center gap-2">
    {discount > 0 && (
        <Paragraph variant="muted" className={className}>
          {getCurrency(getPrice(price, discount))}
        </Paragraph>
      )}
      
         <Paragraph
        variant="muted"
        className={(discount > 0 && "line-through text-destructive") || ""}
      >
        {getCurrency(price)}
      </Paragraph>

      
    </div>
  )
}
export default GetPrice
