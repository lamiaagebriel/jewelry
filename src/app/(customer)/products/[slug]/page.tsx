import type { Metadata } from "next";
export const metadata: Metadata = {
  title: `Product | ${process.env.APP_TITLE}`,
};

import { FC } from "react";

import { Heading, HeadingVariants, Paragraph } from "@/ui/typography";
import { getProduct, getProducts } from "@/actions";
import { getCurrency, getPrice } from "@/lib/fn";
import { Gallery, ProductSpecifications } from "@/components/products";
import { Product as ProductLaytout } from "@/components/products";
import Link from "next/link";
import { cn } from "@/lib/shadcn-ui";
import { Button, buttonVariants } from "@/ui/button";
import { Calendar, ChevronLeft, Package, Percent, Star, Truck, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { Image } from "@/ui/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { Avatar, AvatarFallback } from "@/ui/avatar";
import { Progress } from "@/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/ui/carousel";
import { Product as ProductCard } from "@/components/products"
import { formatDate } from "@/lib/utils";

type ProductProps = {
  params: { slug: string };
};

const Product: FC<ProductProps> = async ({ params }) => {
  const selectedProduct = await getProduct({ slug: params.slug });
  if (!selectedProduct) throw Error("No Product Found.");

  const products = (await getProducts()).slice(0, 4);

  return (
    <>
      <main className="flex-1">
        <div className="container flex flex-col gap-4 py-4">
          <div className="flex items-center">
            <Link
              href={`/products`}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <ChevronLeft />
              back
            </Link>

            <div className="flex items-center gap-4 text-muted-foreground">
              <p>Product Details</p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="grid gap-4 overflow-hidden lg:grid-cols-2 lg:gap-10">
              <Gallery product={selectedProduct} />

              <div className="space-y-4">

                <div className="flex justify-between items-start gap-20">
                  <div>
                    <Heading variant="h1">{selectedProduct.title}</Heading>
                    <Paragraph variant="muted">{selectedProduct.category}</Paragraph>
                  </div>
                  <Heading variant="h3">
                    {getCurrency(getPrice(selectedProduct.price, selectedProduct.discount))}
                  </Heading>
                </div>
                <ProductSpecifications product={selectedProduct} />

                <Accordion type="single" defaultValue="shopping" collapsible>
                  <AccordionItem value="description">
                    <AccordionTrigger>Description & Fit</AccordionTrigger>
                    <AccordionContent>
                      {selectedProduct?.description ?? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem voluptatibus tenetur at illum beatae labore iure voluptatum minima delectus assumenda eveniet, saepe quisquam nulla dolore. Natus, quisquam. Quisquam, sequi commodi."}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="shopping">
                    <AccordionTrigger>Shopping</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-4">
                        {(
                          [
                            {
                              value: "discount",
                              label: "Discount",
                              icon: <Percent />,
                              children: "Disc 50%",
                            },
                            {
                              value: "Package",
                              label: "package",
                              icon: <Package />,
                              children: "Regular Package",
                            },
                            {
                              value: "delivery-time",
                              label: "Delivery Time",
                              icon: <Calendar />,
                              children: "3-4 Working Days",
                            },
                            {
                              value: "estimated-arrival",
                              label: "Estimated Arrival",
                              icon: <Truck />,
                              children: "10-12 Oct. 2024",
                            },
                          ]).map((e, i) => {
                            const Icon = e?.icon
                            return (
                              <div key={i} className="flex items-center gap-2">
                                <div className="rounded-full bg-muted p-4">
                                  <Button size="icon" className="rounded-full">
                                    {Icon}
                                  </Button>
                                </div>
                                <div>
                                  <h1 className="text-sm text-muted-foreground">
                                    {e?.label}
                                  </h1>
                                  {e?.children}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div>
              <h1>Rating & Reviews</h1>

              <div className="grid gap-4 overflow-hidden lg:grid-cols-2 lg:gap-10">
                <div className="grid grid-cols-[150px,1fr] items-center gap-1">
                  <div>
                    <p className="text-[5rem] font-bold">
                      4.5
                      <span className="text-base font-normal text-muted-foreground">
                        /5
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      (50 new reviews)
                    </p>
                  </div>

                  <div>
                    {Array.from({ length: 5 }).map((e, i) => (
                      <div key={i} className="grid grid-cols-[80px,1fr] gap-1">
                        <div className="flex items-center justify-end gap-1">
                          {Array.from({ length: 5 - i }).map((_, ii) => (
                            <Star
                              key={ii}
                              className="fill-yellow-400 w-4 h-4 text-yellow-400"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1">
                          {5 - i}
                          <Progress value={70 - i * 15} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Card>
                  <CardHeader className="flex flex-row justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        {/* <AvatarImage src={null} /> */}
                        <AvatarFallback>
                          <User className=" w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <CardTitle>Alex Mathio</CardTitle>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(selectedProduct?.created_at)}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      &quot;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Ab quae inventore blanditiis atque eveniet consequatur
                      quidem! Repudiandae laborum repellendus ducimus explicabo
                      repellat vel temporibus officia. Fugit nulla excepturi
                      fugiat incidunt?&quot;
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-6 mt-16 space-y-2">
            <h1>You maight also like: </h1>

            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {[...products, ...products, ...products, ...products]?.map(
                  (e, i) => (
                    <CarouselItem
                      key={i}
                      className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                    >
                      <ProductCard product={e} />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </main>


    </>
  );
};
export default Product;
