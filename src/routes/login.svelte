
<script>
import { session } from '$app/stores'
import { goto } from '$app/navigation'
import { isAuthenticated } from '../lib/stores/auth.js'
import decode from "jwt-decode"
import { signIn, setToken } from '$lib/apis/auth'

async function handleLogin() {

  // fetch(`${$session.apiRoot}/v1/login`, {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     username: 'steven@steventan.com.au',
  //     password: 'stan'
  //   })
  // }).then(res => res.json())
  // .then(data => console.log(data))

  const res = await signIn({
      username: 'steven@steventan.com.au',
      password: 'stan'
    })

  if (res) [
    setToken(res.token)
  ]

  isAuthenticated.set(!$isAuthenticated)
  // goto('/')
}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<form action="#">
  <button class="btn-blue" on:click={handleLogin}>
    {#if $isAuthenticated}
      Logout
    {:else}
      Login
    {/if}
  </button>
</form>

<a href="/">Home</a>


