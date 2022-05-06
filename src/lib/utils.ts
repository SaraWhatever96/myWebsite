export const slugFromPath = (path) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
export const domainUrl = process.env.NODE_ENV === 'production' ? 'https://www.saracosmai.com/' : 'http://localhost:3000/';
