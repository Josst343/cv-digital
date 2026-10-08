"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import { aspirations, education, experience, profile, projects, skills } from "../data/profile";
import { englishContent, type Language } from "../data/locales";

const loadPhoto = async () => {
  const response = await fetch("/images/profile-photo.jpg");
  const photoBlob = await response.blob();

  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(photoBlob);
  });
};

export default function DownloadCvButton({ language }: { language: Language }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const isEnglish = language === "en";
  const content = isEnglish ? englishContent : { aspirations, education, experience, profile, projects, skills };
  const sectionTitles = isEnglish
    ? { profile: "Professional Profile", experience: "Professional Experience", education: "Education", skills: "Skills", aspirations: "How I Can Contribute", projects: "Selected Projects" }
    : { profile: "Perfil profesional", experience: "Experiencia profesional", education: "Formación", skills: "Habilidades", aspirations: "Cómo puedo aportar", projects: "Proyectos destacados" };

  const handleDownload = async () => {
    setIsGenerating(true);
    setError("");

    try {
      const pdfDocument = new jsPDF({ format: "a4", unit: "mm" });
      const photoDataUrl = await loadPhoto();
      const margin = 18;
      const contentWidth = 210 - margin * 2;
      const bottomMargin = 280;
      const bodyLineHeight = 4.8;
      let y = 20;

      const ensureSpace = (height: number) => {
        if (y + height > bottomMargin) {
          pdfDocument.addPage();
          y = 20;
        }
      };

      const addParagraph = (text: string, size = 10, color = "#3f3f46") => {
        pdfDocument.setFont("helvetica", "normal");
        pdfDocument.setFontSize(size);
        pdfDocument.setTextColor(color);
        const lines = pdfDocument.splitTextToSize(text, contentWidth);
        const lineHeight = size === 10 ? bodyLineHeight : size * 0.42;
        ensureSpace(lines.length * lineHeight + 2);
        pdfDocument.text(lines, margin, y);
        y += lines.length * lineHeight + 2;
      };

      const addSectionTitle = (title: string) => {
        ensureSpace(14);
        y += 4;
        pdfDocument.setFont("helvetica", "bold");
        pdfDocument.setFontSize(12);
        pdfDocument.setTextColor("#047857");
        pdfDocument.text(title.toUpperCase(), margin, y);
        pdfDocument.setDrawColor("#d4d4d8");
        pdfDocument.line(margin, y + 2, 210 - margin, y + 2);
        y += 10;
      };

      pdfDocument.setFont("helvetica", "bold");
      pdfDocument.setFontSize(23);
      pdfDocument.setTextColor("#18181b");
      pdfDocument.text(content.profile.name, margin, y);
      y += 8;
      pdfDocument.setFont("helvetica", "normal");
      pdfDocument.setFontSize(12);
      pdfDocument.setTextColor("#047857");
      pdfDocument.text(content.profile.role, margin, y);
      y += 6;
      pdfDocument.setFontSize(9);
      pdfDocument.setTextColor("#52525b");
      pdfDocument.text(`${content.profile.email}  |  ${content.profile.phone}`, margin, y);
      pdfDocument.addImage(photoDataUrl, "JPEG", 154, 12, 38, 38);
      y += 9;

      addSectionTitle(sectionTitles.profile);
      addParagraph(content.profile.intro);
      addParagraph(content.profile.summary);

      addSectionTitle(sectionTitles.experience);
      content.experience.forEach((item) => {
        ensureSpace(30);
        pdfDocument.setFont("helvetica", "bold");
        pdfDocument.setFontSize(11);
        pdfDocument.setTextColor("#18181b");
        pdfDocument.text(item.role, margin, y);
        pdfDocument.setFont("helvetica", "normal");
        pdfDocument.setFontSize(9);
        pdfDocument.setTextColor("#047857");
        pdfDocument.text(item.period, 210 - margin, y, { align: "right" });
        y += 5;
        pdfDocument.setTextColor("#52525b");
        pdfDocument.text(item.company, margin, y);
        y += 6;
        addParagraph(item.description);
      });

      addSectionTitle(sectionTitles.education);
      content.education.forEach((item) => {
        ensureSpace(25);
        pdfDocument.setFont("helvetica", "bold");
        pdfDocument.setFontSize(11);
        pdfDocument.setTextColor("#18181b");
        pdfDocument.text(item.title, margin, y);
        y += 5;
        pdfDocument.setFont("helvetica", "normal");
        pdfDocument.setFontSize(9);
        pdfDocument.setTextColor("#52525b");
        pdfDocument.text(
          item.institution ? `${item.institution} | ${item.period}` : item.period,
          margin,
          y,
        );
        y += 6;
        addParagraph(item.description);
      });

      addSectionTitle(sectionTitles.skills);
      content.skills.forEach((skill) => {
        ensureSpace(14);
        pdfDocument.setFont("helvetica", "bold");
        pdfDocument.setFontSize(10);
        pdfDocument.setTextColor("#18181b");
        pdfDocument.text(`${skill.category}:`, margin, y);
        const categoryWidth = pdfDocument.getTextWidth(`${skill.category}: `);
        pdfDocument.setFont("helvetica", "normal");
        pdfDocument.setTextColor("#3f3f46");
        const lines = pdfDocument.splitTextToSize(skill.items, contentWidth - categoryWidth);
        pdfDocument.text(lines, margin + categoryWidth, y);
        y += lines.length * bodyLineHeight + 2;
      });

      addSectionTitle(sectionTitles.aspirations);
      content.aspirations.forEach((aspiration) => {
        pdfDocument.setFont("helvetica", "bold");
        pdfDocument.setFontSize(10);
        pdfDocument.setTextColor("#18181b");
        addParagraph(aspiration.title, 10, "#18181b");
        addParagraph(aspiration.description);
      });

      addSectionTitle(sectionTitles.projects);
      content.projects.forEach((project) => {
        ensureSpace(18);
        pdfDocument.setFont("helvetica", "bold");
        pdfDocument.setFontSize(10);
        pdfDocument.setTextColor("#18181b");
        addParagraph(project.name, 10, "#18181b");
        addParagraph(project.description);
      });

      const pageCount = pdfDocument.getNumberOfPages();
      for (let page = 1; page <= pageCount; page += 1) {
        pdfDocument.setPage(page);
        pdfDocument.setFont("helvetica", "normal");
        pdfDocument.setFontSize(8);
        pdfDocument.setTextColor("#71717a");
        pdfDocument.text(`${isEnglish ? "Resume" : "CV"} - ${content.profile.name} | ${page} / ${pageCount}`, margin, 289);
      }

      const pdfBlob = pdfDocument.output("blob");
      const downloadUrl = URL.createObjectURL(pdfBlob);
      const downloadLink = window.document.createElement("a");
      downloadLink.href = downloadUrl;
      downloadLink.download = `${isEnglish ? "resume" : "cv"}-josue-flores-fernandez.pdf`;
      window.document.body.appendChild(downloadLink);
      downloadLink.click();
      window.setTimeout(() => {
        downloadLink.remove();
        URL.revokeObjectURL(downloadUrl);
      }, 1000);
    } catch {
      setError(isEnglish ? "Could not generate the PDF. Please try again." : "No se pudo generar el PDF. Intenta nuevamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <span className="print-hidden inline-flex flex-col items-start gap-2">
      <button
        className="rounded-full border border-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:text-zinc-950 hover:shadow-[0_0_22px_var(--accent-glow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 active:translate-y-0 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        type="button"
        onClick={handleDownload}
        disabled={isGenerating}
        aria-busy={isGenerating}
      >
        {isGenerating
          ? isEnglish ? "Generating PDF..." : "Generando PDF..."
          : isEnglish ? "Download resume as PDF" : "Descargar CV en PDF"}
      </button>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </span>
  );
}
