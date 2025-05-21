'use client';
import { motion } from 'framer-motion';

export default function Artikel1() {
  return (
    <motion.article
      className="bg-white-800 rounded-xl p-6 shadow-xl mb-6 border ring-offset-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-3 text-center">Kenapa Penting Punya Website Portofolio?</h2>
      <p className="mb-3">
        Di era digital, website portofolio bukan sekadar galeri online. Ini adalah wajah profesional anda di internet.
      </p>
      <ul className="list-disc pl-6 mb-3">
        <li>Meningkatkan kepercayaan calon klien</li>
        <li>Mudah diakses kapan saja oleh siapa saja</li>
        <li>Menampilkan keahlian & testimoni secara visual</li>
        <li>Memperkuat personal branding</li>
      </ul>
      <p>
        Kalau anda ingin dikenal lebih luas, memiliki website adalah langkah pertama yang sangat kuat.
      </p>
    </motion.article>
  );
}
