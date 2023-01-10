import React from "react"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import { StaticImage } from "gatsby-plugin-image"

export default function NavBar({ siteTitle }) {
  return (
    <header>
      <div
        style={{
          display: "flex",
          flex: "2",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #d1c1e0",
        }}
      >
        <div style={{ alignItems: "center" }}>
          <StaticImage
            src="../images/couch-square.png"
            loading="eager"
            width={64}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Couch Logo"
          />
          <Link
            to="/"
            style={{
              fontSize: `var(--font-sm)`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </div>

        <nav>
          <Link to="/">Home</Link>
          {` `}
          <Link to="/app/profile">Profile</Link>
          {` `}
          {isLoggedIn() ? (
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/app/login`))
              }}
            >
              Logout
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
