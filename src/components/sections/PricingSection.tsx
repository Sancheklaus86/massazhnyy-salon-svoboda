'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/cn';
import type { PricingPackage } from '@/types/components';

const packages: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Базовый',
    price: 2500,
    sessions: 1,
    features: ['1 сеанс на выбор', '60 минут', 'Базовые техники', 'Удобное расписание'],
  },
  {
    id: 'optimal',
    name: 'Оптимальный',
    price: 11250,
    originalPrice: 12500,
    sessions: 5,
    popular: true,
    features: ['5 сеансов на выбор', 'Скидка 10%', 'Все техники', 'Приоритетная запись', 'Консультация мастера'],
    bonus: 'Бесплатная ароматерапия',
  },
  {
    id: 'premium',
    name: 'Премиум',
    price: 20000,
    originalPrice: 25000,
    sessions: 10,
    features: ['10 сеансов на выбор', 'Скидка 20%', 'Все техники', 'VIP расписание', 'Персональная программа', 'Подарочный сертификат'],
    bonus: 'VIP-зал + халат + тапочки',
  },
];

export function PricingSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });

  return (
    <Section id="pricing" className="bg-dark-secondary">
      <div ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <Badge variant="primary">Цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Выберите <span className="text-gradient">пакет</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Гибкие варианты для любого бюджета
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={fadeInUp}
                custom={index}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'relative rounded-2xl p-8 border flex flex-col gap-6',
                  pkg.popular
                    ? 'bg-gradient-to-b from-accent-primary/20 to-dark-tertiary border-accent-primary/50 shadow-glow scale-105'
                    : 'bg-dark-tertiary border-white/5'
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" className="px-4">Популярно</Badge>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gradient">{formatPrice(pkg.price)}</span>
                    {pkg.originalPrice && (
                      <span className="text-text-muted line-through text-sm">{formatPrice(pkg.originalPrice)}</span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm">{pkg.sessions} {pkg.sessions === 1 ? 'сеанс' : 'сеансов'}</p>
                </div>

                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {pkg.bonus && (
                    <li className="flex items-center gap-3 text-sm text-accent-tertiary font-medium">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      {pkg.bonus}
                    </li>
                  )}
                </ul>

                <Button
                  variant={pkg.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Выбрать пакет
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
