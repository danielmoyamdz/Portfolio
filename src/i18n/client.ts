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
            navigation: {
              home: 'Home',
              about: 'About',
              skills: 'Skills',
              projects: 'Projects',
              contact: 'Contact'
            },
            portfolio: {
              developedBy: 'Portfolio 100% developed by Daniel Moya'
            },
            hero: {
              name: 'Daniel Moya Méndez',
              title: 'Computer Engineer',
              subtitle: 'Building scalable and efficient solutions',
              description: 'Software Engineering professional with solid experience in development and implementation of technological solutions.'
            },
            about: {
              title: 'About Me',
              description: 'Software Engineering professional with strong experience in development and technological solutions implementation. I stand out for my analytical capacity, leadership and teamwork, focused on optimizing processes and achieving strategic objectives. I am proactive and an extroverted person who loves to continuously learn new things.',
              education: {
                title: 'Education',
                degree: 'Computer Engineering Degree in Software Engineering (2020 - 2024)',
                university: 'Universidad de Extremadura',
                skillsTitle: 'Key Skills & Knowledge',
                skills: [
                  'Advanced Software Architecture & Design Patterns',
                  'Full Stack Development & Cloud Computing',
                  'Agile Methodologies & Project Management',
                  'Data Structures & Algorithms Optimization',
                  'DevOps & CI/CD Pipeline Implementation',
                  'Database Design & Performance Optimization',
                  'System Analysis & Requirements Engineering',
                  'AI & Machine Learning Fundamentals'
                ]
              },
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
              languages: [
                'PHP - Drupal 10 module development, REST APIs',
                'Java - Spring Boot microservices, enterprise applications',
                'Python - Data analysis, AI/ML projects, automation scripts',
                'C++ - Game development, performance-critical applications'
              ],
              technologies: {
                ai: 'AI Integration & Machine Learning - TensorFlow, OpenAI API, custom ML models',
                devops: 'Docker, Git, CI/CD pipelines, and Agile methodologies',
                drupal: 'Drupal 10 Backend Developer - Custom modules, themes, and distributions',
                databases: 'Database Management - MySQL, PostgreSQL, MongoDB',
                web: 'Web Development - HTML5, CSS3, JavaScript, React, Node.js, Next.js',
                architecture: 'Software architecture - Microservices, REST APIs, GraphQL, Event-driven systems',
                bi: 'Power BI - Data visualization, reporting, and business intelligence'
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
            navigation: {
              home: 'Inicio',
              about: 'Sobre Mí',
              skills: 'Habilidades',
              projects: 'Proyectos',
              contact: 'Contacto'
            },
            portfolio: {
              developedBy: 'Portfolio 100% desarrollado por Daniel Moya'
            },
            hero: {
              name: 'Daniel Moya Méndez',
              title: 'Ingeniero Informático',
              subtitle: 'Construyendo soluciones escalables y eficientes',
              description: 'Profesional en Ingeniería de Software con experiencia sólida en desarrollo e implementación de soluciones tecnológicas.'
            },
            about: {
              title: 'Sobre Mí',
              description: 'Profesional en Ingeniería de Software con sólida experiencia en el desarrollo y la implementación de soluciones tecnológicas. Destaco por mi capacidad de análisis, liderazgo y trabajo en equipo, orientado a optimizar procesos y alcanzar objetivos estratégicos. Soy proactivo y una persona extrovertida al que le encanta estar aprendiendo cosas nuevas continuamente.',
              education: {
                title: 'Educación',
                degree: 'Grado en Ingeniería Informática en Ingeniería del Software (2020 - 2024)',
                university: 'Universidad de Extremadura',
                skillsTitle: 'Habilidades y Conocimientos Clave',
                skills: [
                  'Arquitectura de Software Avanzada & Patrones de Diseño',
                  'Desarrollo Full Stack & Computación en la Nube',
                  'Metodologías Ágiles & Gestión de Proyectos',
                  'Estructuras de Datos & Optimización de Algoritmos',
                  'DevOps & Implementación de Pipelines CI/CD',
                  'Diseño de Bases de Datos & Optimización de Rendimiento',
                  'Análisis de Sistemas & Ingeniería de Requisitos',
                  'Fundamentos de IA & Machine Learning'
                ]
              },
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
              languages: [
                'PHP - Desarrollo de módulos Drupal 10, APIs REST, servicios personalizados',
                'Java - Microservicios con Spring Boot, aplicaciones empresariales',
                'Python - Análisis de datos, proyectos de IA/ML, scripts de automatización',
                'C++ - Desarrollo de juegos, aplicaciones críticas de rendimiento'
              ],
              technologies: {
                ai: 'Integración de IA y Machine Learning - TensorFlow, OpenAI API, modelos ML personalizados',
                devops: 'Docker, Git, pipelines CI/CD y metodologías ágiles',
                drupal: 'Desarrollador Backend de Drupal 10 - Módulos, temas y distribuciones personalizadas',
                databases: 'Gestión de Bases de Datos - MySQL, PostgreSQL, MongoDB, Redis',
                web: 'Desarrollo Web - HTML5, CSS3, JavaScript, React, Node.js, Next.js',
                architecture: 'Arquitectura de Software - Microservicios, APIs REST, GraphQL, sistemas basados en eventos',
                bi: 'Power BI - Visualización de datos, reporting e inteligencia empresarial'
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