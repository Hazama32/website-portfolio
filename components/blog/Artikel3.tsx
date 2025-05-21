'use client';
import { motion } from 'framer-motion';

export default function Artikel3() {
  return (
    <motion.article
     className="bg-white-800 rounded-xl p-6 shadow-xl mb-6 border"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-3 text-center">Manfaat Branding Online</h2>
      <p className="mb-3">
        Branding online adalah pondasi kepercayaan digital anda, baik sebagai freelancer maupun UMKM.
      </p>
      <ul className="list-disc pl-6 mb-3">
        <li>Memperkuat citra profesional</li>
        <li>Membantu ditemukan di Google</li>
        <li>Menonjol dari pesaing</li>
        <li>Membuka peluang kerjasama</li>
      </ul>
      <p>
        Mulailah dari logo, warna, dan website profesional. Branding yang konsisten = klien lebih yakin.
      </p>
    </motion.article>
  );
}
