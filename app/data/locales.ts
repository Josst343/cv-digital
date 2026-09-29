export type Language = "es" | "en";

export const spanishUi = {
  language: "Idioma",
  navigation: {
    about: "Sobre mí",
    experience: "Trayectoria",
    education: "Educación",
    skills: "Habilidades",
    aspirations: "Aspiraciones",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    roles: "Developer Sr, Full Stack, Java y React",
    contact: "Contactarme",
    projects: "Ver proyectos",
    photoAlt: "Fotografía profesional de Josue Misael Flores Fernandez",
    availability: "Disponible para nuevos proyectos y colaboraciones.",
    openToWork: "Disponible para trabajar",
  },
  technologyStack: "Stack tecnológico",
  aboutHeading: "01 / Sobre mí",
  experienceHeading: "02 / Trayectoria",
  experienceSubheading: "Experiencia profesional",
  educationHeading: "03 / Educación",
  educationSubheading: "Aprendizaje continuo",
  skillsHeading: "04 / Habilidades",
  skillsSubheading: "Fortalezas profesionales",
  aspirationsHeading: "05 / Aspiraciones",
  aspirationsSubheading: "Próximos objetivos",
  projectsHeading: "06 / Proyectos destacados",
  projectPeriod: "2024 - 2026",
  contactHeading: "07 / Contacto",
  contactHeadline: "Hablemos de tu próximo proyecto.",
} ;

