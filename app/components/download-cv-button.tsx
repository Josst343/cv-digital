"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import { education, experience, profile, projects, skills } from "../data/profile";
import { englishContent, type Language } from "../data/locales";

const loadPhoto = async () => {
  const response = await fetch("/images/profile-photo.jpg");
  if (!response.ok) {
    throw new Error("Unable to load the profile photo.");
  }

  const photoBlob = await response.blob();

  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Unable to read the profile photo."));
      }
    };
    reader.onerror = () => reject(reader.error ?? new Error("Unable to read the profile photo."));
    reader.readAsDataURL(photoBlob);
  });
};

export default function DownloadCvButton({ language }: { language: Language }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const isEnglish = language === "en";
  const content = isEnglish ? englishContent : { education, experience, profile, projects, skills };
  const labels = isEnglish
    ? {
        contact: "CONTACT",
        education: "EDUCATION",
        experience: "PROFESSIONAL EXPERIENCE",
        incompleteStudies: "Incomplete university studies",
        languages: "LANGUAGES",
        skills: "SKILLS",
      }
    : {
        contact: "CONTACTO",
        education: "EDUCACIÓN",
        experience: "EXPERIENCIA LABORAL",
        incompleteStudies: "Estudios universitarios incompletos",
        languages: "IDIOMAS",
        skills: "HABILIDADES",
      };

  const handleDownload = async () => {
    setIsGenerating(true);
    setError("");

    try {
      const pdfDocument = new jsPDF({ format: "a4", unit: "mm" });
      const photoDataUrl = await loadPhoto();
      const photo = new Image();
      photo.src = photoDataUrl;
      await photo.decode();

      const photoCanvas = window.document.createElement("canvas");
      photoCanvas.width = 400;
      photoCanvas.height = 400;
      const photoContext = photoCanvas.getContext("2d");
      if (!photoContext) {
        throw new Error("Unable to prepare the profile photo.");
      }
      photoContext.beginPath();
      photoContext.arc(200, 200, 200, 0, Math.PI * 2);
      photoContext.clip();
      const photoScale = Math.max(400 / photo.naturalWidth, 400 / photo.naturalHeight);
      const photoWidth = photo.naturalWidth * photoScale;
      const photoHeight = photo.naturalHeight * photoScale;
      photoContext.drawImage(photo, (400 - photoWidth) / 2, (400 - photoHeight) / 2, photoWidth, photoHeight);

      const colors = {
        accent: "#936a66",
        background: "#ffffff",
        heading: "#f4e4e1",
        sidebar: "#c4938d",
        sidebarText: "#fffaf9",
        text: "#342c2b",
        muted: "#695b59",
      };
      const sidebarWidth = 72;
      const pageWidth = pdfDocument.internal.pageSize.getWidth();
      const pageHeight = pdfDocument.internal.pageSize.getHeight();
      const sidebarX = 11;
      const sidebarContentWidth = 51;
      const mainX = 89;
      const mainWidth = pageWidth - mainX - 10;
      const titleCaseName = content.profile.name.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

      pdfDocument.setFillColor(colors.background);
      pdfDocument.rect(0, 0, pageWidth, pageHeight, "F");
      pdfDocument.setFillColor(colors.sidebar);
      pdfDocument.rect(0, 0, sidebarWidth, pageHeight, "F");
      pdfDocument.setFillColor(colors.heading);
      pdfDocument.rect(sidebarWidth, 0, pageWidth - sidebarWidth, 70, "F");

      pdfDocument.setFillColor("#ffffff");
      pdfDocument.circle(sidebarWidth / 2, 32, 21.5, "F");
      pdfDocument.addImage(photoCanvas.toDataURL("image/png"), "PNG", 16, 11, 40, 40);

      const drawSectionHeader = (title: string, x: number, y: number, width: number) => {
        pdfDocument.setFillColor(colors.heading);
        pdfDocument.rect(x, y, width, 8.5, "F");
        pdfDocument.setFont("helvetica", "bold");
        pdfDocument.setFontSize(8);
        pdfDocument.setTextColor(colors.text);
        pdfDocument.text(title, x + 6, y + 5.8);
        return y + 13;
      };

      const drawSidebarText = (text: string, y: number, fontSize = 7.2, bold = false) => {
        pdfDocument.setFont("helvetica", bold ? "bold" : "normal");
        pdfDocument.setFontSize(fontSize);
        pdfDocument.setTextColor(colors.sidebarText);
        const lines = pdfDocument.splitTextToSize(text, sidebarContentWidth);
        pdfDocument.text(lines, sidebarX, y);
        return y + lines.length * fontSize * 0.45 + 1.4;
      };

      const drawMainText = (
        text: string,
        x: number,
        y: number,
        width: number,
        fontSize: number,
        color: string,
        bold = false,
        lineHeight = fontSize * 0.44,
      ) => {
        pdfDocument.setFont("helvetica", bold ? "bold" : "normal");
        pdfDocument.setFontSize(fontSize);
        pdfDocument.setTextColor(color);
        const lines = pdfDocument.splitTextToSize(text, width);
        pdfDocument.text(lines, x, y);
        return y + lines.length * lineHeight;
      };

      pdfDocument.setFont("helvetica", "bold");
      pdfDocument.setFontSize(18);
      pdfDocument.setTextColor(colors.text);
      pdfDocument.text(titleCaseName, mainX, 17);
      const roleEndY = drawMainText(content.profile.role, mainX, 24, mainWidth, 8.4, colors.accent, true, 3.7);
      drawMainText(content.profile.intro, mainX, roleEndY + 2, mainWidth, 6.9, colors.muted, false, 3.05);

      let sidebarY = drawSectionHeader(labels.contact, 0, 60, sidebarWidth);
      sidebarY = drawSidebarText(`${isEnglish ? "Phone" : "Teléfono"}  ${content.profile.phone}`, sidebarY);
      sidebarY = drawSidebarText(`${isEnglish ? "Email" : "Correo"}  ${content.profile.email}`, sidebarY);

      sidebarY = drawSectionHeader(labels.skills, 0, sidebarY + 2, sidebarWidth);
      content.skills.forEach((skill) => {
        sidebarY = drawSidebarText(skill.category, sidebarY, 7, true);
        sidebarY = drawSidebarText(skill.items, sidebarY, 6.5);
      });

      sidebarY = drawSectionHeader(labels.languages, 0, sidebarY + 2, sidebarWidth);
      sidebarY = drawSidebarText(isEnglish ? "Spanish" : "Español", sidebarY);
      sidebarY = drawSidebarText(isEnglish ? "Technical English" : "Inglés técnico", sidebarY);

      sidebarY = drawSectionHeader(labels.education, 0, sidebarY + 2, sidebarWidth);
      content.education.forEach((item) => {
        sidebarY = drawSidebarText(item.title, sidebarY, 7.2, true);
        sidebarY = drawSidebarText(item.institution, sidebarY, 6.7);
        sidebarY = drawSidebarText(labels.incompleteStudies, sidebarY, 6.7);
      });

      drawSectionHeader(labels.experience, 80, 76, pageWidth - 90);
      const timelineX = 83.5;
      const experienceTextX = 90;
      const experienceTextWidth = pageWidth - experienceTextX - 10;
      let experienceY = 92;
      const timelineStartY = experienceY;

      content.experience.forEach((item) => {
        pdfDocument.setFillColor(colors.accent);
        pdfDocument.circle(timelineX, experienceY, 1.1, "F");
        experienceY = drawMainText(item.period, experienceTextX, experienceY + 1, experienceTextWidth, 7.2, colors.muted);
        experienceY = drawMainText(`${item.role} | ${item.company}`, experienceTextX, experienceY + 1, experienceTextWidth, 9.0, colors.text, true, 4.1) + 1.2;

        item.responsibilities.forEach((bullet) => {
          pdfDocument.setFillColor(colors.accent);
          pdfDocument.circle(experienceTextX + 0.6, experienceY - 1, 0.45, "F");
          experienceY = drawMainText(
            bullet,
            experienceTextX + 3,
            experienceY,
            experienceTextWidth - 3,
            7.1,
            colors.muted,
            false,
            3.2,
          ) + 1.0;
        });
        experienceY += 3.5;
      });

      pdfDocument.setDrawColor(colors.accent);
      pdfDocument.setLineWidth(0.35);
      pdfDocument.line(timelineX, timelineStartY, timelineX, Math.min(experienceY - 2, 282));

      if (content.projects.length > 0) {
        let projectsY = experienceY + 10;
        if (projectsY > 185) {
          pdfDocument.addPage();
          projectsY = 18;
        }

        drawSectionHeader(
          isEnglish ? "TECHNICAL ACHIEVEMENTS & INITIATIVES" : "LOGROS TÉCNICOS E INICIATIVAS",
          80,
          projectsY,
          pageWidth - 90,
        );
        let projectY = projectsY + 13;

        content.projects.forEach((project) => {
          if (projectY > 250) {
            pdfDocument.addPage();
            projectY = 18;
          }

          projectY = drawMainText(`${project.label} • ${project.name}`, mainX, projectY, mainWidth, 8.8, colors.text, true, 4.2);
          projectY = drawMainText(project.description, mainX, projectY + 2, mainWidth, 7, colors.muted, false, 3.2);
          projectY = drawMainText(`${isEnglish ? "Technologies" : "Tecnologías"}: ${project.technologies}`, mainX, projectY + 2, mainWidth, 6.8, colors.accent, true, 3.1);
          projectY += 6;
        });
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
    } catch (generationError) {
      console.error("Failed to generate the CV PDF.", generationError);
      setError(isEnglish ? "Could not generate the PDF. Please try again." : "No se pudo generar el PDF. Intenta nuevamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <span className="print-hidden inline-flex flex-col items-start gap-2">
      <button
        className="inline-flex h-12 items-center gap-2 rounded-full border border-emerald-700 bg-white px-5 text-sm font-semibold text-emerald-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-[0_8px_22px_rgba(4,120,87,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 active:translate-y-0 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        type="button"
        onClick={handleDownload}
        disabled={isGenerating}
        aria-busy={isGenerating}
      >
        <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20">
          <path d="M10 2.917v9.166m0 0 3.75-3.75M10 12.083l-3.75-3.75M3.75 13.333v2.5c0 .46.373.834.833.834h10.834c.46 0 .833-.373.833-.834v-2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </svg>
        {isGenerating
          ? isEnglish ? "Generating PDF..." : "Generando PDF..."
          : isEnglish ? "Download resume as PDF" : "Descargar CV en PDF"}
      </button>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </span>
  );
}
