import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Overview | ${process.env.APP_TITLE}`,
}

const Overview = () => {
  return (
    <section>
      <div className="container">Overview</div>
    </section>
  )
}
export default Overview
