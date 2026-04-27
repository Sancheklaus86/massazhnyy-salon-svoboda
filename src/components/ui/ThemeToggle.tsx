'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative w-14 h-7 rounded-full p-0.5 transition-colors duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary',
        isDark ? 'bg-accent-primary' : 'bg-gray-300',
        className
      )}
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
    >
      <motion.div
        className={cn(
          'w-6 h-6 rounded-full flex items-center justify-center',
          isDark ? 'bg-dark-primary' : 'bg-white'
        )}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-accent-primary" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
