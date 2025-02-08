// src/lib/i18n.ts
'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      hero: {
        badge:"Open to Work",
        text:"Estudié Ingeniería Informática por cuatro años antes de enfocarme en ciencia de datos. Actualmente, me especializo en el lenguaje Python, SQL y estoy aprendiendo sobre servicios en la nube como AWS. Mi objetivo es formar parte de una gran empresa, dentro o fuera de Chile, liderando un equipo y creando soluciones basadas en datos. Creo en el poder de la información para transformar industrias y sigo aprendiendo consta",
        buttoncv:"Descargar CV"
      },
      about: {
        title:"Sobre mí",
        text1:"Mi interés por la ciencia de datos surgió al aprender sobre criptomonedas y observar cómo los gráficos y sucesos globales impactaban en su valor. Esto despertó mi curiosidad por el análisis y la predicción de tendencias.",
        text2:"En mi tiempo libre, me enfoco en el crecimiento personal a través de la lectura, podcasts y ejercicio. También disfruto jugar Valorant, donde la estrategia y el trabajo en equipo fortalecen mis habilidades de toma de decisiones y adaptación",
        text3:"Soy de nacionalidad peruana y llevo 13 años en Chile, donde me he adaptado a su cultura. Esta experiencia me ha enseñado a ser flexible y resiliente ante nuevos desafíos. Siempre busco aprender y mejorar en cada aspecto de mi vida.",
        features: {
          webdev: {
            title: "Análista de Datos",
            description: "Analizar grandes volúmenes de datos para extraer insights valiosos."
          },
          design: {
            title: "Ingeniería de Datos",
            description: "Diseñar y construir pipelines de datos eficientes, con un enfoque en la limpieza, transformación y carga (ETL) de datos."
          },
          optimization: {
            title: "Científico de Datos",
            description: "Analizar datos para resolver problemas específicos del negocio y desarrollar estrategias de datos para mejorar la toma de decisiones a nivel empresarial."
          },
          desktop: {
            title: "IA Generativa con LLM:",
            description: "Desarrollo de modelos de lenguaje, enfocándose en la creación y optimización de estos modelos ."
          }
        }
      },
      tech: {
        title:"Tecnologías",
        cat1:"Lenguajes",
        cat2:"Bases de Datos",
        cat3:"Frameworks y Librerías",
        cat4:"Herramientas"
      },
      projects: {
        title: "Proyectos",
        button1: "Código",
        button2: "Demo",
        projects: {
          pueble: {
            title: "Dashboard - DSL",
            description: "Desarrollada para Dirección de Servicios y Logística de la Universidad de Tarapacá, con el objetivo de gestionar las órdenes de trabajo."
          }
        }
      },
      certs: {
        title:"Certificados",
        button:"Click para ver más",
        emitido:"Emitido por"
      },
      contact: {
        title: "Contáctame",
        form: {
          title: "Contacto",
          name: "Nombre",
          email: "Correo electrónico",
          subject: "Asunto",
          message: "Tu mensaje...",
          sendButton: "Enviar Mensaje",
          sending: "Enviando...",
          success: {
            title: "¡Mensaje enviado!",
            description: "Gracias por contactarte conmigo. Te responderé lo antes posible."
          },
          error: {
            title: "Error",
            description: "No se pudo enviar el mensaje. Por favor, intenta nuevamente."
          }
        },
        info: {
          location: {
            title: "Ubicación",
            content: "Arica, Chile"
          },
          email: {
            title: "Correo Electrónico",
            content: "danielsam.fergu@gmail.com"
          },
          whatsapp: {
            title: "WhatsApp",
            content: "(+56) 934681636"
          }
        }
      }
    }
  },
  en: {
    translation: {
      hero: {
        badge: "Open to Work",
        text: "I studied Computer Engineering for four years before focusing on Data Science. Currently, I specialize in Python, SQL, and I am learning about cloud services like AWS. My goal is to be part of a major company, either in Chile or abroad, leading a team and creating data-driven solutions. I believe in the power of information to transform industries, and I am continuously learning.",
        buttoncv: "Download CV"
      },
      about: {
        title: "About me",
        text1: "My interest in data science arose when I learned about cryptocurrencies and observed how charts and global events impacted their value. This sparked my curiosity about data analysis and trend prediction.",
        text2: "In my free time, I focus on personal growth through reading, podcasts, and exercise. I also enjoy playing Valorant, where strategy and teamwork strengthen my decision-making and adaptability skills.",
        text3: "I am of Peruvian nationality and have been living in Chile for 13 years, where I have adapted to its culture. This experience has taught me to be flexible and resilient in the face of new challenges. I am always looking to learn and improve in every aspect of my life.",
        features: {
          webdev: {
              title: "Data Analyst",
              description: "Analyze large volumes of data to extract valuable insights."
          },
          design: {
              title: "Data Engineering",
              description: "Design and build efficient data pipelines, focusing on data cleaning, transformation, and loading (ETL)."
          },
          optimization: {
              title: "Data Scientist",
              description: "Analyze data to solve specific business problems and develop data strategies to improve decision-making at the enterprise level."
          },
          desktop: {
              title: "Generative AI with LLM:",
              description: "Develop language models, focusing on the creation and optimization of these models."
          }
      }
      },
      tech: {
        title: "Technologies",
        cat1: "Languages",
        cat2: "Databases",
        cat3: "Frameworks and Libraries",
        cat4: "Tools"
      },
      projects: {
        title: "Projects",
        button1: "Code",
        button2: "Demo",
        projects: {
          pueble: {
            title: "Dashboard - DSL",
            description: "Developed for the Directorate of Services and Logistics of the University of Tarapacá, with the aim of managing work orders."
          }
        }
      },
      certs: {
        title: "Certificates",
        button: "Click to see more",
        emitido: "Issued by"
      },
      contact: {
        title: "Contact Me",
        form: {
          title: "Contact",
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Your message...",
          sendButton: "Send Message",
          sending: "Sending...",
          success: {
            title: "Message sent!",
            description: "Thank you for contacting me. I will respond as soon as possible."
          },
          error: {
            title: "Error",
            description: "Could not send message. Please try again."
          }
        },
        info: {
          location: {
            title: "Location",
            content: "Arica, Chile"
          },
          email: {
            title: "Email",
            content: "danielsam.fergu@gmail.com"
          },
          whatsapp: {
            title: "WhatsApp",
            content: "(+56) 934681636"
          }
        }
      }
    }
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;