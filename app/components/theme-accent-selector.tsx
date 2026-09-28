"use client";

import { useEffect, useSyncExternalStore } from "react";

const accents = [
  { id: "terminal", label: "Verde Terminal", color: "#34d399" },
  { id: "react", label: "Azul React", color: "#61dafb" },
  { id: "violet", label: "Morado", color: "#c084fc" },
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

export default function ThemeAccentSelector() {
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
    <div className="accent-selector" role="group" aria-label="Color de acento">
      {accents.map((accent) => (
        <button
          key={accent.id}
          className="accent-choice"
          type="button"
          style={{ "--swatch-color": accent.color } as React.CSSProperties}
          aria-label={accent.label}
          aria-pressed={selectedAccent === accent.id}
          title={accent.label}
          onClick={() => selectAccent(accent)}
        >
          <span aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
