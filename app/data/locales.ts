export type Language = "es" | "en";

export const spanishUi = {
  language: "Idioma",
  navigation: {
    about: "Perfil",
    experience: "Experiencia",
    education: "Formación",
    skills: "Habilidades",
    projects: "Logros",
    contact: "Contacto",
  },
  hero: {
    contact: "Contactar",
    projects: "Ver logros técnicos",
    photoAlt: "Fotografía profesional de Josue Misael Flores Fernandez",
    availability: "Abierto a oportunidades en desarrollo backend con Java y Spring Boot.",
    openToWork: "Abierto a oportunidades",
  },
  technologyStack: "Tecnologías principales",
  aboutHeading: "01 / Perfil profesional",
  experienceHeading: "02 / Experiencia profesional",
  experienceSubheading: "Finanzas y retail",
  skillsHeading: "03 / Habilidades técnicas",
  skillsSubheading: "Stack principal y tecnologías complementarias",
  projectsHeading: "04 / Logros técnicos destacados",
  projectPeriod: "Iniciativas clave",
  educationHeading: "05 / Formación académica",
  educationSubheading: "Ingeniería de Software",
  contactHeading: "06 / Contacto",
  contactHeadline: "¿Hablamos sobre cómo puedo aportar a tu equipo?",
  contactAction: "Escríbeme",
  period: "Periodo",
  technologies: "Tecnologías",
  impact: "Resultado",
};

