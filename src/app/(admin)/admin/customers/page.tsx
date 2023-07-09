import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Customers | ${process.env.APP_TITLE}`,
}

const Customers = () => {
  return (
    <section>
      <div className="container">Customers</div>
    </section>
  )
}
export default Customers
