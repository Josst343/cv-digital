"use client";

import { useEffect, useSyncExternalStore } from "react";
import { education, experience, profile, projects, skills } from "./data/profile";
import { englishContent, spanishUi, type Language } from "./data/locales";
import DownloadCvButton from "./components/download-cv-button";
import ThemeAccentSelector from "./components/theme-accent-selector";
import Image from "next/image";

const technologies = [
  { name: "Java", logo: "java.svg", color: "#F89820", core: true },
  { name: "Spring Boot", logo: "spring.svg", color: "#77BC1F", core: true },
  { name: "React", logo: "react.svg", color: "#61DAFB" },
  { name: "Go", logo: "go.svg", color: "#00ADD8" },
  { name: "PostgreSQL", logo: "postgresql.svg", color: "#4169E1", core: true },
  { name: "GraphQL", logo: "graphql.svg", color: "#E10098" },
  { name: "Salesforce", logo: "salesforce.svg", color: "#00A1E0" },
  { name: "Apigee", mark: "API", color: "#00A86B", core: true },
  { name: "Docker", mark: "D", color: "#2496ED", core: true },
];

const languageStorageKey = "cv-digital-language";
const languageChangeEvent = "cv-digital-language-change";

function subscribeToLanguageChanges(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(languageChangeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(languageChangeEvent, onChange);
  };
}

function getStoredLanguage(): Language {
  return window.localStorage.getItem(languageStorageKey) === "en" ? "en" : "es";
}

function getServerLanguage(): Language {
  return "es";
}

function SectionLabel({ text }: { text: string }) {
  const separatorIndex = text.indexOf("/");

  if (separatorIndex === -1) {
    return text;
  }

  return (
    <>
      <span className="text-zinc-400">{text.slice(0, separatorIndex + 1)}</span>
      <span className="text-zinc-700">{text.slice(separatorIndex + 1)}</span>
    </>
  );
}