export const englishContent = {
  profile: {
    name: "Josue Misael Flores Fernandez",
    role: "Senior Developer",
    headline: "Purposeful full-stack development: efficient, secure, and scalable systems.",
    intro:
      "Full-stack software developer with experience in the financial and retail sectors since 2020. I have 3 years of experience as a Senior Developer and specialize in backend development with Java, service architecture, security, and optimization of critical systems.",
    summary:
      "I am currently a Senior Developer at Coppel, where I help develop and evolve high-demand services. I primarily work with Java and Spring Boot, and also use technologies such as Go, GraphQL, and Salesforce. I help resolve vulnerabilities, improve response times, and design software with high cohesion and loose coupling. I am proactive and always look for ways to contribute to every project I join.",
    availability: "Available for new projects and collaborations.",
    email: "josue5325@gmail.com",
    phone: "+52 551 603 9201",
    copyrightYear: "2026",
  },
  aspirations: [
    {
      label: "01",
      title: "Specializing in artificial intelligence",
      description:
        "Explore artificial intelligence, generative models, and automation to build useful, secure solutions aligned with business needs.",
    },
    {
      label: "02",
      title: "Deepening software architecture expertise",
      description:
        "Strengthen my software architecture skills to design resilient, scalable, and sustainable distributed systems.",
    },
  ],
  experience: [
    {
      period: "2022 - Present",
      role: "Senior Developer",
      company: "Coppel",
      description:
        "Develop and evolve services with Java, Spring Boot, Maven, JUnit, GraphQL, and APIs. Resolve vulnerabilities and optimize performance by tuning connection pools, reducing memory usage, and applying high-cohesion, low-coupling principles.",
    },
    {
      period: "2020 - 2022",
      role: "Software Developer",
      company: "BBVA - Financial Terminal",
      description:
        "Developed and maintained financial terminal solutions, working on backend services, Java, automated testing, and incident response in a demanding operational environment.",
    },
  ],
  education: [
    {
      period: "Professional Education",
      title: "Software Engineering",
      institution: undefined,
      description:
        "Studies focused on software development fundamentals, system design, and building technology solutions. I continue to strengthen my knowledge of software architecture and distributed systems.",
    },
  ],
  skills: [
    { category: "Backend", items: "Java, Spring Boot, Maven, JUnit, GraphQL, and REST APIs" },
    {
      category: "Quality and security",
      items: "Automated testing, vulnerability remediation, and sound design practices",
    },
    {
      category: "Performance",
      items: "Connection pool tuning, memory usage reduction, and faster response times",
    },
    {
      category: "Data and languages",
      items: "PostgreSQL, MongoDB, JavaScript, Nacar, Go, C, C#, and C++",
    },
    {
      category: "Collaboration",
      items: "Collaboration with international teams and technical English for software development",
    },
  ],
  projects: [
    {
      label: "Project 01",
      name: "Vulnerability Mitigation in Critical Services",
      description:
        "Managed and resolved security findings in the cybs-case-manager microservice. Technologies: SonarQube, Checkmarx, and Trend Micro. Outcome: Reduced security technical debt and strengthened information protection.",
    },
    {
      label: "Project 02",
      name: "Service Reengineering and Performance Optimization",
      description:
        "Restructured the ventafuturo service by optimizing SQL queries and business logic. Technologies: Java and SQL. Outcome: Reduced response time from 3 s to 0.03 s and increased processing capacity.",
    },
    {
      label: "Project 03",
      name: "Motorcycle Transaction Integrity Controls",
      description:
        "Implemented cart validations and modal alerts in the mobile app and employee channel. Technologies: React, JavaScript, and REST APIs. Outcome: Prevented duplicate inventory and reduced operational errors.",
    },
    {
      label: "Project 04",
      name: "Technical Assessment and Google Maps API Integration",
      description:
        "Evaluated feasibility and native capabilities for retrieving business hours and contact metadata. Technologies: Google Maps Platform and REST APIs. Outcome: Reduced time to market and the need for backend infrastructure.",
    },
    {
      label: "Project 05",
      name: "Asset Cleanup and Sensitive Data Protection",
      description:
        "Audited front-end security to identify and remove obsolete credentials. Technologies: JavaScript, Firebase, and American Express SDK. Outcome: Reduced the attack surface and improved code maintainability.",
    },
    {
      label: "Project 06",
      name: "Address Data Tampering Mitigation",
      description:
        "Implemented cross-validation in the logistics module and controlled exception handling. Technologies: Java, Spring Boot, and REST APIs. Outcome: Detected address inconsistencies and improved delivery reliability.",
    },
    {
      label: "Project 07",
      name: "Sales Services Investigation and Diagnostics",
      description:
        "Analyzed the architecture of the ApartadoDesapartado and ecommercegeneraventainicial services. Technologies: microservices, profiling tools, and Java. Outcome: Identified bottlenecks and proposed scalability improvements.",
    },
    {
      label: "Project 08",
      name: "Cybersourprocessor Modernization and Containerization",
      description:
        "Updated the technology stack and migrated the build system. Technologies: Java 17, Spring Boot, Maven, Docker, and CI/CD. Outcome: Improved consistency across environments and prepared the system for horizontal scaling.",
    },
    {
      label: "Project 09",
      name: "Incident Management During High-Demand Events",
      description:
        "Performed root-cause analysis and mitigated critical failures during the iPhone presale. Technologies: APM tools, Java, and microservices. Outcome: Improved operational stability during peak demand and reduced transaction errors.",
    },
    {
      label: "Project 10",
      name: "Security Architecture for the Lost Account Project",
      description:
        "Implemented identity validation and protection for financial and personal data. Technologies: OAuth 2.0, JWT, TLS 1.3, and GCP Secret Manager. Outcome: Supported regulatory compliance and credit management traceability.",
    },
    {
      label: "Project 11",
      name: "PCI DSS-Compliant API Gateway Configuration",
      description:
        "Configured security controls at the API Gateway layer for banking transactions. Technologies: Apigee, PCI DSS, CORS, and allowlists. Outcome: Protected cardholder data traffic and integrity.",
    },
    {
      label: "Project 12",
      name: "Omnichannel Experience Optimization (Site to Store)",
      description:
        "Improved filtering and geolocation algorithms for assigning physical stores. Technologies: algorithms, geolocation APIs, and REST APIs. Outcome: Improved pickup location accuracy and optimized logistics routes.",
    },
  ],
  ui: {
    language: "Language",
    navigation: {
      about: "About me",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      aspirations: "Goals",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      roles: "Senior Developer, Full Stack, Java and React",
      contact: "Contact me",
      projects: "View projects",
      photoAlt: "Professional photo of Josue Misael Flores Fernandez",
      availability: "Available for new projects and collaborations.",
      openToWork: "Open to work",
    },
    technologyStack: "Technology stack",
    aboutHeading: "01 / About me",
    experienceHeading: "02 / Experience",
    experienceSubheading: "Professional experience",
    educationHeading: "03 / Education",
    educationSubheading: "Continuous learning",
    skillsHeading: "04 / Skills",
    skillsSubheading: "Professional strengths",
    aspirationsHeading: "05 / Goals",
    aspirationsSubheading: "Next objectives",
    projectsHeading: "06 / Selected projects",
    projectPeriod: "2024 - 2026",
    contactHeading: "07 / Contact",
    contactHeadline: "Let's talk about your next project.",
  },
};