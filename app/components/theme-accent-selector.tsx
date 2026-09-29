"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Language } from "../data/locales";

const accents = [
  { id: "terminal", label: { es: "Verde Terminal", en: "Terminal green" }, color: "#34d399" },
  { id: "react", label: { es: "Azul React", en: "React blue" }, color: "#61dafb" },
  { id: "violet", label: { es: "Morado", en: "Violet" }, color: "#c084fc" },
] as const;

type AccentId = (typeof accents)[number]["id"];
const storageKey = "cv-digital-accent";
const accentChangeEvent = "cv-digital-accent-change";

function subscribeToAccentChanges(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(accentChangeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(accentChangeEvent, onChange);
  };
}

function getStoredAccent(): AccentId {
  const savedAccent = window.localStorage.getItem(storageKey);
  return accents.find((accent) => accent.id === savedAccent)?.id ?? "terminal";
}

function getServerAccent(): AccentId {
  return "terminal";
}

export default function ThemeAccentSelector({ language }: { language: Language }) {
  const selectedAccent = useSyncExternalStore(
    subscribeToAccentChanges,
    getStoredAccent,
    getServerAccent,
  );

  useEffect(() => {
    document.documentElement.dataset.accent = selectedAccent;
  }, [selectedAccent]);

  const selectAccent = (accent: (typeof accents)[number]) => {
    window.localStorage.setItem(storageKey, accent.id);
    window.dispatchEvent(new Event(accentChangeEvent));
  };

  return (
    <div className="accent-selector" role="group" aria-label={language === "es" ? "Color de acento" : "Accent color"}>
      {accents.map((accent) => (
        <button
          key={accent.id}
          className="accent-choice"
          type="button"
          style={{ "--swatch-color": accent.color } as React.CSSProperties}
          aria-label={accent.label[language]}
          aria-pressed={selectedAccent === accent.id}
          title={accent.label[language]}
          onClick={() => selectAccent(accent)}
        >
          <span aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
