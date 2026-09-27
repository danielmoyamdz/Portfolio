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

/** Prefix for raw `<img>` / download URLs. Next/Image already applies `basePath`. */
export function publicUrl(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.basePath}${normalized}`;
}
