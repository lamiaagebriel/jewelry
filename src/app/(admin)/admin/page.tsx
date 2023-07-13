import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Overview | ${process.env.APP_TITLE}`,
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs"
import { OverviewChart, RecentSales, Stats } from "@/components/overview"
import { Heading } from "@/ui/typography"
import { OVERVIEW_CHART_DATA, STATS_CARDS } from "@/constants/layout"

const Overview = () => {
  return (
    <section>
      <div className="container py-4 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <Heading variant="h3">Dashboard</Heading>
          {/* <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div> */}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Stats {...STATS_CARDS} />

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <OverviewChart data={OVERVIEW_CHART_DATA} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Overview
