'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';
import { CONTACT, SOCIAL_LINKS, NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

export function Footer() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.05 });

  return (
    <footer className="bg-dark-secondary border-t border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">{SITE_NAME}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Профессиональный массаж в сердце Тольятти. Доверяйте своё тело профессионалам.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-tertiary border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-primary/50 transition-colors"
                aria-label="ВКонтакте"
              >
                ВК
              </a>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-tertiary border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-primary/50 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-semibold text-white">Навигация</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-text-secondary hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-semibold text-white">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <Phone className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <Mail className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <Clock className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                <span>{CONTACT.workingHours}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-semibold text-white">Запись</h4>
            <p className="text-text-secondary text-sm">
              Хочешь отдохнуть не только телом, но и душой?
            </p>
            <Button variant="primary" className="w-full">
              Записаться
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © 2025 {SITE_NAME}. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-text-muted hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-text-muted hover:text-white text-sm transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
