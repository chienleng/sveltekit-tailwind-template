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

<script>
import { isAuthenticated } from '../lib/stores/auth.js'

function handleLogin() {
  isAuthenticated.set(!$isAuthenticated)
}
</script>
