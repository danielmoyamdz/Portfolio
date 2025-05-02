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
              frontend: 'Frontend Development',
              databases: 'Databases',
              data: 'Data Analysis',
              ai: 'AI & Machine Learning',
              architecture: 'Software Architecture',
              bi: 'Business Intelligence',
              tools: 'DevOps & Tools',
              proficiency: 'Skill Proficiency',
              mastery: 'Mastery Level',
              proficiencyChart: 'Technical Proficiency',
              techStack: 'Technologies & Tools',
              timeline: 'Technology Journey',
              certifications: 'Certifications & Badges',
              viewCertificate: 'View Certificate',
              timelineData: {
                year1: {
                  title: 'Computer Science Fundamentals',
                  description: 'First year focused on mathematical and physical fundamentals and basic programming. Introduction to data structures and computers.',
                  technologies: ['Physics', 'Computer Technology', 'Data Structures', 'Basic Programming']
                },
                year2: {
                  title: 'Development and Networks',
                  description: 'Deepening in software development, databases, networks and concurrent programming. Introduction to Artificial Intelligence.',
                  technologies: ['Algorithm Analysis', 'Databases', 'Networks', 'Concurrent Programming', 'AI']
                },
                year3: {
                  title: 'Software Engineering',
                  description: 'Focus on software engineering, operating systems and network architecture. Development of skills in system design and modeling.',
                  technologies: ['Software Engineering', 'Operating Systems', 'Network Architecture', 'System Design']
                },
                year4: {
                  title: 'Specialization and Final Project',
                  description: 'Specialization in enterprise architectures, network security and data mining. Development of the Final Project on cyber attack analysis.',
                  technologies: ['Enterprise Architectures', 'Project Management', 'Network Security', 'Data Mining', 'Cybersecurity TFG']
                },
                year5: {
                  title: 'Professional Experience',
                  description: 'Backend Development at Factorial GmbH, a German company based in Hamburg. Remote work focused on Drupal 10 development, AI integrations, and open source contributions.',
                  technologies: ['Drupal 10', 'AI Integration', 'Open Source', 'Remote Work', 'Backend Development']
                }
              },
              languages: [
                'PHP - Drupal 10 module development, REST APIs',
                'Java - Spring Boot microservices, enterprise applications',
                'Python - Data analysis, AI/ML projects, automation scripts',
                'C++ - Game development, performance-critical applications'
              ],
              techDetails: {
                backend: 'Node.js, Java, PHP, Python',
                frontend: 'React, Next.js, HTML5, CSS3',
                databases: 'MySQL, PostgreSQL, MongoDB',
                devops: 'Docker, Git, CI/CD, Agile methodologies',
                ai: 'TensorFlow, OpenAI API, custom models',
                data: 'Python, Power BI, visualization & reporting',
                architecture: 'Microservices, REST APIs, GraphQL, event-driven systems',
                bi: 'Power BI, reporting, business intelligence'
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
                  'Arquitectura de Software Avanzada y Patrones de Diseño',
                  'Desarrollo Full Stack y Computación en la Nube',
                  'Metodologías Ágiles y Gestión de Proyectos',
                  'Estructuras de Datos y Optimización de Algoritmos',
                  'DevOps e Implementación de Pipelines CI/CD',
                  'Diseño de Bases de Datos y Optimización de Rendimiento',
                  'Análisis de Sistemas e Ingeniería de Requisitos',
                  'Fundamentos de IA y Machine Learning'
                ]
              },
              experience: {
                title: 'Experiencia',
                current: {
                  company: 'FACTORIAL GMBH (2024-2025)',
                  role: 'Desarrollo Backend en Drupal 10',
                  description: 'Creación y mantenimiento de módulos, integraciones con IA, creación de prototipos, contribuciones de código abierto, actualizaciones de sitios web y migraciones de contenido. Trabajo en remoto.'
                }
              }
            },
            skills: {
              title: 'Habilidades',
              backend: 'Desarrollo Backend',
              frontend: 'Desarrollo Frontend',
              databases: 'Bases de Datos',
              data: 'Análisis de Datos',
              ai: 'IA y Machine Learning',
              architecture: 'Arquitectura de Software',
              bi: 'Business Intelligence',
              tools: 'DevOps y Herramientas',
              proficiency: 'Nivel de Habilidad',
              mastery: 'Nivel de Dominio',
              proficiencyChart: 'Competencia Técnica',
              techStack: 'Tecnologías y Herramientas',
              timeline: 'Trayectoria Tecnológica',
              certifications: 'Certificaciones y Badges',
              viewCertificate: 'Ver Certificado',
              timelineData: {
                year1: {
                  title: 'Fundamentos de la Computación',
                  description: 'Primer año enfocado en fundamentos matemáticos, físicos y programación básica. Introducción a la estructura de datos y computadores.',
                  technologies: ['Física', 'Tecnología de Computadores', 'Estructura de Datos', 'Programación Básica']
                },
                year2: {
                  title: 'Desarrollo y Redes',
                  description: 'Profundización en desarrollo de software, bases de datos, redes y programación concurrente. Introducción a la Inteligencia Artificial.',
                  technologies: ['Análisis de Algoritmos', 'Bases de Datos', 'Redes', 'Programación Concurrente', 'IA']
                },
                year3: {
                  title: 'Ingeniería de Software',
                  description: 'Enfoque en ingeniería de software, sistemas operativos y arquitectura de redes. Desarrollo de habilidades en diseño y modelado de sistemas.',
                  technologies: ['Ingeniería de Software', 'Sistemas Operativos', 'Arquitectura de Redes', 'Diseño de Sistemas']
                },
                year4: {
                  title: 'Especialización y Proyecto Final',
                  description: 'Especialización en arquitecturas empresariales, seguridad en redes y minería de datos. Desarrollo del TFG sobre análisis de ataques cibernéticos.',
                  technologies: ['Arquitecturas Empresariales', 'Gestión de Proyectos', 'Seguridad en Redes', 'Minería de Datos', 'TFG en Ciberseguridad']
                },
                year5: {
                  title: 'Experiencia Profesional',
                  description: 'Desarrollo Backend en Factorial GmbH, empresa alemana con sede en Hamburgo. Trabajo en remoto centrado en desarrollo con Drupal 10, integraciones con IA y contribuciones de código abierto.',
                  technologies: ['Drupal 10', 'Integración IA', 'Código Abierto', 'Teletrabajo', 'Desarrollo Backend']
                }
              },
              languages: [
                'PHP - Desarrollo de módulos Drupal 10, APIs REST',
                'Java - Microservicios con Spring Boot, aplicaciones empresariales',
                'Python - Análisis de datos, proyectos de IA/ML, scripts de automatización',
                'C++ - Desarrollo de juegos, aplicaciones críticas de rendimiento'
              ],
              techDetails: {
                backend: 'Desarrollo Backend - Node.js, Java, PHP, Python',
                frontend: 'Desarrollo Frontend - React, Next.js, HTML5, CSS3',
                databases: 'Gestión de Bases de Datos - MySQL, PostgreSQL, MongoDB',
                devops: 'DevOps y Automatización - Docker, Git, CI/CD, metodologías ágiles',
                ai: 'Integración de IA y Machine Learning - TensorFlow, OpenAI API, modelos personalizados',
                data: 'Análisis de Datos - Python, Power BI, visualización y reporting',
                architecture: 'Arquitectura de Software - Microservicios, APIs REST, GraphQL, sistemas basados en eventos',
                bi: 'Business Intelligence - Power BI, reporting, inteligencia empresarial'
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