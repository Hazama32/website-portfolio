'use client';
import { motion } from 'framer-motion';

export default function Artikel4() {
  return (
    <motion.article
      className="bg-white-800 rounded-xl p-6 shadow-2xl mb-6 border"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-3 text-center">Ciri-ciri Jasa Website yang Profesional</h2>
      <p className="mb-3">
        Tidak semua jasa pembuatan website memiliki standar profesional yang sama.
      </p>
      <ul className="list-disc pl-6 mb-3">
        <li>Memiliki portofolio nyata dan bisa dicek</li>
        <li>Memberikan estimasi waktu yang logis</li>
        <li>Menyesuaikan desain dengan kebutuhan</li>
        <li>Memberi dukungan setelah proyek selesai</li>
      </ul>
      <p>
        Website adalah wajah digital anda dan pastikan dibuat oleh tangan yang tepat.
      </p>
    </motion.article>
  );
}
