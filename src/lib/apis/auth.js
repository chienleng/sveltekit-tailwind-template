import decode from "jwt-decode"

const apiRoot = import.meta.env.VITE_API_ROOT

export function signIn({ username, password }) {
  return fetch(`${apiRoot}/v1/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => res.json())
}

export function setToken(token) {
  console.log(decode(token))
}