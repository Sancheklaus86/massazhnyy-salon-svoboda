'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'bg-dark-primary/80 backdrop-blur-lg border-b border-white/5 shadow-xl' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">{SITE_NAME}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-text-secondary hover:text-white transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" variant="primary">
              Записаться
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
            aria-label="Меню"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-secondary border-t border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-text-secondary hover:text-white transition-colors py-2"
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <ThemeToggle />
                <Button size="sm" variant="primary">
                  Записаться
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
