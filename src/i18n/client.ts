'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Asegurarse de que i18n no esté ya inicializado
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      resources: {
        en: {
          translation: {
            hero: {
              title: 'Software Developer',
              subtitle: 'Building scalable and efficient solutions',
              description: 'Software Engineering professional with solid experience in development and implementation of technological solutions.'
            },
            about: {
              title: 'About Me',
              description: 'Software Engineering professional with strong experience in development and technological solutions implementation. I stand out for my analytical capacity, leadership and teamwork, focused on optimizing processes and achieving strategic objectives. I am proactive and an extroverted person who loves to continuously learn new things.',
              education: 'Computer Engineering Degree in Software Engineering (2020 - 2024)',
              university: 'Universidad de Extremadura',
              experience: {
                title: 'Experience',
                current: {
                  company: 'FACTORIAL GMBH (2024-2025)',
                  role: 'Drupal 10 Backend Development',
                  description: 'Creation and maintenance of modules, AI integrations, prototype creation, open source contributions, website updates, and content migrations. Remote work.'
                }
              }
            },
            skills: {
              title: 'Skills',
              backend: 'Backend Development',
              databases: 'Databases',
              tools: 'DevOps & Tools',
              languages: ['PHP', 'Java', 'Python', 'C++'],
              technologies: {
                ai: 'Artificial Intelligence',
                devops: 'Docker, Git and Agile methodologies',
                drupal: 'Drupal 10 Backend Developer',
                databases: 'Database Management (SQL, NoSQL)',
                web: 'Web Development (HTML, CSS, JavaScript, React, Node.js)',
                architecture: 'Software architecture and microservices design',
                bi: 'Power BI'
              }
            },
            projects: {
              title: 'Projects',
              viewProject: 'View Project'
            },
            contact: {
              title: 'Contact',
              email: 'danielmoya2002@gmail.com',
              phone: '+34 675 837 275',
              address: 'Calle La Bosca, 6, 12530, Castellón de la Plana',
              linkedin: 'https://www.linkedin.com/in/daniel-moya-mendez',
              drupal: 'https://www.drupal.org/u/daniel_mm02'
            },
            languages: {
              title: 'Languages',
              spanish: 'Spanish - Native',
              english: 'English - Advanced',
              italian: 'Italian - Basic'
            }
          }
        },
        es: {
          translation: {
            hero: {
              title: 'Desarrollador de Software',
              subtitle: 'Construyendo soluciones escalables y eficientes',
              description: 'Profesional en Ingeniería de Software con experiencia sólida en desarrollo e implementación de soluciones tecnológicas.'
            },
            about: {
              title: 'Sobre Mí',
              description: 'Profesional en Ingeniería de Software con sólida experiencia en el desarrollo y la implementación de soluciones tecnológicas. Destaco por mi capacidad de análisis, liderazgo y trabajo en equipo, orientado a optimizar procesos y alcanzar objetivos estratégicos. Soy proactivo y una persona extrovertida al que le encanta estar aprendiendo cosas nuevas continuamente.',
              education: 'Grado en Ingeniería Informática en Ingeniería del Software (2020 - 2024)',
              university: 'Universidad de Extremadura',
              experience: {
                title: 'Experiencia',
                current: {
                  company: 'FACTORIAL GMBH (2024-2025)',
                  role: 'Desarrollo Backend de Drupal 10',
                  description: 'Creación y mantenimiento de módulos, integraciones con Inteligencia Artificial, creación de prototipos, contribuciones de código abierto, actualizaciones de sitios web y migraciones de contenido. Trabajo en remoto.'
                }
              }
            },
            skills: {
              title: 'Habilidades',
              backend: 'Desarrollo Backend',
              databases: 'Bases de Datos',
              tools: 'DevOps y Herramientas',
              languages: ['PHP', 'Java', 'Python', 'C++'],
              technologies: {
                ai: 'Inteligencia Artificial',
                devops: 'Dockers, Git y metodologías ágiles',
                drupal: 'Desarrollador Backend de Drupal 10',
                databases: 'Gestión de Bases de Datos (SQL, NoSQL)',
                web: 'Desarrollo Web (HTML, CSS, JavaScript, React, Node.js)',
                architecture: 'Diseño de arquitecturas de software y microservicios',
                bi: 'Power BI'
              }
            },
            projects: {
              title: 'Proyectos',
              viewProject: 'Ver Proyecto'
            },
            contact: {
              title: 'Contacto',
              email: 'danielmoya2002@gmail.com',
              phone: '+34 675 837 275',
              address: 'Calle La Bosca, 6, 12530, Castellón de la Plana',
              linkedin: 'https://www.linkedin.com/in/daniel-moya-mendez',
              drupal: 'https://www.drupal.org/u/daniel_mm02'
            },
            languages: {
              title: 'Idiomas',
              spanish: 'Español - Nativo',
              english: 'Inglés - Avanzado',
              italian: 'Italiano - Básico'
            }
          }
        }
      },
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      }
    });
}

export default i18n; 