export const englishContent = {
  profile: {
    name: "JOSUE MISAEL FLORES FERNANDEZ",
    role: "Senior Java Backend / Full Stack Developer | Java · Spring Boot · APX / ASO · Microservices",
    intro:
      "Senior Java Backend / Full Stack Developer with 6+ years of experience designing, developing, and optimizing enterprise applications and mission-critical microservices. Strong background in the banking sector (2 years at BBVA – Terminal Financiero working with APX and ASO architectures) and retail (Coppel), mastering the Java ecosystem (Spring Boot, Spring Core, Spring MVC, JPA, Spring Batch), relational and NoSQL databases (PostgreSQL, MongoDB), and API security with GCP and Apigee. Specialist in software engineering best practices, design patterns, functional programming, concurrency, and unit testing with JUnit and Mockito.",
    highlights: [
      "2 years at BBVA (Terminal Financiero) with APX architecture, ASO services, and NACAR integration",
      "Java (OOP, Streams, Lambdas, Concurrency), Spring Boot, Spring Core, Spring MVC, Spring Data JPA, and Spring Batch",
      "36% lower maximum response time in critical APIs (measured in Datadog) and code coverage with JUnit and Mockito",
    ],
    availability: "Open to remote or hybrid opportunities based in Mexico City.",
    email: "josue5325@gmail.com",
    phone: "+52 551 603 9201",
    linkedin: "https://www.linkedin.com/in/josue-flores-623a681a3/",
    github: "https://github.com/Josst343",
    copyrightYear: "2026",
  },
  experience: [
    {
      period: "2022 – Present",
      role: "Senior Developer",
      company: "Coppel",
      responsibilities: [
        "Developed and evolved backend services and APIs using Java 21, Spring Boot 3.5.14, and GraphQL.",
        "Led an optimization initiative, reviewing the connection pool, memory usage, and variable lifecycles, including when to limit variables to a method rather than keep them global.",
        "Proposed solutions to the technical lead and manager, contributed to their implementation, and presented the results to other teams.",
        "Measured and validated a decrease in maximum response time from 14.98 s to 9.60 s (36%) and average response time from 2.77 s to 2.70 s (2.5%) in Datadog.",
        "Analyzed and remediated vulnerabilities using security and code-analysis tools.",
        "Implemented and ran automated tests with JUnit.",
        "Modernized and containerized services using Java 17, Maven, and Docker.",
        "Investigated root causes and responded to incidents during high-demand events.",
      ],
    },
    {
      period: "2020 – 2022 (2 years)",
      role: "Java Backend Developer",
      company: "BBVA (Project: Terminal Financiero)",
      responsibilities: [
        "Backend Development in Terminal Financiero: Participated for 2 years in the development, evolutionary maintenance, and stabilization of transactional backend services for the branch Financial Terminal system, ensuring high availability and operational resilience.",
        "APX Architecture & ASO Services: Designed, built, and integrated transactions, libraries, and RESTful APIs under the APX architecture (Extended Platform Architecture, based on Java and Spring Framework) and exposed/consumed ASO services (Service-Oriented Architecture).",
        "Code Quality & Unit Testing: Implemented business logic applying Object-Oriented Programming (OOP), Collections, Streams, Lambdas, dependency injection, and robust exception handling, ensuring code coverage with JUnit and Mockito.",
        "Legacy Integration & Persistence: Interconnected modern components with core banking systems (NACAR / COBOL) and managed data persistence using JPA and relational databases.",
        "Incident Response & Deployments: Resolved critical incidents in production environments, validated software changes, and managed build and versioning lifecycles with Maven and Git under Agile methodologies.",
      ],
    },
  ],
  education: [
    {
      period: "Academic background",
      title: "Software Engineering",
      institution: "Autonomous University of Mexico City",
      description: "University education in Software Engineering.",
    },
  ],
  skills: [
    {
      category: "Languages & Core",
      items: "Java (OOP, Generics, Collections, Streams, Lambdas, Optional, Concurrency / ExecutorService), TypeScript, JavaScript, Go, SQL.",
      featured: true,
    },
    {
      category: "Frameworks & Architecture",
      items: "Spring Boot, Spring Core, Spring MVC, Spring Data JPA, Spring Batch, Node.js.",
      featured: false,
    },
    {
      category: "Banking Ecosystem (BBVA)",
      items: "APX (Arquitectura Plataforma Extendida), ASO (Arquitectura de Servicios Orientada), NACAR, Terminal Financiero.",
      featured: true,
    },
    {
      category: "Databases",
      items: "PostgreSQL, SQL, MongoDB, JPA / Hibernate.",
      featured: false,
    },
    {
      category: "Testing & Quality",
      items: "JUnit, Mockito, Component Testing.",
      featured: false,
    },
    {
      category: "Cloud, APIs & Tools",
      items: "RESTful APIs, SOAP, Google Cloud Platform (GCP), Apigee API Gateway, Docker, Liquibase, Maven, Git.",
      featured: false,
    },
  ],
  projects: [
    {
      label: "Key Achievement",
      name: "Backend service performance optimization",
      description:
        "Led a review of the connection pool, memory usage, and variable lifecycles. In one-hour-before and one-hour-after measurements in Datadog, the observed maximum fell from 14.98 s to 9.60 s (36%) and the average from 2.77 s to 2.70 s (2.5%).",
      impact: "36% lower maximum response time (Datadog)",
      technologies: "Java 21, Spring Boot 3.5.14, Datadog",
    },
    {
      label: "Initiative",
      name: "Service modernization and containerization",
      description:
        "Updated the platform and build system to improve consistency across environments and prepare the service for horizontal scaling.",
      impact: "Improved environment consistency and readiness for horizontal scaling",
      technologies: "Java 17, Spring Boot, Maven, Docker, CI/CD",
    },
    {
      label: "Initiative",
      name: "Vulnerability remediation",
      description:
        "Analyzed and addressed security findings to reduce technical debt and strengthen information protection.",
      impact: "Focused on reducing technical debt and strengthening information protection",
      technologies: "SonarQube, Checkmarx, Trend Micro",
    },
    {
      label: "Key Achievement",
      name: "Incident response during high-demand events",
      description:
        "Analyzed root causes and helped mitigate critical failures during a high-demand presale, contributing to improved operational stability and fewer transaction errors.",
      impact: "Contributed to operational stability and fewer transaction errors",
      technologies: "Java, microservices, APM tools",
    },
    {
      label: "Initiative",
      name: "Security controls for a payment API",
      description:
        "Configured controls at the API Gateway layer to protect transaction traffic and cardholder data.",
      impact: "Gateway controls to protect transactions and payment data",
      technologies: "Apigee, PCI DSS, CORS, allowlists",
    },
  ],
  ui: {
    language: "Language",
    navigation: {
      about: "Profile",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Achievements",
      contact: "Contact",
    },
    hero: {
      contact: "Get in touch",
      projects: "View achievements",
      photoAlt: "Professional photo of Josue Misael Flores Fernandez",
      availability: "Open to backend development opportunities focused on Java and Spring Boot.",
      openToWork: "Open to opportunities",
    },
    technologyStack: "Core technologies",
    aboutHeading: "01 / Professional profile",
    experienceHeading: "02 / Professional Experience",
    experienceSubheading: "Financial services and retail",
    skillsHeading: "03 / Technical Skills",
    skillsSubheading: "Core stack and complementary technologies",
    projectsHeading: "04 / Key Technical Achievements",
    projectPeriod: "Key initiatives",
    educationHeading: "05 / Education",
    educationSubheading: "Software Engineering",
    contactHeading: "06 / Contact",
    contactHeadline: "Let's talk about how I can contribute to your team.",
    contactAction: "Email me",
    period: "Period",
    technologies: "Technologies",
    impact: "Outcome",
  },
};
