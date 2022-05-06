import { slugFromPath } from "$lib/utils";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	console.log('sono nel file typescript')
	const modules = import.meta.glob(`./*.{md,svx,svelte.md}`);

	let match;
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.projectName) {
			match = [path, resolver];
			break;
		}
	}

	if (!match) {
		return {
			status: 404
		};
	}

	const post = await match[1]();

	return {
		body: {
			content: post.default, 
			metadata: post.metadata
		}
	};
}