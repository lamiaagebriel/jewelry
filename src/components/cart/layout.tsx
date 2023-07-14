"use client"

import dynamic from "next/dynamic"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Heading, Paragraph } from "@/ui/typography"

import {
  CartSummary,
  OrderInformationDialog,
  ProductCart,
} from "@/components/cart"

import { CreateCartProps, createCartSchema } from "@/types/validations/cart"
import { CART_ORDER_INFO_FIELDS } from "@/constants/layout"
import { useAppDispatch, useAppSelector, useCart } from "@/constants/store"
import { Button } from "@/ui/button"
import { addOrderInfo } from "@/constants/store/cart"
import { Separator } from "@/ui/separator"
import { SubmitOrderButton } from "@/components/buttons"
import Empty from "@/components/empty"
import { ShoppingCart } from "lucide-react"
import SummaryDataTable from "@/components/summary-data-table"

const CartLayout = () => {
  const cart = useAppSelector(useCart)
  const dispatch = useAppDispatch()
  const form = useForm<CreateCartProps>({
    resolver: zodResolver(createCartSchema),
    defaultValues: {
      payment_method: "CASH",
      name: "",
      phone: "",
      address_line: "",
      zip: "",
      city: "",
      country: "",
    },
  })
  if (!cart.products.length)
    return (
      <Empty
        title={
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-9 h-9 mb-2" />
            CART IS EMPTY.
          </div>
        }
        link={{ to: "/products", title: "Go Shopping" }}
      />
    )

  const onSubmit = async (fields: CreateCartProps) => {
    dispatch(addOrderInfo(fields))
  }

  return (
    <>
      <section>
        <div className="container py-6 flex justify-between items-center gap-4">
          <div className="space-y-2">
            <Heading>Shopping Cart</Heading>
            <Paragraph variant="muted">
              Check the status of recent orders, manage returns, and discover
              similar products.
            </Paragraph>
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-5 md:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,0.5fr] gap-5 md:gap-10">
            <div>
              <Card className="container">
                <div aria-labelledby="cart-heading">
                  <h2 id="cart-heading" className="sr-only">
                    Items in your shopping cart
                  </h2>

                  <ul role="list" className="divide-y">
                    {cart.products.map(({ product, quantity, size }, i) => (
                      <li key={i}>
                        <ProductCart cart={{ product, quantity, size }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-5 md:space-y-10">
              <Card>
                <>
                  <CardHeader>
                    <CardTitle>Summary</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CartSummary cart={cart}>
                      {!cart.order_info && (
                        <OrderInformationDialog form={form} onSubmit={onSubmit}>
                          <Button
                            variant="secondary"
                            size="lg"
                            className="w-full"
                          >
                            Checkout
                          </Button>
                        </OrderInformationDialog>
                      )}
                    </CartSummary>
                  </CardContent>
                </>

                {cart.order_info && (
                  <>
                    <Separator />
                    <CardHeader className="flex flex-row justify-between items-center gap-4 ">
                      <CardTitle>Order Information</CardTitle>
                      <OrderInformationDialog form={form} onSubmit={onSubmit}>
                        <Button variant="secondary">Edit</Button>
                      </OrderInformationDialog>
                    </CardHeader>

                    <CardContent>
                      <SummaryDataTable
                        summaries={CART_ORDER_INFO_FIELDS.map((field) => ({
                          label: field.label,
                          value: cart.order_info
                            ? cart.order_info[field.name]
                            : "---",
                        }))}
                      />

                      <SubmitOrderButton>Checkout</SubmitOrderButton>
                    </CardContent>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default dynamic(() => Promise.resolve(CartLayout), { ssr: false })
