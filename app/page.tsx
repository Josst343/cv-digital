"use client";

import { useEffect, useSyncExternalStore } from "react";
import { education, experience, profile, projects, skills } from "./data/profile";
import { englishContent, spanishUi, type Language } from "./data/locales";
import DownloadCvButton from "./components/download-cv-button";
import ThemeAccentSelector from "./components/theme-accent-selector";
import Image from "next/image";

const technologies = [
  { name: "Java", logo: "java.svg", color: "#F89820" },
  { name: "Spring Boot", logo: "spring.svg", color: "#77BC1F" },
  { name: "React", logo: "react.svg", color: "#61DAFB" },
  { name: "Go", logo: "go.svg", color: "#00ADD8" },
  { name: "PostgreSQL", logo: "postgresql.svg", color: "#4169E1" },
  { name: "GraphQL", logo: "graphql.svg", color: "#E10098" },
  { name: "Salesforce", logo: "salesforce.svg", color: "#00A1E0" },
  { name: "Apigee", mark: "API", color: "#00A86B" },
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
    <main className="min-h-screen bg-[#f5f3ee] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-6 flex items-center justify-between rounded-full border border-zinc-200 bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl">
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
              className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-[11px] font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-950"
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <section
            id="inicio"
            className="rounded-[30px] border border-zinc-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] xl:col-span-2 xl:p-8"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="rounded-full border border-zinc-200 bg-[#f3f1ee] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-700">
                {copy.aboutHeading}
              </span>
              <span className="hidden text-[11px] text-zinc-500 sm:inline">{copy.hero.openToWork}</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-zinc-900 sm:text-5xl xl:text-[4.2rem]">
              {content.profile.name}
            </h1>

            <p className="mt-4 max-w-2xl font-mono text-sm text-emerald-700 sm:text-base">
              {content.profile.role}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600">
              {content.profile.intro}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-700">
              <a className="rounded-full border border-zinc-200 bg-[#f7f5f3] px-4 py-2 transition hover:border-zinc-300 hover:bg-white" href={`mailto:${content.profile.email}`}>
                {content.profile.email}
              </a>
              <a className="rounded-full border border-zinc-200 bg-[#f7f5f3] px-4 py-2 transition hover:border-zinc-300 hover:bg-white" href={`tel:${content.profile.phone.replaceAll(" ", "")}`}>
                {content.profile.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 print-hidden">
              <a className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800" href="#contacto">
                {copy.hero.contact}
              </a>
              <a className="rounded-full border border-zinc-200 bg-[#f7f5f3] px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white" href="#proyectos">
                {copy.hero.projects}
              </a>
              <DownloadCvButton language={language} />
            </div>
          </section>

          <aside className="rounded-[30px] border border-zinc-200 bg-[#f3e5df] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="relative h-52 overflow-hidden rounded-3xl border border-zinc-300/70 bg-zinc-200">
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

          <div className="rounded-[30px] border border-zinc-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">{isEnglish ? "Impact" : "Impacto"}</p>
            <p className="mt-6 text-5xl font-semibold tracking-[-0.07em] text-zinc-900">36%</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {isEnglish
                ? "Latency reduction in API response time after optimization."
                : "Reducción de latencia en el tiempo de respuesta de APIs tras la optimización."}
            </p>
          </div>

          <div className="rounded-[30px] border border-zinc-200 bg-[#f0f2f4] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] xl:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">{isEnglish ? "Location" : "Ubicación"}</p>
            <p className="mt-6 text-2xl font-semibold text-zinc-900">CDMX</p>
            <p className="mt-2 text-sm text-zinc-600">{isEnglish ? "Mexico City" : "Ciudad de México"}</p>
            <div className="mt-6 border-t border-zinc-200 pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{isEnglish ? "Availability" : "Disponibilidad"}</p>
              <p className="mt-2 text-sm text-emerald-700">{isEnglish ? "Open to remote / hybrid roles" : "Abierto a roles remotos / híbridos"}</p>
            </div>
          </div>

          <section className="rounded-[30px] border border-zinc-200 bg-[#f4ede8] p-5 text-zinc-800 shadow-[0_20px_60px_rgba(15,23,42,0.06)] xl:col-span-2">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">{copy.technologyStack}</p>
              <span className="rounded-full border border-zinc-300 bg-white/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                {isEnglish ? "Core stack" : "Stack principal"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology.name}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-3 py-2 text-sm font-medium text-zinc-800"
                  style={{ boxShadow: `inset 0 0 0 1px ${technology.color}20` }}
                >
                  {technology.logo ? (
                    <Image src={`/images/stack/${technology.logo}`} alt="" aria-hidden="true" width={18} height={18} />
                  ) : (
                    <span className="grid size-4 place-items-center rounded-full bg-zinc-800 text-[9px] font-bold text-white">{technology.mark}</span>
                  )}
                  {technology.name}
                </span>
              ))}
            </div>
          </section>

          <div className="rounded-[30px] border border-zinc-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">{isEnglish ? "Recent win" : "Logro reciente"}</p>
            <p className="mt-6 text-3xl font-semibold tracking-tighter text-zinc-900">14.98s → 9.60s</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {isEnglish
                ? "Maximum API response time improvement measured in Datadog."
                : "Mejora del tiempo máximo de respuesta de la API medida en Datadog."}
            </p>
          </div>

          <section id="trayectoria" className="rounded-[30px] border border-zinc-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] xl:col-span-2">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-700">{copy.experienceHeading}</h2>
              <span className="text-xs text-zinc-500">{copy.experienceSubheading}</span>
            </div>
            <div className="space-y-4">
              {content.experience.map((item) => (
                <article key={item.role} className="rounded-2xl border border-zinc-200 bg-[#f9f8f7] p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900">{item.role} | {item.company}</h3>
                      <p className="mt-1 font-mono text-[11px] text-zinc-500">{item.period}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 pl-4 text-sm leading-6 text-zinc-600 marker:text-emerald-700">
                    {item.responsibilities.slice(0, 4).map((responsibility) => (
                      <li key={responsibility} className="list-disc">{responsibility}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <aside id="contacto" className="rounded-[30px] border border-zinc-200 bg-[#f3dddd] p-5 text-zinc-900 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-700">{copy.contactHeading}</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{copy.contactHeadline}</h3>
            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <a className="block hover:text-zinc-900" href={`mailto:${content.profile.email}`}>{content.profile.email}</a>
              <a className="block hover:text-zinc-900" href={`tel:${content.profile.phone.replaceAll(" ", "")}`}>{content.profile.phone}</a>
            </div>
            <a className="mt-6 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800" href={`mailto:${content.profile.email}`}>
              {copy.contactAction}
            </a>
          </aside>

          <section id="habilidades" className="rounded-[30px] border border-zinc-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] xl:col-span-2">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-700">{copy.skillsHeading}</h2>
              <span className="text-xs text-zinc-500">{copy.skillsSubheading}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.skills.map((skill) => (
                <article key={skill.category} className="rounded-2xl border border-zinc-200 bg-[#f9f8f7] p-4">
                  <h3 className="text-lg font-semibold text-zinc-900">{skill.category}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{skill.items}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="proyectos" className="rounded-[30px] border border-zinc-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] xl:col-span-2">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-700">{copy.projectsHeading}</h2>
              <span className="text-xs text-zinc-500">{copy.projectPeriod}</span>
            </div>
            <div className="space-y-3">
              {content.projects.map((project) => (
                <article key={project.name} className="rounded-2xl border border-zinc-200 bg-[#f9f8f7] p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{project.label}</p>
                    <span className="text-xs text-zinc-500">{project.technologies}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{project.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="educacion" className="rounded-[30px] border border-zinc-200 bg-[#f3e5df] p-5 text-zinc-900 shadow-[0_20px_60px_rgba(15,23,42,0.06)] xl:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-700">{copy.educationHeading}</p>
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
    </main>
  );
}
