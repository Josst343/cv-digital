export type Language = "es" | "en";

export const spanishUi = {
  language: "Idioma",
  navigation: {
    about: "Perfil",
    experience: "Experiencia",
    education: "Formación",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    contact: "Contactar",
    projects: "Ver proyectos",
    photoAlt: "Fotografía profesional de Josue Misael Flores Fernandez",
    availability: "Abierto a oportunidades en desarrollo backend con Java y Spring Boot.",
    openToWork: "Abierto a oportunidades",
  },
  technologyStack: "Tecnologías principales",
  aboutHeading: "01 / Perfil profesional",
  experienceHeading: "02 / Experiencia profesional",
  experienceSubheading: "Finanzas y retail",
  skillsHeading: "03 / Habilidades técnicas",
  skillsSubheading: "Tecnologías y fortalezas",
  projectsHeading: "04 / Proyectos destacados",
  projectPeriod: "Casos de trabajo",
  educationHeading: "05 / Formación académica",
  educationSubheading: "Ingeniería de Software",
  contactHeading: "06 / Contacto",
  contactHeadline: "¿Hablamos sobre cómo puedo aportar a tu equipo?",
  contactAction: "Escríbeme",
  period: "Periodo",
  technologies: "Tecnologías",
};

export const englishContent = {
  profile: {
    name: "JOSUE MISAEL FLORES FERNANDEZ",
    role: "Senior Backend Developer | Java · Spring Boot · Microservices",
    intro:
      "Software developer with experience since 2020 in financial services and retail, specializing in backend development with Java and Spring Boot. I currently work with Java 21 and Spring Boot 3.5.14. I have led optimization initiatives and worked on APIs, microservices, incident analysis, and vulnerability remediation. In a one-hour-before and one-hour-after comparison, Datadog recorded a decrease in maximum response time from 14.98 s to 9.60 s and average response time from 2.77 s to 2.70 s. Additional experience with GraphQL, automated testing, Docker, and CI/CD.",
    availability: "Open to backend development opportunities focused on Java and Spring Boot.",
    email: "josue5325@gmail.com",
    phone: "+52 551 603 9201",
    copyrightYear: "2026",
  },
  experience: [
    {
      period: "2022 – Present",
      role: "Senior Developer",
      company: "Coppel",
      responsibilities: [
        "Develop and evolve backend services and APIs using Java 21, Spring Boot 3.5.14, and GraphQL.",
        "Led an optimization initiative, reviewing the connection pool, memory usage, and variable lifecycles, including when to limit variables to a method rather than keep them global.",
        "Proposed solutions to the technical lead and manager, contributed to their implementation, and presented the results to other teams.",
        "In one-hour-before and one-hour-after measurements recorded in Datadog, maximum response time changed from 14.98 s to 9.60 s (36% lower) and average response time from 2.77 s to 2.70 s (2.5% lower).",
        "Analyze and remediate vulnerabilities using security and code-analysis tools.",
        "Develop and run automated tests with JUnit.",
        "Modernize and containerize services using Java 17, Maven, and Docker.",
        "Perform root-cause analysis and respond to incidents in services during high-demand events.",
      ],
    },
    {
      period: "2020 – 2022",
      role: "Software Developer",
      company: "BBVA – Financial Terminal",
      responsibilities: [
        "Develop and maintain Java 8 backend services for the financial terminal.",
        "Implement and run automated tests to validate software changes.",
        "Respond to and diagnose incidents in a financial operations environment.",
        "Evolve services with a focus on stability and operational continuity.",
      ],
    },
  ],
  education: [
    {
      period: "Academic background",
      title: "Software Engineering",
      institution: "Autonomous University of Mexico City",
      description: "Incomplete university studies.",
    },
  ],
  skills: [
    { category: "Languages", items: "Java, SQL, JavaScript, Go, C, C++, and C#" },
    {
      category: "Backend and architecture",
      items: "Spring Boot, REST APIs, GraphQL, and microservices",
    },
    {
      category: "Databases",
      items: "PostgreSQL, MongoDB, and SQL query optimization",
    },
    {
      category: "Testing and quality",
      items: "JUnit, automated testing, and SonarQube",
    },
    { category: "DevOps and tools", items: "Maven, Docker, and CI/CD" },
    {
      category: "Application security",
      items:
        "Vulnerability remediation, Checkmarx, Trend Micro, Apigee, CORS, and API controls",
    },
    { category: "Additional frontend", items: "React and JavaScript" },
    {
      category: "Collaboration",
      items: "Experience collaborating with international teams and technical English",
    },
  ],
  projects: [
    {
      label: "Case 01",
      name: "Backend service performance optimization",
      description:
        "Led a review of the connection pool, memory usage, and variable lifecycles. In one-hour-before and one-hour-after measurements in Datadog, the observed maximum fell from 14.98 s to 9.60 s (36%) and the average from 2.77 s to 2.70 s (2.5%).",
      technologies: "Java 21, Spring Boot 3.5.14, Datadog",
    },
    {
      label: "Case 02",
      name: "Service modernization and containerization",
      description:
        "Updated the platform and build system to improve consistency across environments and prepare the service for horizontal scaling.",
      technologies: "Java 17, Spring Boot, Maven, Docker, CI/CD",
    },
    {
      label: "Case 03",
      name: "Vulnerability remediation",
      description:
        "Analyzed and addressed security findings to reduce technical debt and strengthen information protection.",
      technologies: "SonarQube, Checkmarx, Trend Micro",
    },
    {
      label: "Case 04",
      name: "Incident response during high-demand events",
      description:
        "Analyzed root causes and helped mitigate critical failures during a high-demand presale, contributing to improved operational stability and fewer transaction errors.",
      technologies: "Java, microservices, APM tools",
    },
    {
      label: "Case 05",
      name: "Security controls for a payment API",
      description:
        "Configured controls at the API Gateway layer to protect transaction traffic and cardholder data.",
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
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      contact: "Get in touch",
      projects: "View projects",
      photoAlt: "Professional photo of Josue Misael Flores Fernandez",
      availability: "Open to backend development opportunities focused on Java and Spring Boot.",
      openToWork: "Open to opportunities",
    },
    technologyStack: "Core technologies",
    aboutHeading: "01 / Professional profile",
    experienceHeading: "02 / Professional Experience",
    experienceSubheading: "Financial services and retail",
    skillsHeading: "03 / Technical Skills",
    skillsSubheading: "Technologies and strengths",
    projectsHeading: "04 / Selected Projects",
    projectPeriod: "Selected case studies",
    educationHeading: "05 / Education",
    educationSubheading: "Software Engineering",
    contactHeading: "06 / Contact",
    contactHeadline: "Let's talk about how I can contribute to your team.",
    contactAction: "Email me",
    period: "Period",
    technologies: "Technologies",
  },
};
