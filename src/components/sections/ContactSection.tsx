'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';
import { CONTACT } from '@/lib/constants';

// Dikidi widget URL - замените YOUR_COMPANY_ID на ваш ID компании из личного кабинета Dikidi
// Получить ссылку можно в личном кабинете: Настройки -> Виджет онлайн-записи
const DIKIDI_WIDGET_URL = process.env.NEXT_PUBLIC_DIKIDI_URL ?? 'https://dikidi.net/widget/YOUR_COMPANY_ID';

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, label: 'Телефон', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: <MapPin className="w-5 h-5" />, label: 'Адрес', value: CONTACT.address, href: '#' },
  { icon: <Clock className="w-5 h-5" />, label: 'Часы работы', value: CONTACT.workingHours, href: '#' },
];

export function ContactSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });

  return (
    <Section id="contact" className="bg-dark-primary">
      <div ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <Badge variant="primary">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Запишитесь <span className="text-gradient">сейчас</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Выберите удобное время и запишитесь онлайн через Dikidi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-tertiary border border-white/5 hover:border-accent-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary flex-shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">{label}</p>
                      <p className="text-sm text-white font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-dark-tertiary rounded-2xl border border-white/5 overflow-hidden min-h-[600px]">
                <iframe
                  src={DIKIDI_WIDGET_URL}
                  width="100%"
                  height="600"
                  className="border-0"
                  title="Онлайн запись через Dikidi"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-text-muted text-xs mt-3">
                Онлайн-запись через{' '}
                <a
                  href="https://dikidi.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:underline"
                >
                  Dikidi.net
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
