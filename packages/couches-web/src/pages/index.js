import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
      <StaticImage
        src="../images/couch-square.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Couch Logo"
      />
      <h1>
        Welcome to <b>FreeCouches!</b>
      </h1>
    </div>
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/app/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
