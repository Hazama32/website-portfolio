import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import playlistdesign from "@/public/playlistdesign.jpeg";
import carouseldesign from "@/public/carouseldesign.jpeg";
import posterdesign from "@/public/posterdesign.jpeg";
import portfolio from "@/public/portfolio.png";
import sambalbajagbejo from "@/public/sambalbajagbejo.png";
import alamijo from "@/public/alamijo.png";
import website1 from "@/public/website1.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About & Projects",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills & Experience",
    hash: "#skills",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "PELAJAR",
    location: "SMKN 7 Kab.Tangerang",
    description:
      "Lulusan SMKN 7 Kab.Tangerang, jurusan Akomodasi Perhotelan, dengan pengalaman di bidang pelayanan tamu, hospitality dan etika kerja profesional di industri perhotelan.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "BARISTA",
    location: "Kopi Kurang Lebih Gading Serpong",
    description:
      "Bertugas meracik minuman kopi, mengoperasikan mesin espresso serta memberikan layanan ramah kepada pelanggan dalam suasana kafe yang santai dan modern.",
    icon: React.createElement(CgWorkAlt),
    date: "Juli 2021 - November 2022",
  },
  {
    title: "HOUSEKEEPING",
    location: "Starfit AEON Mall BSD",
    description:
      "Menjaga kebersihan dan kenyamanan lingkungan gym, memastikan fasilitas tetap higienis sesuai standar kebersihan pusat kebugaran dan area publik mall.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2023 - September 2024",
  },
  {
    title: "DESAIN GRAFIS (INTERNSHIP)",
    location: "Staradio 107,3 FM Tangerang",
    description:
      "Membuat desain visual untuk media sosial, promosi acara dan kebutuhan branding digital radio. Berkontribusi dalam pengembangan identitas visual yang menarik dan sesuai target audiens.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2024 - Januari 2025",
  },
  
] as const;

export const projectsData = [
  {
    title: "Playlist Design",
    description:
      "Menciptakan desain visual yang menarik untuk playlist musik yang akan digunakan di platform streaming.",
    tags: ["Playlist cover", "Music design", "Spotify cover design", "Playlist branding",],
    imageUrl: playlistdesign,
    URL:"https://drive.google.com/drive/folders/1Jkp1dXG6JyebwROyl_VnGPAia84nOm3E?usp=drive_link",
  },
  {
    title: "Carousel Design",
    description:
      "Difokuskan pada pembuatan serangkaian gambar yang akan digunakan di media sosial, khususnya Instagram.",
    tags: ["Instagram carousel", "Social media slide", "Carousel post",],
    imageUrl: carouseldesign,
    URL:"https://drive.google.com/drive/folders/1txsZr-TaNfzczFXE_BTWmzRmX0Rcoem3?usp=drive_link",
  },
  {
    title: "Poster Design",
    description:
      "Menciptakan poster yag menarik dan informatif untuk acara tertentu, seperti konser, festival, atau kampanye sosial.",
    tags: ["Instagram carousel", "Social media slide", "Carousel post",],
    imageUrl: posterdesign,
    URL:"https://drive.google.com/drive/folders/1GtdhLL2pS6wsDDXItivFmimHyot444t0?usp=drive_link",
  },
  {
    title: "Website Portfolio",
    description:
      "Website portfolio kreatif yang menampilkan karya desain grafis,carousel, dan poster profesional",
    tags: ["Portfolio desain", "Desain profesional", "Jasa desain online",],
    imageUrl: portfolio,
    URL:"https://jejakbintang.my.id/",
  },
  {
    title: "Website Portfolio",
    description:
      "Website portfolio kreatif yang menampilkan karya desain grafis,carousel, dan poster profesional",
    tags: ["Website", "Portofolio", "Jasa website", "Minimalis","Responsive website"],
    imageUrl: alamijo,
    URL:"https://zakarial.my.id/",
  },
   {
    title: "Website Portfolio",
    description:
      "Website portfolio kreatif yang menampilkan karya desain grafis,carousel, dan poster profesional",
    tags: ["Website", "Portofolio", "Jasa website", "Minimalis","Responsive website"],
    imageUrl: website1,
    URL:"https://www.ekasaputra.my.id/",
  },
   {
    title: "Website Sambal Bajag Bejo",
    description:
      "Sambal Bajag Bejo, sambal khas pedas gurih dari bahan alami, cocok untuk segala hidangan",
    tags: ["Sambal", "Produk UMKM", "Sambal kemasan", "Sambal khas",],
    imageUrl: sambalbajagbejo,
    URL:"https://sambalbajagbejo.netlify.app/",
  },
   {
    title: "Website Alamijo",
    description:
      "Alamijo, minuman sehat kacang hijaualami, kaya serat dan nutrisi, nikmat setiap saat",
    tags: ["Kacang Hijau", "Sehat", "Minuman Serat", "Kaya nutrisi","Minuman herbal alami"],
    imageUrl: alamijo,
    URL:"https://alamijostore.netlify.app/",
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Gatsby.js",
  "Tailwind CSS",
  "Canva",
  "Capcut",
] as const;
