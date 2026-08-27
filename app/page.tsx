import { aspirations, education, experience, profile, projects, skills } from "./data/profile";
import DownloadCvButton from "./components/download-cv-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-6 text-zinc-100 sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-zinc-800 pb-6">
        <a className="font-mono text-sm font-semibold tracking-widest text-emerald-400" href="#inicio">
          {profile.name}
        </a>
        <div className="hidden gap-6 text-sm text-zinc-400 sm:flex">
          <a className="transition-colors hover:text-white" href="#sobre-mi">Sobre mi</a>
          <a className="transition-colors hover:text-white" href="#trayectoria">Trayectoria</a>
          <a className="transition-colors hover:text-white" href="#educacion">Educación</a>
          <a className="transition-colors hover:text-white" href="#habilidades">Habilidades</a>
          <a className="transition-colors hover:text-white" href="#aspiraciones">Aspiraciones</a>
          <a className="transition-colors hover:text-white" href="#proyectos">Proyectos</a>
          <a className="transition-colors hover:text-white" href="#contacto">Contacto</a>
        </div>
      </nav>

      <div className="print-container mx-auto max-w-6xl">
        <section id="inicio" className="grid gap-10 py-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:py-36">
          <div>
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-emerald-400">{profile.role}</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
              {profile.headline}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              {profile.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 print-hidden">
              <a className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300" href="#contacto">
                Contactarme
              </a>
              <a className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition-colors hover:border-zinc-400" href="#proyectos">
                Ver proyectos
              </a>
              <DownloadCvButton />
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 lg:items-end">
            <div
              className="relative aspect-square w-44 overflow-hidden border border-emerald-400/60 sm:w-52"
            >
              <Image
                className="object-cover"
                src="/images/profile-photo.jpg"
                alt="Fotografía profesional de Josue Misael Flores Fernandez"
                fill
                priority
                sizes="(max-width: 640px) 176px, 208px"
              />
            </div>
            <p className="border-l border-emerald-400 pl-5 text-sm leading-7 text-zinc-500 lg:max-w-xs">
              {profile.availability}
            </p>
          </div>
        </section>

        <section id="sobre-mi" className="grid gap-8 border-t border-zinc-800 py-16 md:grid-cols-[0.35fr_1fr]">
          <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">01 / Sobre mi</h2>
          <p className="max-w-2xl text-2xl leading-relaxed text-zinc-300">
            {profile.summary}
          </p>
        </section>

        <section id="trayectoria" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">02 / Trayectoria</h2>
            <span className="text-sm text-zinc-500">Experiencia profesional</span>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
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
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">03 / Educación</h2>
            <span className="text-sm text-zinc-500">Aprendizaje continuo</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.title} className="border border-zinc-800 p-6 transition-colors hover:border-emerald-400">
                <p className="font-mono text-sm text-zinc-500">{item.period}</p>
                <h3 className="mt-12 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-zinc-400">{item.institution}</p>
                <p className="mt-3 leading-7 text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">04 / Habilidades</h2>
            <span className="text-sm text-zinc-500">Fortalezas profesionales</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <article key={skill.category} className="border border-zinc-800 p-6 transition-colors hover:border-emerald-400">
                <h3 className="text-lg font-semibold">{skill.category}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{skill.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="aspiraciones" className="border-t border-zinc-800 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">05 / Aspiraciones</h2>
            <span className="text-sm text-zinc-500">Próximos objetivos</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {aspirations.map((aspiration) => (
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
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">06 / Proyectos destacados</h2>
            <span className="text-sm text-zinc-500">2024 - 2026</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="border border-zinc-800 p-6 transition-colors hover:border-emerald-400">
                <p className="font-mono text-sm text-zinc-500">{project.label}</p>
                <h3 className="mt-12 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="border-t border-zinc-800 py-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-400">07 / Contacto</h2>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Hablemos de tu próximo proyecto.</h2>
          <a className="mt-8 inline-block text-lg text-zinc-300 underline decoration-emerald-400 decoration-2 underline-offset-8 transition-colors hover:text-emerald-400" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="mt-4 block text-lg text-zinc-300 underline decoration-emerald-400 decoration-2 underline-offset-8 transition-colors hover:text-emerald-400" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
        </section>

        <footer className="border-t border-zinc-800 py-6 text-sm text-zinc-500">
          © {profile.copyrightYear} {profile.name}
        </footer>
      </div>
      </main>
  );
}