export default function Home() {
  const language = useSyncExternalStore(
    subscribeToLanguageChanges,
    getStoredLanguage,
    getServerLanguage,
  );
  const isEnglish = language === "en";
  const content = isEnglish ? englishContent : {
    profile,
    education,
    experience,
    projects,
    skills,
    ui: spanishUi,
  };
  const copy = content.ui;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = isEnglish
      ? "Josue Misael Flores Fernandez | Senior Backend Developer"
      : "Josue Misael Flores Fernandez | Desarrollador Backend Senior";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      isEnglish
        ? "Senior backend developer specializing in Java, Spring Boot, microservices, APIs, performance, and application security."
        : "Desarrollador backend senior especializado en Java, Spring Boot, microservicios, APIs, rendimiento y seguridad de aplicaciones.",
    );
  }, [isEnglish, language]);

  function selectLanguage(selectedLanguage: Language) {
    window.localStorage.setItem(languageStorageKey, selectedLanguage);
    window.dispatchEvent(new Event(languageChangeEvent));
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.95),_rgba(245,243,238,0.96)_42%,_rgba(239,236,230,1)_100%)] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-6 flex items-center justify-between rounded-full border border-zinc-200/80 bg-white/75 px-4 py-3 shadow-[0_8px_28px_rgba(15,23,42,0.04)] backdrop-blur-xl">
          <a className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-900" href="#inicio">
            {content.profile.name}
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-5 text-sm text-zinc-600 lg:flex">
              <a className="transition-colors hover:text-zinc-900" href="#inicio">{copy.navigation.about}</a>
              <a className="transition-colors hover:text-zinc-900" href="#trayectoria">{copy.navigation.experience}</a>
              <a className="transition-colors hover:text-zinc-900" href="#habilidades">{copy.navigation.skills}</a>
              <a className="transition-colors hover:text-zinc-900" href="#proyectos">{copy.navigation.projects}</a>
              <a className="transition-colors hover:text-zinc-900" href="#contacto">{copy.navigation.contact}</a>
            </div>

            <button
              className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-[11px] font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950"
              type="button"
              aria-label={isEnglish ? "Switch to Spanish" : "Cambiar a inglés"}
              title={isEnglish ? "Switch to Spanish" : "Cambiar a inglés"}
              onClick={() => selectLanguage(isEnglish ? "es" : "en")}
            >
              EN/ES
            </button>

            <ThemeAccentSelector language={language} />
          </div>
        </nav>

        <div className="grid items-start gap-4 md:grid-cols-2 xl:gap-5 xl:grid-cols-3">
          <section
            id="inicio"
            className="rounded-3xl border border-zinc-200/90 bg-white/90 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.065)] md:col-span-2 xl:col-span-2 xl:p-9"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="rounded-full border border-zinc-200/80 bg-[#f3f1ee] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em]">
                <SectionLabel text={copy.aboutHeading} />
              </span>
              <span className="hidden text-[11px] text-zinc-500 sm:inline">{copy.hero.openToWork}</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.065em] text-zinc-950 sm:text-5xl xl:text-[4.5rem]">
              {content.profile.name}
            </h1>

            <p className="mt-4 max-w-2xl text-sm font-medium tracking-[0.015em] text-emerald-800 sm:text-base">
              {content.profile.role}
            </p>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-zinc-600 sm:text-base sm:leading-8">
              {content.profile.intro}
            </p>

            <ul className="mt-5 grid gap-2 text-sm leading-6 text-zinc-700">
              {content.profile.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-600 sm:text-sm">
              <a className="transition-colors hover:text-zinc-950" href={`mailto:${content.profile.email}`}>
                {content.profile.email}
              </a>
              <a className="transition-colors hover:text-zinc-950" href={`tel:${content.profile.phone.replaceAll(" ", "")}`}>
                {content.profile.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 print-hidden">
              <a className="inline-flex h-12 items-center gap-2 rounded-full bg-emerald-700 px-5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(4,120,87,0.18)] transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-[0_8px_22px_rgba(4,120,87,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700" href="#contacto">
                {copy.hero.contact}
                <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20">
                  <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </a>
              <a className="inline-flex h-12 items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-900" href="#proyectos">
                {copy.hero.projects}
                <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20">
                  <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </a>
              <DownloadCvButton language={language} />
            </div>
          </section>

          <div className="grid content-start gap-4 self-start md:col-span-2 md:grid-cols-3 xl:col-span-1 xl:grid-cols-1">
            <aside className="rounded-3xl border border-zinc-200/90 bg-[#f3e5df] p-4 shadow-[0_16px_48px_rgba(15,23,42,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.065)] md:col-span-2 xl:col-span-1">
              <div className="relative h-52 overflow-hidden rounded-[24px] border border-zinc-300/70 bg-zinc-200 ring-1 ring-white/60">
                <Image
                  className="object-cover"
                  src="/images/profile-photo.jpg"
                  alt={copy.hero.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-zinc-800">
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/75" />
                </span>
                {copy.hero.openToWork}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{content.profile.availability}</p>
            </aside>

            <div className="rounded-3xl border border-zinc-200/90 bg-white/90 p-5 shadow-[0_16px_48px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.06)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{isEnglish ? "Impact" : "Impacto"}</p>
              <p className="mt-5 text-6xl font-semibold leading-none tracking-tighter text-emerald-700 drop-shadow-[0_4px_14px_rgba(4,120,87,0.12)]">36%</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {isEnglish
                  ? "Latency reduction in API response time after optimization."
                  : "Reducción de latencia en el tiempo de respuesta de APIs tras la optimización."}
              </p>
            </div>

          <div className="rounded-3xl border border-zinc-200/90 bg-[#f0f2f4] p-5 shadow-[0_16px_48px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.06)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{isEnglish ? "Location" : "Ubicación"}</p>
            <p className="mt-5 text-2xl font-semibold tracking-tight text-zinc-950">CDMX</p>
            <p className="mt-2 text-sm text-zinc-600">{isEnglish ? "Mexico City" : "Ciudad de México"}</p>
            <div className="mt-6 border-t border-zinc-200 pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{isEnglish ? "Availability" : "Disponibilidad"}</p>
              <p className="mt-2 text-sm text-emerald-700">{isEnglish ? "Open to remote / hybrid roles" : "Abierto a roles remotos / híbridos"}</p>
            </div>
          </div>
          </div>
        </div>

          <section className="rounded-3xl border border-zinc-200/90 bg-[#f4ede8] p-5 text-zinc-800 shadow-[0_16px_48px_rgba(15,23,42,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.065)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">{copy.technologyStack}</p>
              <span className="rounded-full border border-zinc-300 bg-white/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                {isEnglish ? "Core stack" : "Stack principal"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology.name}
                  className={`group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-[border-color,background-color,box-shadow,color] duration-200 hover:border-zinc-400 hover:bg-white hover:shadow-[0_8px_20px_rgba(15,23,42,0.07)] ${
                    technology.core
                      ? "border-emerald-200 bg-emerald-50/80 text-emerald-950"
                      : "border-zinc-300/80 bg-white/80 text-zinc-800"
                  }`}
                  style={{ boxShadow: `inset 0 0 0 1px ${technology.color}20` }}
                >
                  {technology.logo ? (
                    <span
                      className="grid size-5 place-items-center rounded-full border border-zinc-200 bg-white/90 transition-[border-color,box-shadow] duration-200 group-hover:border-zinc-300"
                      style={{ boxShadow: `inset 0 0 0 1px ${technology.color}22` }}
                    >
                      <Image src={`/images/stack/${technology.logo}`} alt="" aria-hidden="true" width={14} height={14} />
                    </span>
                  ) : (
                    <span
                      className="grid size-4 place-items-center rounded-full text-[9px] font-bold text-white transition-shadow duration-200 group-hover:shadow-[0_0_0_3px_rgba(255,255,255,0.85)]"
                      style={{ background: technology.color, boxShadow: `0 0 0 1px ${technology.color}55` }}
                    >
                      {technology.mark}
                    </span>
                  )}
                  {technology.name}
                </span>
              ))}
            </div>
          </section>

          <section id="trayectoria" className="mt-5 rounded-3xl border border-zinc-200/90 bg-white/90 p-5 shadow-[0_16px_48px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.06)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em]"><SectionLabel text={copy.experienceHeading} /></h2>
              <span className="text-xs text-zinc-500">{copy.experienceSubheading}</span>
            </div>
            <div className="space-y-4">
              {content.experience.map((item) => (
                <article key={item.role} className="group rounded-2xl border border-zinc-200/80 bg-[#faf9f7] p-4 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)] sm:p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">{item.role} <span className="text-zinc-400">/</span> <span className="text-zinc-700">{item.company}</span></h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">{item.period}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 pl-4 text-sm leading-6 text-zinc-600 marker:text-emerald-700">
                    {item.responsibilities.map((responsibility) => {
                      const colonIndex = responsibility.indexOf(":");
                      const hasLeadLabel = colonIndex > 0 && colonIndex < 48;
                      return (
                        <li key={responsibility} className="list-disc">
                          {hasLeadLabel ? (
                            <>
                              <strong className="font-semibold text-zinc-800">
                                {responsibility.slice(0, colonIndex + 1)}
                              </strong>
                              {responsibility.slice(colonIndex + 1)}
                            </>
                          ) : (
                            responsibility
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-5 grid items-start gap-5 lg:grid-cols-2">
            <div className="space-y-5">
              <section id="proyectos" className="rounded-3xl border border-zinc-200/90 bg-white/90 p-5 shadow-[0_16px_48px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.06)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.22em]"><SectionLabel text={copy.projectsHeading} /></h2>
                  <span className="text-xs text-zinc-500">{copy.projectPeriod}</span>
                </div>
                <div className="space-y-3">
                  {content.projects.map((project) => (
                    <article key={project.name} className="group rounded-2xl border border-zinc-200/80 bg-[#faf9f7] p-4 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{project.label}</p>
                        <ul aria-label={isEnglish ? "Technologies" : "Tecnologías"} className="flex flex-wrap gap-1.5">
                          {project.technologies.split(", ").map((technology) => (
                            <li
                              key={technology}
                              className="rounded-full border border-zinc-200 bg-white/80 px-2 py-1 text-[10px] font-medium text-zinc-600"
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{project.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{project.description}</p>
                      <p className="mt-3 border-t border-zinc-200/80 pt-3 text-xs leading-5 text-zinc-600">
                        <span className="font-semibold text-emerald-800">{copy.impact}: </span>
                        {project.impact}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-zinc-200/90 bg-white/90 p-5 shadow-[0_16px_48px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.06)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{isEnglish ? "Recent win" : "Logro reciente"}</p>
                <p className="mt-5 text-3xl font-semibold tracking-tighter text-emerald-700 sm:text-4xl">14.98s → 9.60s</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {isEnglish
                    ? "Maximum API response time improvement measured in Datadog."
                    : "Mejora del tiempo máximo de respuesta de la API medida en Datadog."}
                </p>
              </div>

          <section id="habilidades" className="rounded-3xl border border-zinc-200/90 bg-white/90 p-5 shadow-[0_16px_48px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.06)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em]"><SectionLabel text={copy.skillsHeading} /></h2>
              <span className="text-xs text-zinc-500">{copy.skillsSubheading}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.skills.map((skill) => (
                <article
                  key={skill.category}
                  className={`rounded-2xl border p-4 ${
                    skill.featured
                      ? "border-emerald-200 bg-emerald-50/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:col-span-2"
                      : "border-zinc-200/80 bg-[#faf9f7]"
                  }`}
                >
                  <h3 className={`text-base font-semibold tracking-tight ${skill.featured ? "text-emerald-950" : "text-zinc-900"}`}>
                    {skill.category}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{skill.items}</p>
                </article>
              ))}
            </div>
          </section>

          <aside id="contacto" className="rounded-3xl border border-zinc-200/90 bg-[#f3dddd] p-5 text-zinc-900 shadow-[0_16px_48px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.06)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-700">{copy.contactHeading}</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight">{copy.contactHeadline}</h3>
            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <a className="block transition-colors hover:text-zinc-950" href={`mailto:${content.profile.email}`}>{content.profile.email}</a>
              <a className="block transition-colors hover:text-zinc-950" href={`tel:${content.profile.phone.replaceAll(" ", "")}`}>{content.profile.phone}</a>
              <a className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-950" href={content.profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a className="ml-5 inline-flex items-center gap-1.5 transition-colors hover:text-zinc-950" href={content.profile.github} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <a className="mt-6 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800" href={`mailto:${content.profile.email}`}>
              {copy.contactAction}
            </a>
          </aside>

          <section id="educacion" className="rounded-3xl border border-zinc-200/90 bg-[#f3e5df] p-5 text-zinc-900 shadow-[0_16px_48px_rgba(15,23,42,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.065)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]"><SectionLabel text={copy.educationHeading} /></p>
            <div className="mt-5 space-y-3">
              {content.education.map((item) => (
                <div key={item.title}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tighter">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-700">{item.institution}</p>
                  <p className="mt-2 text-sm text-zinc-700/80">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
            </div>
          </div>
      </div>
    </main>
  );
}
