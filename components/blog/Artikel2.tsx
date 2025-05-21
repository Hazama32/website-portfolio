'use client';
import { motion } from 'framer-motion';

export default function Artikel2() {
  return (
    <motion.article
      className="bg-white-800 rounded-xl p-6 shadow-xl mb-6 border"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold mb-3 text-center">Tips Memilih Jasa Pembuatan Website</h2>
      <p className="mb-3">
        Banyak jasa web developer di luar sana, tapi tidak semuanya memberikan kualitas yang sama.
      </p>
      <ul className="list-disc pl-6 mb-3">
        <li>Pastikan ada portofolio nyata</li>
        <li>Komunikasi jelas dan terbuka</li>
        <li>Desain responsif dan cepat diakses</li>
        <li>Harga masuk akal sesuai fitur</li>
        <li>Support dan revisi setelah selesai</li>
      </ul>
      <p>
        Jangan tergiur harga murah tanpa jaminan hasil. Website adalah aset digital jangka panjang anda.
      </p>
    </motion.article>
  );
}
