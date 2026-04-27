'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Leaf, Sparkles, User, Target } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { formatDuration, formatPrice } from '@/lib/utils';
import type { MassageService } from '@/types/components';

const services: MassageService[] = [
  {
    id: 'classic',
    title: 'Классический массаж',
    description: 'Традиционный массаж всего тела для общего расслабления и улучшения кровообращения.',
    benefits: ['Снятие мышечного напряжения', 'Улучшение кровообращения', 'Глубокое расслабление'],
    duration: [60, 90],
    price: 2500,
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: 'sport',
    title: 'Спортивный массаж',
    description: 'Интенсивный массаж для спортсменов и активных людей. Восстановление после нагрузок.',
    benefits: ['Восстановление мышц', 'Профилактика травм', 'Повышение гибкости'],
    duration: [60],
    price: 3000,
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 'relax',
    title: 'Расслабляющий массаж',
    description: 'Нежный массаж с ароматическими маслами для полного расслабления тела и ума.',
    benefits: ['Снятие стресса', 'Улучшение сна', 'Эмоциональный баланс'],
    duration: [60, 90],
    price: 2800,
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    id: 'anticellulite',
    title: 'Антицеллюлитный массаж',
    description: 'Эффективная программа для борьбы с целлюлитом и улучшения тонуса кожи.',
    benefits: ['Уменьшение целлюлита', 'Подтяжка кожи', 'Улучшение лимфотока'],
    duration: [45, 60],
    price: 3200,
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 'face',
    title: 'Массаж лица',
    description: 'Омолаживающий массаж лица для улучшения контура и сияния кожи.',
    benefits: ['Подтяжка овала лица', 'Улучшение цвета кожи', 'Разглаживание морщин'],
    duration: [30, 45],
    price: 2000,
    icon: <User className="w-6 h-6" />,
  },
  {
    id: 'acupressure',
    title: 'Точечный массаж',
    description: 'Воздействие на биологически активные точки тела для лечебного эффекта.',
    benefits: ['Снятие боли', 'Улучшение энергетики', 'Лечебный эффект'],
    duration: [30, 60],
    price: 2200,
    icon: <Target className="w-6 h-6" />,
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });

  return (
    <Section id="services" className="bg-dark-secondary">
      <div ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <Badge variant="primary">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Виды <span className="text-gradient">массажа</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Профессиональные процедуры для вашего здоровья и красоты
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                      {service.icon}
                    </div>
                    <Badge variant="default">от {formatPrice(service.price)}</Badge>
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {service.duration.map((d) => (
                        <span
                          key={d}
                          className="text-xs px-2 py-1 rounded-full bg-white/5 text-text-secondary border border-white/10"
                        >
                          {formatDuration(d)}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
