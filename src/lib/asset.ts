// Prefix a public/ path with the site's base so links work under /Sensor-to-Decision/.
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
