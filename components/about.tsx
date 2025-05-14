"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About & Projects");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Tentang Saya</SectionHeading>
      <p className="mb-3">
    Saya Muhammad Bintang Insan Cemerlang, mahasiswa Teknik Informatika 
    saya memiliki ketertarikan pada visual communication, desain digital, dan teknologi web. Terbiasa bekerja secara individu maupun tim, 
    saya siap berkontribusi dengan kreativitas dan semangat belajar yang tinggi.
    Dengan pengalaman langsung sebagai Barista dan staf Housekeeping, saya memiliki pemahaman yang baik dalam pelayanan pelanggan, kerja sama tim, dan menjaga kualitas layanan. 
    Saya juga memiliki keterampilan kreatif dalam komunikasi visual yang saya kembangkan saat magang sebagai Desainer Grafis di Staradio 107.3 FM. Saya menguasai Canva, Microsoft Office, serta dasar-dasar pemrograman web, dan terus berupaya mengembangkan diri secara pribadi maupun profesional.
      </p>
    </motion.section>
  );
}
