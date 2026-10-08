export type Language = "es" | "en";

export const spanishUi = {
  language: "Idioma",
  navigation: {
    about: "Perfil",
    experience: "Experiencia",
    education: "Formación",
    skills: "Habilidades",
    aspirations: "Aportación",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    roles: "Desarrollador Backend Senior, APIs y microservicios, Java y Spring Boot",
    contact: "Contactar",
    projects: "Ver proyectos",
    photoAlt: "Fotografía profesional de Josue Misael Flores Fernandez",
    availability: "Abierto a oportunidades en desarrollo backend con Java y Spring Boot.",
    openToWork: "Abierto a oportunidades",
  },
  technologyStack: "Tecnologías principales",
  aboutHeading: "01 / Perfil profesional",
  experienceHeading: "02 / Experiencia",
  experienceSubheading: "Finanzas y retail",
  educationHeading: "03 / Formación",
  educationSubheading: "Ingeniería de Software",
  skillsHeading: "04 / Habilidades",
  skillsSubheading: "Tecnologías y fortalezas",
  aspirationsHeading: "05 / Cómo puedo aportar",
  aspirationsSubheading: "Fortalezas aplicadas en proyectos",
  projectsHeading: "06 / Proyectos destacados",
  projectPeriod: "Casos de trabajo",
  contactHeading: "07 / Contacto",
  contactHeadline: "¿Hablamos sobre cómo puedo aportar a tu equipo?",
} ;

export const englishContent = {
  profile: {
    name: "Josue Misael Flores Fernandez",
    role: "Senior Backend Developer",
    headline: "Java backend engineering for reliable, secure, high-performance services.",
    intro:
      "Software developer with experience in financial services and retail since 2020. I specialize in backend development with Java and Spring Boot, including APIs and microservices, performance optimization, and vulnerability remediation. I have also worked with React and JavaScript.",
    summary:
      "I currently develop and evolve backend services at Coppel. My contributions include optimizing a Java service and reducing its response time from 3 s to 30 ms (99%), as well as addressing vulnerabilities and investigating incidents in high-demand services. I work with Java, Spring Boot, SQL, GraphQL, and JUnit.",
    availability: "Open to backend development opportunities focused on Java and Spring Boot.",
    email: "josue5325@gmail.com",
    phone: "+52 551 603 9201",
    copyrightYear: "2026",
  },
  aspirations: [
    {
      label: "01",
      title: "Clear, maintainable backend services",
      description:
        "Develop and evolve APIs and services with Java and Spring Boot, applying high-cohesion and low-coupling principles.",
    },
    {
      label: "02",
      title: "Performance and reliability",
      description:
        "Optimize queries and connection pools, investigate incidents, and remediate vulnerabilities in business-critical services.",
    },
  ],
  experience: [
    {
      period: "2022 - Present",
      role: "Senior Developer",
      company: "Coppel",
      description:
        "Develop and evolve services with Java, Spring Boot, GraphQL, and APIs. Address vulnerabilities, write JUnit tests, and improve performance by tuning connection pools and reducing memory usage.",
    },
    {
      period: "2020 - 2022",
      role: "Software Developer",
      company: "BBVA - Financial Terminal",
      description:
        "Developed and maintained backend services for a financial terminal. Worked with Java, automated testing, and incident response in a demanding operational environment.",
    },
  ],
  education: [
    {
      period: "Academic background",
      title: "Software Engineering Studies",
      institution: undefined,
      description:
        "Education focused on software development fundamentals, system design, and building technology solutions. I continue to develop my knowledge of software architecture and distributed systems.",
    },
  ],
  skills: [
    { category: "Backend and tools", items: "Java, Spring Boot, REST, GraphQL, Maven, JUnit, Docker, and CI/CD" },
    {
      category: "Quality and security",
      items: "Automated testing, vulnerability remediation, and software design principles",
    },
    {
      category: "Performance and reliability",
      items: "SQL query and connection pool optimization, reduced memory usage, and incident analysis",
    },
    {
      category: "Other languages and data",
      items: "PostgreSQL, MongoDB, JavaScript, Nacar, Go, C, C#, and C++",
    },
    {
      category: "Collaboration",
      items: "Collaboration with international teams and technical English for software development",
    },
  ],
  projects: [
    {
      label: "Case 01",
      name: "Java service performance optimization",
      description:
        "Restructured SQL queries and business logic, reducing response time from 3 s to 30 ms (99%) and increasing processing capacity. Technologies: Java and SQL.",
    },
    {
      label: "Case 02",
      name: "Vulnerability remediation across services",
      description:
        "Analyzed and addressed security findings to reduce technical debt and strengthen information protection. Tools: SonarQube, Checkmarx, and Trend Micro.",
    },
    {
      label: "Case 03",
      name: "Service modernization and containerization",
      description:
        "Updated the platform and build system to improve environment consistency and prepare the service for horizontal scaling. Technologies: Java 17, Spring Boot, Maven, Docker, and CI/CD.",
    },
    {
      label: "Case 04",
      name: "Incident response during peak-demand events",
      description:
        "Investigated root causes and helped mitigate critical failures during a high-demand presale, improving operational stability and reducing transaction errors. Technologies: Java, microservices, and APM tools.",
    },
    {
      label: "Case 05",
      name: "Security controls for a payment API",
      description:
        "Configured API Gateway controls to protect transaction traffic and cardholder data. Technologies and standards: Apigee, PCI DSS, CORS, and allowlists.",
    },
    {
      label: "Case 06",
      name: "Inventory transaction validation",
      description:
        "Implemented cart validations and alerts in a mobile app and employee channel to prevent duplicate inventory and reduce operational errors. Technologies: React, JavaScript, and REST APIs.",
    },
  ],
  ui: {
    language: "Language",
    navigation: {
      about: "Profile",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      aspirations: "How I contribute",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      roles: "Senior Backend Developer, APIs and microservices, Java and Spring Boot",
      contact: "Get in touch",
      projects: "View projects",
      photoAlt: "Professional photo of Josue Misael Flores Fernandez",
      availability: "Open to backend development opportunities focused on Java and Spring Boot.",
      openToWork: "Open to opportunities",
    },
    technologyStack: "Core technologies",
    aboutHeading: "01 / Professional profile",
    experienceHeading: "02 / Experience",
    experienceSubheading: "Financial services and retail",
    educationHeading: "03 / Education",
    educationSubheading: "Software Engineering",
    skillsHeading: "04 / Skills",
    skillsSubheading: "Technologies and strengths",
    aspirationsHeading: "05 / How I can contribute",
    aspirationsSubheading: "Strengths demonstrated in projects",
    projectsHeading: "06 / Selected projects",
    projectPeriod: "Selected case studies",
    contactHeading: "07 / Contact",
    contactHeadline: "Let's talk about how I can contribute to your team.",
  },
};