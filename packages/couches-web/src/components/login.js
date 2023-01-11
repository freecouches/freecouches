import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

const Login = () => {
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)

  const handleSubmit = event => {
    event.preventDefault()
    if (handleLogin({ email, password }) !== false) {
      navigate(`/app/profile`)
    }
  }

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  } else {
    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <label>
            Email{` `}
            <input
              type="text"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>{" "}
          <br />
          <br />
          <label>
            Password{` `}
            <input
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>{" "}
          <br /> <br />
          <input type="submit" value="Log In" onClick={e => handleSubmit(e)} />
        </form>
      </>
    )
  }
}

export default Login
