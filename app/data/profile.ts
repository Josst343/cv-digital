export const profile = {
  name: "JOSUE MISAEL FLORES FERNANDEZ",
  role: "Senior Backend Developer | Java · Spring Boot · Microservicios",
  intro:
    "Desarrollador de software con experiencia desde 2020 en los sectores financiero y retail, especializado en desarrollo backend con Java y Spring Boot. Actualmente trabajo con Java 21 y Spring Boot 3.5.14. He liderado iniciativas de optimización, desarrollo de APIs y microservicios, análisis de incidentes y remediación de vulnerabilidades. En una medición de una hora antes y después de un cambio, Datadog registró una reducción del tiempo máximo de respuesta de 14.98 s a 9.60 s y del promedio de 2.77 s a 2.70 s. Experiencia adicional con GraphQL, pruebas automatizadas, Docker y CI/CD.",
  availability: "Abierto a oportunidades en desarrollo backend con Java y Spring Boot.",
  email: "josue5325@gmail.com",
  phone: "+52 551 603 9201",
  copyrightYear: "2026",
};

export const experience = [
  {
    period: "2022 – Actualidad",
    role: "Desarrollador Senior",
    company: "Coppel",
    responsibilities: [
      "Desarrollo y evolución de servicios backend y APIs con Java 21, Spring Boot 3.5.14 y GraphQL.",
      "Lideré una iniciativa de optimización: revisé el pool de conexiones, el consumo de memoria y el ciclo de vida de variables, evaluando cuándo limitar su alcance al método en lugar de mantenerlas globales.",
      "Propuse soluciones al líder técnico y al gerente, participé en su implementación y presenté los resultados a otras células.",
      "En mediciones de una hora antes y después del cambio registradas en Datadog, el tiempo máximo de respuesta pasó de 14.98 s a 9.60 s (36 % menos) y el promedio de 2.77 s a 2.70 s (2.5 % menos).",
      "Análisis y remediación de vulnerabilidades mediante herramientas de seguridad y análisis de código.",
      "Desarrollo y ejecución de pruebas automatizadas con JUnit.",
      "Modernización y contenerización de servicios utilizando Java 17, Maven y Docker.",
      "Análisis de causas raíz y atención de incidentes en servicios durante eventos de alta demanda.",
    ],
  },
  {
    period: "2020 – 2022",
    role: "Software Developer",
    company: "BBVA – Terminal Financiero",
    responsibilities: [
      "Desarrollo y mantenimiento de servicios backend en Java 8 para el terminal financiero.",
      "Implementación y ejecución de pruebas automatizadas para validar cambios de software.",
      "Atención y diagnóstico de incidencias en un entorno operativo financiero.",
      "Mantenimiento evolutivo de servicios, con enfoque en la estabilidad y continuidad operativa.",
    ],
  },
];

export const education = [
  {
    period: "Formación académica",
    title: "Ingeniería de Software",
    institution: "Universidad Autónoma de la Ciudad de México",
    description: "Estudios universitarios incompletos.",
  },
];

export const skills = [
  {
    category: "Lenguajes",
    items: "Java, SQL, JavaScript, Go, C, C++ y C#",
  },
  {
    category: "Backend y arquitectura",
    items: "Spring Boot, APIs REST, GraphQL y microservicios",
  },
  {
    category: "Bases de datos",
    items: "PostgreSQL, MongoDB y optimización de consultas SQL",
  },
  {
    category: "Pruebas y calidad",
    items: "JUnit, pruebas automatizadas y SonarQube",
  },
  {
    category: "DevOps y herramientas",
    items: "Maven, Docker y CI/CD",
  },
  {
    category: "Seguridad de aplicaciones",
    items: "Remediación de vulnerabilidades, Checkmarx, Trend Micro, Apigee, CORS y controles de API",
  },
  {
    category: "Frontend complementario",
    items: "React y JavaScript",
  },
  {
    category: "Colaboración",
    items: "Experiencia de colaboración con equipos internacionales e inglés técnico",
  },
];

export const projects = [
  {
    label: "Caso 01",
    name: "Optimización de rendimiento de un servicio backend",
    description:
      "Lideré la revisión del pool de conexiones, el consumo de memoria y el ciclo de vida de variables. En mediciones de una hora antes y después del cambio en Datadog, el máximo observado bajó de 14.98 s a 9.60 s (36 %) y el promedio de 2.77 s a 2.70 s (2.5 %).",
    technologies: "Java 21, Spring Boot 3.5.14, Datadog",
  },
  {
    label: "Caso 02",
    name: "Modernización y contenerización de servicios",
    description:
      "Actualización de la plataforma y del sistema de compilación para mejorar la consistencia entre entornos y preparar el servicio para el escalamiento horizontal.",
    technologies: "Java 17, Spring Boot, Maven, Docker, CI/CD",
  },
  {
    label: "Caso 03",
    name: "Remediación de vulnerabilidades",
    description:
      "Análisis y atención de hallazgos de seguridad para reducir deuda técnica y fortalecer la protección de la información.",
    technologies: "SonarQube, Checkmarx, Trend Micro",
  },
  {
    label: "Caso 04",
    name: "Atención de incidentes en eventos de alta demanda",
    description:
      "Análisis de causas raíz y apoyo en la mitigación de fallas críticas durante una preventa de alta demanda, contribuyendo a mejorar la estabilidad operativa y reducir errores transaccionales.",
    technologies: "Java, microservicios, herramientas APM",
  },
  {
    label: "Caso 05",
    name: "Controles de seguridad para una API de pagos",
    description:
      "Configuración de controles en la capa de API Gateway para proteger el tráfico de transacciones y los datos de titulares de tarjetas.",
    technologies: "Apigee, PCI DSS, CORS, listas de permitidos",
  },
];
