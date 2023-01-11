// Toy auth example with hardcoded password

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ email, password }) => {
  if (email === `bsgreenb@gmail.com` && password === `pass`) {
    return setUser({
      email: `bsgreenb@gmail.com`,
      username: `john`,
      name: `Johnny`,
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.email
}

export const logout = callback => {
  setUser({})
  callback()
}
