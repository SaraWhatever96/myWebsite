import { slugFromPath } from "$lib/utils";

export async function get({ url, params }) {
	const modules = import.meta.glob('./[projectName]/*.{md,svx,svelte.md}');

	const projectPromises = [];
	const limit = Number(url.searchParams.get('limit') ?? Infinity);

	if (Number.isNaN(limit)) {
		return {
			status: 400
		};
	}

	for (let [path, resolver] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const promise = resolver().then((project) => ({
			slug,
			...project.metadata
		}));

		projectPromises.push(promise);
	}

	const projects = await Promise.all(projectPromises);
	const publishedProjects = projects.filter((project) => project.published && project.category === params.category).slice(0, limit);

	publishedProjects.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return {
		body: publishedProjects.slice(0, limit)
	};
}