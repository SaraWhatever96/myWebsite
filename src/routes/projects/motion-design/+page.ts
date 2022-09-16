
	export async function load() {
  const projects = await Promise.all(
    Object.entries(import.meta.glob(`/src/routes/projects/motion-design/*.svx`)).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
  category: 'motion-design',
  projects,
}
}
