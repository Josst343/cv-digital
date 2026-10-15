export const profile = {
  name: "JOSUE MISAEL FLORES FERNANDEZ",
  role: "Senior Java Backend / Full Stack Developer | Java · Spring Boot · APX / ASO · Microservicios",
  intro:
    "Senior Java Backend / Full Stack Developer con más de 6 años de experiencia diseñando, desarrollando y optimizando aplicaciones empresariales y microservicios de misión crítica. Sólida trayectoria en el sector bancario (2 años en BBVA – Terminal Financiero trabajando con arquitecturas APX y ASO) y retail (Coppel), dominando el ecosistema Java (Spring Boot, Spring Core, Spring MVC, JPA, Spring Batch), bases de datos relacionales y NoSQL (PostgreSQL, MongoDB), y seguridad en APIs con GCP y Apigee. Especialista en buenas prácticas de ingeniería de software, patrones de diseño, programación funcional, concurrencia y pruebas unitarias con JUnit y Mockito.",
  highlights: [
    "2 años en BBVA (Terminal Financiero) con arquitectura APX, servicios ASO e integración NACAR",
    "Java (POO, Streams, Lambdas, Concurrency), Spring Boot, Spring Core, Spring MVC, Spring Data JPA y Spring Batch",
    "36 % menos en el tiempo máximo de respuesta en APIs críticas (medido en Datadog) y cobertura con JUnit y Mockito",
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
    period: "2020 – 2022 (2 años)",
    role: "Java Backend Developer",
    company: "BBVA (Proyecto: Terminal Financiero)",
    responsibilities: [
      "Desarrollo Backend en Terminal Financiero: Participación durante 2 años en el desarrollo, mantenimiento evolutivo y estabilización de servicios backend transaccionales para el sistema de Terminal Financiero en sucursales, garantizando alta disponibilidad y resiliencia operativa.",
      "Arquitectura APX y Servicios ASO: Diseño, construcción e integración de transacciones, librerías y APIs RESTful bajo la arquitectura APX (Arquitectura Plataforma Extendida, basada en Java y Spring Framework) y exposición/consumo de servicios ASO (Arquitectura de Servicios Orientada).",
      "Calidad de Código y Pruebas Unitarias: Implementación de lógica de negocio aplicando Programación Orientada a Objetos (POO), Collections, Streams, Lambdas, inyección de dependencias y manejo robusto de excepciones, asegurando la cobertura de código con JUnit y Mockito.",
      "Integración Legacy y Persistencia: Interconexión de componentes modernos con sistemas core bancarios (NACAR / COBOL) y gestión de persistencia de datos mediante JPA y bases de datos relacionales.",
      "Atención de Incidencias y Despliegues: Resolución de incidencias críticas en entornos productivos, validación de cambios de software y gestión del ciclo de vida de construcción y versionado con Maven y Git bajo metodologías ágiles.",
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
    category: "Lenguajes y Core",
    items: "Java (POO, Generics, Collections, Streams, Lambdas, Optional, Concurrency / ExecutorService), TypeScript, JavaScript, Go, SQL.",
    featured: true,
  },
  {
    category: "Frameworks y Arquitectura",
    items: "Spring Boot, Spring Core, Spring MVC, Spring Data JPA, Spring Batch, Node.js.",
    featured: false,
  },
  {
    category: "Ecosistema Bancario (BBVA)",
    items: "APX (Arquitectura Plataforma Extendida), ASO (Arquitectura de Servicios Orientada), NACAR, Terminal Financiero.",
    featured: true,
  },
  {
    category: "Bases de Datos",
    items: "PostgreSQL, SQL, MongoDB, JPA / Hibernate.",
    featured: false,
  },
  {
    category: "Testing y Calidad",
    items: "JUnit, Mockito, Pruebas de Componentes.",
    featured: false,
  },
  {
    category: "Cloud, APIs y Herramientas",
    items: "RESTful APIs, SOAP, Google Cloud Platform (GCP), Apigee API Gateway, Docker, Liquibase, Maven, Git.",
    featured: false,
  },
];

export const projects = [
  {
    label: "Logro Destacado",
    name: "Optimización de rendimiento de un servicio backend",
    description:
      "Lideré la revisión del pool de conexiones, el consumo de memoria y el ciclo de vida de variables. En mediciones de una hora antes y después del cambio en Datadog, el máximo observado bajó de 14.98 s a 9.60 s (36 %) y el promedio de 2.77 s a 2.70 s (2.5 %).",
    impact: "36 % menos en el tiempo máximo de respuesta (Datadog)",
    technologies: "Java 21, Spring Boot 3.5.14, Datadog",
  },
  {
    label: "Iniciativa",
    name: "Modernización y contenerización de servicios",
    description:
      "Actualización de la plataforma y del sistema de compilación para mejorar la consistencia entre entornos y preparar el servicio para el escalamiento horizontal.",
    impact: "Mayor consistencia entre entornos y preparación para escalamiento horizontal",
    technologies: "Java 17, Spring Boot, Maven, Docker, CI/CD",
  },
  {
    label: "Iniciativa",
    name: "Remediación de vulnerabilidades",
    description:
      "Análisis y atención de hallazgos de seguridad para reducir deuda técnica y fortalecer la protección de la información.",
    impact: "Enfoque en reducir deuda técnica y reforzar la protección de información",
    technologies: "SonarQube, Checkmarx, Trend Micro",
  },
  {
    label: "Logro Destacado",
    name: "Atención de incidentes en eventos de alta demanda",
    description:
      "Análisis de causas raíz y apoyo en la mitigación de fallas críticas durante una preventa de alta demanda, contribuyendo a mejorar la estabilidad operativa y reducir errores transaccionales.",
    impact: "Contribución a la estabilidad operativa y a la reducción de errores transaccionales",
    technologies: "Java, microservicios, herramientas APM",
  },
  {
    label: "Iniciativa",
    name: "Controles de seguridad para una API de pagos",
    description:
      "Configuración de controles en la capa de API Gateway para proteger el tráfico de transacciones y los datos de titulares de tarjetas.",
    impact: "Controles de gateway para proteger transacciones y datos de pago",
    technologies: "Apigee, PCI DSS, CORS, listas de permitidos",
  },
];
