import type { Metadata } from "next"
export const metadata: Metadata = { title: `Home | ${process.env.APP_TITLE}` }

const Home = () => {
  return (
    <section>
      <div className="container">Home</div>
    </section>
  )
}
export default Home
