import type { Metadata } from "next"
export const metadata: Metadata = { title: `Auth | ${process.env.APP_TITLE}` }

const Auth = () => {
  return (
    <section>
      <div className="container">Auth</div>
    </section>
  )
}
export default Auth
