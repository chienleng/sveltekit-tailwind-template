import adapter from '@sveltejs/adapter-auto';
/* https://github.com/sveltejs/kit/tree/master/packages/adapter-static
	- use adapter-static to generate static site.
*/
// import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({ postcss: true })
	],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
