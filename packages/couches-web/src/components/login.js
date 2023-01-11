import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    // Redirect to profile if logged in.
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <label>
            Username{` `}
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>{" "}
          <br />
          <br />
          <label>
            Password{` `}
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>{" "}
          <br /> <br />
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login
