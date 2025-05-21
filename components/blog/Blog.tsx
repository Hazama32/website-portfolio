'use client';

import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";
import Artikel1 from '@/components/blog/Artikel1';
import Artikel2 from '@/components/blog/Artikel2';
import Artikel3 from '@/components/blog/Artikel3';
import Artikel4 from '@/components/blog/Artikel4';

export default function Blog() {
     const { ref } = useSectionInView("Blog");

  return (
       <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="blog"
          >
    <main className="p-6 max-w-3xl mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog Catatan Bintang
      </motion.h1>

      {/* Tampilkan semua artikel */}
      <Artikel1 />
      <Artikel2 />
      <Artikel3 />
      <Artikel4 />
    </main>
    </motion.section>
  );
}
