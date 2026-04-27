'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center dark">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-9xl font-bold text-gradient mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Страница не найдена</h2>
        <p className="text-text-secondary mb-8 max-w-md">
          Кажется, эта страница решила взять выходной. Вернитесь на главную.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white rounded-xl transition-colors"
        >
          <Home className="w-5 h-5" />
          На главную
        </Link>
      </motion.div>
    </div>
  );
}
