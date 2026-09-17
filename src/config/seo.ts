export const SITE_URL = "https://bari-dental-clinic-nine.vercel.app";

export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;
  return `${SITE_URL}${normalized}`;
}
