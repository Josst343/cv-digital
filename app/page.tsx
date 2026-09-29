"use client";

import { useEffect, useSyncExternalStore } from "react";
import { aspirations, education, experience, profile, projects, skills } from "./data/profile";
import { englishContent, spanishUi, type Language } from "./data/locales";
import DownloadCvButton from "./components/download-cv-button";
import ThemeAccentSelector from "./components/theme-accent-selector";
import Image from "next/image";
import type { CSSProperties } from "react";

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
    aspirations,
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
      ? "Resume - Josue Misael Flores Fernandez"
      : "Curriculum Vitae - Josue Misael Flores Fernandez";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      isEnglish
        ? "Professional profile and selected projects."
        : "Presentación de mi perfil profesional y proyectos destacados.",
    );
  }, [isEnglish, language]);

  function selectLanguage(selectedLanguage: Language) {
    window.localStorage.setItem(languageStorageKey, selectedLanguage);
    window.dispatchEvent(new Event(languageChangeEvent));
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-6 text-zinc-100 sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-zinc-800 pb-6">
        <a className="font-mono text-sm font-semibold tracking-widest text-emerald-400" href="#inicio">
          {content.profile.name}
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden gap-5 text-sm text-zinc-400 lg:flex">
            <a className="transition-colors hover:text-white" href="#sobre-mi">{copy.navigation.about}</a>
            <a className="transition-colors hover:text-white" href="#trayectoria">{copy.navigation.experience}</a>
            <a className="transition-colors hover:text-white" href="#educacion">{copy.navigation.education}</a>
            <a className="transition-colors hover:text-white" href="#habilidades">{copy.navigation.skills}</a>
            <a className="transition-colors hover:text-white" href="#aspiraciones">{copy.navigation.aspirations}</a>
            <a className="transition-colors hover:text-white" href="#proyectos">{copy.navigation.projects}</a>
            <a className="transition-colors hover:text-white" href="#contacto">{copy.navigation.contact}</a>
          </div>
          <button
            className="rounded-full border border-emerald-400 bg-transparent px-4 py-2 text-sm text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:text-zinc-950 hover:shadow-[0_0_22px_var(--accent-glow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 active:translate-y-0 active:scale-[0.98]"
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

      <div className="print-container mx-auto max-w-6xl">
        <section id="inicio" className="grid gap-10 py-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:py-36">
          <div>
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-emerald-400">
              <span className="sr-only">{copy.hero.roles}</span>
              <span className="role-rotator" aria-hidden="true">
                <span className="role-rotator__item">{content.profile.role}</span>
                <span className="role-rotator__item">Full Stack</span>
                <span className="role-rotator__item">Java &amp; React</span>
              </span>
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
              {content.profile.headline}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              {content.profile.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 print-hidden">
              <a className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_0_22px_var(--accent-glow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 active:translate-y-0 active:scale-[0.98]" href="#contacto">
                {copy.hero.contact}
              </a>
              <a className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800/80 hover:shadow-[0_0_18px_rgba(161,161,170,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 active:translate-y-0 active:scale-[0.98]" href="#proyectos">
                {copy.hero.projects}
              </a>
              <DownloadCvButton language={language} />
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 lg:items-end">
            <div
              className="group relative aspect-square w-44 overflow-hidden rounded-xl border border-emerald-400/60 shadow-[0_0_20px_var(--accent-glow-soft)] transition duration-300 hover:border-emerald-300 hover:shadow-[0_0_28px_var(--accent-glow)] sm:w-52"
            >
              <Image
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/profile-photo.jpg"
                alt={copy.hero.photoAlt}
                fill
                priority
                sizes="(max-width: 640px) 176px, 208px"
              />
            </div>
            <div className="border-l border-emerald-400 pl-5 text-sm leading-7 lg:max-w-xs">
              <div className="flex items-center gap-2 font-mono font-semibold text-emerald-400">
                <span aria-hidden="true" className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_var(--accent-glow)]" />
                </span>
                {copy.hero.openToWork}
              </div>
              <p className="mt-1 text-zinc-500">{content.profile.availability}</p>
            </div>
          </div>
        </section>

        <section id="tecnologias" aria-label={copy.technologyStack} className="border-t border-zinc-800 py-12 sm:py-14">
          <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-emerald-400">{copy.technologyStack}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {technologies.map((technology) => (
              <figure
                key={technology.name}
                className="technology-card group relative flex min-h-28 flex-col items-center justify-center gap-3 rounded-md border border-zinc-800 bg-zinc-900/40 px-3 py-4 text-center"
                style={{ "--technology-color": technology.color } as CSSProperties}
                tabIndex={0}
                role="img"
                aria-label={technology.name}
                title={technology.name}
              >
                {technology.logo ? (
                  <Image
                    src={`/images/stack/${technology.logo}`}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="size-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span aria-hidden="true" className="grid size-10 place-items-center rounded-md border border-emerald-400/40 font-mono text-sm font-bold text-emerald-300">
                    {technology.mark}
                  </span>
                )}
                <figcaption aria-hidden="true" className="text-sm font-medium text-zinc-300">
                  {technology.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="sobre-mi" className="grid gap-8 border-t border-zinc-800 py-16 md:grid-cols-[0.35fr_1fr]">
          <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">{copy.aboutHeading}</h2>
          <p className="max-w-2xl text-2xl leading-relaxed text-zinc-300">
            {content.profile.summary}
          </p>
        </section>

        <section id="trayectoria" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">{copy.experienceHeading}</h2>
            <span className="text-sm text-zinc-500">{copy.experienceSubheading}</span>
          </div>
          <div className="space-y-4">
            {content.experience.map((item) => (
              <article key={item.role} className="border border-zinc-800 p-6 transition-colors hover:border-emerald-400">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <p className="font-mono text-sm text-zinc-500">{item.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-zinc-400">{item.company}</p>
                  </div>
                  <span className="font-mono text-sm text-emerald-400">SR</span>
                </div>
                <p className="mt-6 max-w-3xl leading-7 text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="educacion" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">{copy.educationHeading}</h2>
            <span className="text-sm text-zinc-500">{copy.educationSubheading}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {content.education.map((item) => (
              <article key={item.title} className="border border-zinc-800 p-6 transition-colors hover:border-emerald-400">
                <p className="font-mono text-sm text-zinc-500">{item.period}</p>
                <h3 className="mt-12 text-2xl font-semibold">{item.title}</h3>
                {item.institution && <p className="mt-2 text-zinc-400">{item.institution}</p>}
                <p className="mt-3 leading-7 text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">{copy.skillsHeading}</h2>
            <span className="text-sm text-zinc-500">{copy.skillsSubheading}</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.skills.map((skill) => (
              <article key={skill.category} className="border border-zinc-800 p-6 transition-colors hover:border-emerald-400">
                <h3 className="text-lg font-semibold">{skill.category}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{skill.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="aspiraciones" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">{copy.aspirationsHeading}</h2>
            <span className="text-sm text-zinc-500">{copy.aspirationsSubheading}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {content.aspirations.map((aspiration) => (
              <article key={aspiration.title} className="border border-zinc-800 p-6 transition-colors hover:border-emerald-400">
                <p className="font-mono text-sm text-zinc-500">{aspiration.label}</p>
                <h3 className="mt-12 text-2xl font-semibold">{aspiration.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{aspiration.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">{copy.projectsHeading}</h2>
            <span className="text-sm text-zinc-500">{copy.projectPeriod}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {content.projects.map((project) => (
              <article key={project.name} className="border border-zinc-800 p-6 transition-colors hover:border-emerald-400">
                <p className="font-mono text-sm text-zinc-500">{project.label}</p>
                <h3 className="mt-12 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="border-t border-zinc-800 py-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">{copy.contactHeading}</h2>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{copy.contactHeadline}</h2>
          <a className="mt-8 inline-block text-lg text-zinc-300 underline decoration-emerald-400 decoration-2 underline-offset-8 transition-colors hover:text-emerald-400" href={`mailto:${content.profile.email}`}>
            {content.profile.email}
          </a>
          <a className="mt-4 block text-lg text-zinc-300 underline decoration-emerald-400 decoration-2 underline-offset-8 transition-colors hover:text-emerald-400" href={`tel:${content.profile.phone}`}>
            {content.profile.phone}
          </a>
        </section>

        <footer className="border-t border-zinc-800 py-6 text-sm text-zinc-500">
          © {content.profile.copyrightYear} {content.profile.name}
        </footer>
      </div>
      </main>
  );
}