import { FC } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs"
import { Image } from "@/ui/image"
import { Image as ImageType, Product } from "@prisma/client"

type GalleryProps = { product: Product & { images: ImageType[] } }

const Gallery: FC<GalleryProps> = ({ product }) => {
  return (
    <Tabs defaultValue="0" className="grid grid-cols-[60px,1fr] gap-2">
      <TabsList
        className="bg-transparent h-full flex flex-col justify-center items-center gap-4"
        aria-orientation="vertical"
      >
        {[product.image, ...product.images.map((image) => image.src)].map(
          (src, i) => (
            <TabsTrigger key={i} value={i.toString()} className="aspect-1 w-20">
              <Image src={src} alt={`${product.title} Image`} />
            </TabsTrigger>
          )
        )}
      </TabsList>

      {[product.image, ...product.images.map((image) => image.src)].map(
        (src, i) => (
          <TabsContent key={i} value={i.toString()} className="aspect-1 w-full">
            <Image src={src} alt={`${product.title} Image`} />
          </TabsContent>
        )
      )}
    </Tabs>
  )
}
export default Gallery
