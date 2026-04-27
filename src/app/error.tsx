'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center dark">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-6xl font-bold text-red-400 mb-4">Ошибка</h1>
        <p className="text-text-secondary mb-8 max-w-md">
          Что-то пошло не так. Попробуйте обновить страницу.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white rounded-xl transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          Попробовать снова
        </button>
      </motion.div>
    </div>
  );
}
