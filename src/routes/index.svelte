<script context="module">
	export async function load(context) {
		console.log(context);
		// if (!session?.user) {
		// 	return {
		// 		status: 302,
		// 		redirect: '/login',
		// 	};
		// }
		return {
			props: {
				user: ''
			}
		};
	}
</script>

<script>
	import { isAuthenticated } from '../lib/stores/auth.js';

	function handleLogin() {
		isAuthenticated.set(!$isAuthenticated);
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1 class="text-3xl font-bold underline text-red-600">
	Hello world! {$isAuthenticated}
</h1>

<button class="btn btn-sm btn-secondary" on:click={handleLogin}>
	{#if $isAuthenticated}
		Logout
	{:else}
		Login
	{/if}
</button>

<nav class="flex justify-center space-x-4">
	<a href="/dashboard" class="nav-link">Home</a>
	<a href="/team" class="nav-link">Team</a>
	<a href="/projects" class="nav-link">Projects</a>
	<a href="/reports" class="nav-link">Reports</a>
</nav>

<style lang="postcss">
	.nav-link {
		@apply font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900;
	}
</style>
