import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { ExperiencesEn, ExperiencesFr } from '../experiences/experiences.data';
import { EducationEn, EducationFr } from '../education/education.data';
import { AppTranslationEn, AppTranslationFr } from '../app.data';
import { AboutEn, AboutFr } from '../about/about.data';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  generatePdf(lang: 'french' | 'english') {
    const doc = new jsPDF();
    const isFrench = lang === 'french';
    const experiences = isFrench ? ExperiencesFr : ExperiencesEn;
    const education = isFrench ? EducationFr : EducationEn;
    const translations = isFrench ? AppTranslationFr : AppTranslationEn;
    const about = isFrench ? AboutFr : AboutEn;

    let yPos = 20;
    const leftMargin = 20;
    const lineHeight = 7;

    // Title
    doc.setFontSize(22);
    doc.text(translations.name, leftMargin, yPos);
    yPos += 10;

    doc.setFontSize(16);
    doc.text(translations.title, leftMargin, yPos);
    yPos += 15;

    // Experiences
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 255); // Blue color for headers
    doc.text(translations.experiences, leftMargin, yPos);
    doc.setTextColor(0, 0, 0); // Reset to black
    yPos += 10;

    doc.setFontSize(12);
    experiences.forEach((exp) => {
      // Check for page break
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFont('helvetica', 'bold');
      doc.text(`${exp.title} - ${exp.companyName}`, leftMargin, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      doc.text(`${exp.start} - ${exp.end || (isFrench ? 'En cours' : 'Ongoing')} | ${exp.duration}`, leftMargin, yPos);
      yPos += 7;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      exp.body.forEach((item) => {
        if (item.title) {
          if (yPos > 275) {
            doc.addPage();
            yPos = 20;
          }
          doc.setFont('helvetica', 'bold');
          doc.text(item.title, leftMargin + 5, yPos);
          doc.setFont('helvetica', 'normal');
          yPos += 5;
        }

        const splitText = doc.splitTextToSize(item.text, 170);
        if (yPos + splitText.length * 5 > 280) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(splitText, leftMargin + 5, yPos);
        yPos += splitText.length * 5 + 2;
      });
      yPos += 5;
    });

    yPos += 5;

    // Education
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(18);
    doc.setTextColor(0, 0, 255);
    doc.text(translations.education.title, leftMargin, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 10;

    doc.setFontSize(12);
    education.forEach((edu) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFont('helvetica', 'bold');
      doc.text(`${edu.title} - ${edu.schoolName}`, leftMargin, yPos);
      yPos += 5;

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      doc.text(`${edu.start} - ${edu.end} | ${edu.duration}`, leftMargin, yPos);
      yPos += 7;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      edu.body.forEach((item) => {
        const splitText = doc.splitTextToSize(item.text, 170);
        if (yPos + splitText.length * 5 > 280) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(splitText, leftMargin + 5, yPos);
        yPos += splitText.length * 5 + 2;
      });
      yPos += 5;
    });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const aboutParagraphs = [
      { title: '', text: about.intro },
      { title: '', text: about.description },
      ...about.interests,
    ].map((item) => ({ ...item, lines: doc.splitTextToSize(item.text, 170) as string[] }));
    const aboutHeight =
      10 + aboutParagraphs.reduce((height, item) => height + (item.title ? 5 : 0) + item.lines.length * 5 + 3, 0);

    yPos += 5;
    if (yPos + aboutHeight > 280) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(18);
    doc.setTextColor(0, 0, 255);
    doc.text(about.title, leftMargin, yPos);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    yPos += 10;

    aboutParagraphs.forEach((item) => {
      if (item.title) {
        doc.setFont('helvetica', 'bold');
        doc.text(item.title, leftMargin + 5, yPos);
        doc.setFont('helvetica', 'normal');
        yPos += 5;
      }
      doc.text(item.lines, leftMargin + 5, yPos);
      yPos += item.lines.length * 5 + 3;
    });

    doc.save(`christophe-domergue-resume-${isFrench ? 'fr' : 'en'}.pdf`);
  }
}
