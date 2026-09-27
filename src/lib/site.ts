export const SITE = {
  name: 'Daniel Moya Méndez',
  github: 'https://github.com/danielmoyamdz',
  linkedin: 'https://www.linkedin.com/in/daniel-moya-mendez/',
  drupal: 'https://www.drupal.org/u/daniel_mm02',
  email: 'danielmoya2002@gmail.com',
  phone: '+34 675 837 275',
  address: 'Calle La Bosca, 6, 12530, Castellón de la Plana',
  basePath: '/Portfolio',
} as const;

/** Prefix static files for GitHub Pages. next/image with `unoptimized` does not add `basePath`. */
export function publicUrl(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === SITE.basePath || normalized.startsWith(`${SITE.basePath}/`)) {
    return encodeURI(normalized);
  }
  return encodeURI(`${SITE.basePath}${normalized}`);
}
