export const profile = {
  name: "JOSUE MISAEL FLORES FERNANDEZ",
  role: "Senior Backend Developer | Java 21 · Spring Boot · Microservicios",
  intro:
    "Desarrollador backend con experiencia desde 2020 en finanzas y retail, especializado en Java 21 y Spring Boot 3.5.14. He liderado mejoras de rendimiento en APIs y microservicios, además de trabajar en seguridad y estabilidad operativa.",
  highlights: [
    "Java 21, Spring Boot 3.5.14 y microservicios",
    "36 % menos en el tiempo máximo de respuesta, según mediciones comparativas en Datadog",
    "Optimización de APIs, remediación de vulnerabilidades y pruebas automatizadas",
  ],
  availability: "Abierto a oportunidades remotas o híbridas desde Ciudad de México.",
  email: "josue5325@gmail.com",
  phone: "+52 551 603 9201",
  linkedin: "https://www.linkedin.com/in/josue-flores-623a681a3/",
  github: "https://github.com/Josst343",
  copyrightYear: "2026",
};

export const experience = [
  {
    period: "2022 – Actualidad",
    role: "Desarrollador Senior",
    company: "Coppel",
    responsibilities: [
      "Desarrollé y evolucioné servicios backend y APIs con Java 21, Spring Boot 3.5.14 y GraphQL.",
      "Lideré una iniciativa de optimización: revisé el pool de conexiones, el consumo de memoria y el ciclo de vida de variables, evaluando cuándo limitar su alcance al método en lugar de mantenerlas globales.",
      "Propuse soluciones al líder técnico y al gerente, colaboré en su implementación y presenté los resultados a otras células.",
      "Medí y validé en Datadog la reducción del tiempo máximo de respuesta de 14.98 s a 9.60 s (36 %) y del promedio de 2.77 s a 2.70 s (2.5 %).",
      "Analicé y remedié vulnerabilidades con herramientas de seguridad y análisis de código.",
      "Implementé y ejecuté pruebas automatizadas con JUnit.",
      "Modernicé y empaqueté servicios en contenedores con Java 17, Maven y Docker.",
      "Investigué causas raíz y atendí incidentes durante eventos de alta demanda.",
    ],
  },
  {
    period: "2020 – 2022",
    role: "Software Developer",
    company: "BBVA – Terminal Financiero",
    responsibilities: [
      "Desarrollé y mantuve servicios backend en Java 8 para el terminal financiero.",
      "Implementé y ejecuté pruebas automatizadas para validar cambios de software.",
      "Diagnostiqué y atendí incidencias en un entorno operativo financiero.",
      "Evolucioné servicios con enfoque en estabilidad y continuidad operativa.",
    ],
  },
];

export const education = [
  {
    period: "Formación académica",
    title: "Ingeniería de Software",
    institution: "Universidad Autónoma de la Ciudad de México",
    description: "Formación universitaria en Ingeniería de Software.",
  },
];

export const skills = [
  {
    category: "Stack principal",
    items: "Java 21, Spring Boot 3.5.14, microservicios, PostgreSQL, Docker y Apigee",
    featured: true,
  },
  {
    category: "Backend y arquitectura",
    items: "APIs REST y GraphQL",
    featured: false,
  },
  {
    category: "Bases de datos",
    items: "PostgreSQL, MongoDB y optimización de consultas SQL",
    featured: false,
  },
  {
    category: "Pruebas y calidad",
    items: "JUnit, pruebas automatizadas y SonarQube",
    featured: false,
  },
  {
    category: "Ecosistema API & DevOps",
    items: "Apigee, Maven, Docker, CI/CD, CORS y controles de API",
    featured: false,
  },
  {
    category: "Seguridad de aplicaciones",
    items: "Remediación de vulnerabilidades, Checkmarx y Trend Micro",
    featured: false,
  },
  {
    category: "Lenguajes complementarios",
    items: "SQL, JavaScript, Go, C, C++ y C#",
    featured: false,
  },
  {
    category: "Frontend complementario",
    items: "React y JavaScript",
    featured: false,
  },
  {
    category: "Colaboración",
    items: "Experiencia de colaboración con equipos internacionales e inglés técnico",
    featured: false,
  },
];

export const projects = [
  {
    label: "Caso 01",
    name: "Optimización de rendimiento de un servicio backend",
    description:
      "Lideré la revisión del pool de conexiones, el consumo de memoria y el ciclo de vida de variables. En mediciones de una hora antes y después del cambio en Datadog, el máximo observado bajó de 14.98 s a 9.60 s (36 %) y el promedio de 2.77 s a 2.70 s (2.5 %).",
    impact: "36 % menos en el tiempo máximo de respuesta (Datadog)",
    technologies: "Java 21, Spring Boot 3.5.14, Datadog",
  },
  {
    label: "Caso 02",
    name: "Modernización y contenerización de servicios",
    description:
      "Actualización de la plataforma y del sistema de compilación para mejorar la consistencia entre entornos y preparar el servicio para el escalamiento horizontal.",
    impact: "Mayor consistencia entre entornos y preparación para escalamiento horizontal",
    technologies: "Java 17, Spring Boot, Maven, Docker, CI/CD",
  },
  {
    label: "Caso 03",
    name: "Remediación de vulnerabilidades",
    description:
      "Análisis y atención de hallazgos de seguridad para reducir deuda técnica y fortalecer la protección de la información.",
    impact: "Enfoque en reducir deuda técnica y reforzar la protección de información",
    technologies: "SonarQube, Checkmarx, Trend Micro",
  },
  {
    label: "Caso 04",
    name: "Atención de incidentes en eventos de alta demanda",
    description:
      "Análisis de causas raíz y apoyo en la mitigación de fallas críticas durante una preventa de alta demanda, contribuyendo a mejorar la estabilidad operativa y reducir errores transaccionales.",
    impact: "Contribución a la estabilidad operativa y a la reducción de errores transaccionales",
    technologies: "Java, microservicios, herramientas APM",
  },
  {
    label: "Caso 05",
    name: "Controles de seguridad para una API de pagos",
    description:
      "Configuración de controles en la capa de API Gateway para proteger el tráfico de transacciones y los datos de titulares de tarjetas.",
    impact: "Controles de gateway para proteger transacciones y datos de pago",
    technologies: "Apigee, PCI DSS, CORS, listas de permitidos",
  },
];
