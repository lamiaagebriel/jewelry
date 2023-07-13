import { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Heading, Paragraph } from "@/ui/typography"
import { LucideIcon } from "lucide-react"

export type StatProps = {
  title: string
  icon: LucideIcon
  indicator: string
  value: number
  description: string
}

export type StatsProps = {
  cards: StatProps[]
}

const Stats: FC<StatsProps> = ({ cards }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {<card.icon className="h-4 w-4 text-muted-foreground" />}
          </CardHeader>
          <CardContent>
            <Heading variant="h4">
              {card.indicator}
              {card.value.toFixed(1)}
            </Heading>
            <Paragraph variant="muted">{card.description}</Paragraph>
          </CardContent>
        </Card>
      ))}
    </div>

    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    //         <CardTitle className="text-sm font-medium">Sales</CardTitle>

    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">+12,234</div>
    //         <p className="text-xs text-muted-foreground">
    //           +19% from last month
    //         </p>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    //         <CardTitle className="text-sm font-medium">
    //           Active Now
    //         </CardTitle>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   strokeWidth="2"
    //   className="h-4 w-4 text-muted-foreground"
    // >
    //   <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    // </svg>
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">+573</div>
    //         <p className="text-xs text-muted-foreground">
    //           +201 since last hour
    //         </p>
    //       </CardContent>
    //     </Card>
    //   </div>
  )
}
export default Stats
