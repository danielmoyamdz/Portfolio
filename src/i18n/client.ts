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
                degree: 'Computer Engineering Degree in Software Engineering',
                university: 'Universidad de Extremadura (2020 - 2024)',
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
                  company: 'Factorial GmbH (2024-2025)',
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
              },
              open: 'Open PDF'
            },
            projects: {
              title: 'Projects',
              viewProject: 'View Project'
            },
            testimonials: {
              title: 'Professional Recommendations',
              contact: 'Contact',
              alvaro: {
                position: 'Backend People Lead',
                content: `I am delighted to write this letter of recommendation for Daniel Moya, who worked under my supervision at Factorial.io. Daniel joined us as an intern for six months, after which we offered him a full-time contract due to the exceptional potential we saw in him.

During his internship, Daniel initially faced challenges adapting to a remote working environment and communicating in English. However, he quickly demonstrated his ability to adapt and thrive, overcoming these obstacles with determination and a proactive attitude. His growth during this period was remarkable, and it was clear that he possessed the skills and mindset to succeed in our team.

Daniel is an honest, hardworking individual with a genuine desire to improve. He consistently brought enthusiasm and dedication to his role, making him a pleasure to work with. I am confident that he will be an asset to any team fortunate enough to have him.`
              },
              natalia: {
                position: 'Lead Developer | Data Science, ML & AI',
                content: `I had the pleasure of working with Daniel on several projects at Factorial, and he is a dedicated and skilled developer apprentice. He has experience with Drupal development and open-source PHP applications like Mautic, along with knowledge of working with LLMs and prompt engineering to develop AI agents and chatbots.

His ability to adapt to new technologies and programming languages, such as JavaScript and Python, even under tight deadlines, is impressive. Beyond his technical skills, he is organized, receptive to feedback, and a great team player—always bringing a positive and proactive attitude. His strong English skills and flexibility make him a valuable addition to any team.`
              }
            },
            conference: {
              title: 'Conference & Public Speaking',
              event: 'Drupal Developer Days 2025 – Speaker',
              description: 'I had the amazing opportunity to present my session at the Drupal Developer Days 2025 in Leuven, Belgium, sharing my journey from the initial challenges to the milestones achieved during my first year as a Drupal developer. The event was an incredible experience to connect with the global Drupal community and contribute to its knowledge sharing.',
              linkedin: 'View LinkedIn Post',
              imageAlt: 'Presenting at Drupal Developer Days 2025'
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
            },
            cv: {
              title: 'Curriculum Vitae',
              download: 'Download PDF',
              previous: 'Previous',
              next: 'Next',
              page: 'Page',
              of: 'of',
              error: 'Could not load the PDF. Please try again later.',
              loading: 'Loading PDF...',
              open: 'Open PDF'
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
                degree: 'Grado en Ingeniería Informática en Ingeniería del Software',
                university: 'Universidad de Extremadura (2020 - 2024)',
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
                  company: 'Factorial GmbH (2024-2025)',
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
              },
              open: 'Abrir PDF'
            },
            projects: {
              title: 'Proyectos',
              viewProject: 'Ver Proyecto'
            },
            testimonials: {
              title: 'Recomendaciones Profesionales',
              contact: 'Contacto',
              alvaro: {
                position: 'Líder de Equipo Backend',
                content: `Me complace escribir esta carta de recomendación para Daniel Moya, quien trabajó bajo mi supervisión en Factorial.io. Daniel se unió a nosotros como becario durante seis meses, después de lo cual le ofrecimos un contrato a tiempo completo debido al excepcional potencial que vimos en él.

Durante su período de prácticas, Daniel inicialmente enfrentó desafíos al adaptarse a un entorno de trabajo remoto y a comunicarse en inglés. Sin embargo, rápidamente demostró su capacidad para adaptarse y prosperar, superando estos obstáculos con determinación y una actitud proactiva. Su crecimiento durante este período fue notable, y quedó claro que poseía las habilidades y la mentalidad para tener éxito en nuestro equipo.

Daniel es una persona honesta, trabajadora y con un genuino deseo de mejorar. Constantemente aportaba entusiasmo y dedicación a su rol, lo que lo hacía un placer trabajar con él. Estoy seguro de que será un activo valioso para cualquier equipo que tenga la fortuna de contar con él.`
              },
              natalia: {
                position: 'Líder de Desarrollo | Ciencia de Datos, ML & IA',
                content: `Tuve el placer de trabajar con Daniel en varios proyectos en Factorial, y es un desarrollador aprendiz dedicado y hábil. Tiene experiencia en desarrollo con Drupal y aplicaciones PHP de código abierto como Mautic, junto con conocimientos en el trabajo con LLMs e ingeniería de prompts para desarrollar agentes de IA y chatbots.

Su capacidad para adaptarse a nuevas tecnologías y lenguajes de programación, como JavaScript y Python, incluso bajo plazos ajustados, es impresionante. Más allá de sus habilidades técnicas, es organizado, receptivo a la retroalimentación y un excelente compañero de equipo, siempre aportando una actitud positiva y proactiva. Sus sólidas habilidades en inglés y su flexibilidad lo convierten en una valiosa adición a cualquier equipo.`
              }
            },
            conference: {
              title: 'Conferencias & Charlas',
              event: 'Drupal Developer Days 2025 – Ponente',
              description: 'Tuve la oportunidad de presentar mi sesión en los Drupal Developer Days 2025 en Leuven, Bélgica, compartiendo mi experiencia desde los retos iniciales hasta los logros alcanzados durante mi primer año como desarrollador Drupal. El evento fue una experiencia increíble para conectar con la comunidad global de Drupal y contribuir al intercambio de conocimiento.',
              linkedin: 'Ver post en LinkedIn',
              imageAlt: 'Exponiendo en Drupal Developer Days 2025'
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
            },
            cv: {
              title: 'Curriculum Vitae',
              download: 'Descargar PDF',
              previous: 'Anterior',
              next: 'Siguiente',
              page: 'Página',
              of: 'de',
              error: 'No se pudo cargar el PDF. Por favor, inténtalo de nuevo más tarde.',
              loading: 'Cargando PDF...',
              open: 'Abrir PDF'
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