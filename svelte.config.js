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
		adapter: adapter()
	}
};

export default config;
