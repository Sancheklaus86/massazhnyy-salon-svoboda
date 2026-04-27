'use client';

import { motion } from 'framer-motion';
import { Zap, Layers, Wind, Scale } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn, bounceIn } from '@/lib/animations';
import type { Variants } from 'framer-motion';

const animationTypes: Record<string, Variants> = {
  fadeIn: fadeInUp,
  slideIn: fadeInLeft,
  bounceIn: bounceIn,
  scaleIn: scaleIn,
};

const cards = [
  {
    id: 'fade',
    title: 'Fade In Up',
    description: 'Плавное появление с движением снизу вверх',
    icon: <Wind className="w-6 h-6" />,
    animationType: 'fadeIn' as const,
    color: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    id: 'slide',
    title: 'Slide In',
    description: 'Въезд элемента с боковой стороны',
    icon: <Layers className="w-6 h-6" />,
    animationType: 'slideIn' as const,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'bounce',
    title: 'Bounce In',
    description: 'Пружинистое появление с физикой',
    icon: <Zap className="w-6 h-6" />,
    animationType: 'bounceIn' as const,
    color: 'from-pink-500/20 to-red-500/20',
  },
  {
    id: 'scale',
    title: 'Scale In',
    description: 'Увеличение из центра с прозрачностью',
    icon: <Scale className="w-6 h-6" />,
    animationType: 'scaleIn' as const,
    color: 'from-blue-500/20 to-indigo-500/20',
  },
];

export function AnimationsSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });

  return (
    <Section id="animations" className="bg-dark-primary">
      <div ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <Badge variant="primary">Framer Motion</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Мощь <span className="text-gradient">анимаций</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Каждый элемент оживает с плавными анимациями при прокрутке
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                variants={animationTypes[card.animationType]}
                custom={index}
              >
                <GlassCard className={`bg-gradient-to-br ${card.color} border-white/10 h-full`}>
                  <div className="flex flex-col gap-4 items-center text-center p-2">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {card.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{card.title}</h3>
                      <p className="text-text-secondary text-sm">{card.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Scroll-triggered', desc: 'Анимации активируются при входе в viewport', from: fadeInLeft },
              { label: 'Stagger', desc: 'Элементы появляются по очереди с задержкой', from: fadeInUp },
              { label: 'Spring Physics', desc: 'Реалистичная физика пружины для hover эффектов', from: fadeInRight },
            ].map(({ label, desc, from }) => (
              <motion.div
                key={label}
                variants={from}
                className="bg-dark-tertiary rounded-2xl p-6 border border-white/5 hover:border-accent-primary/30 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold text-white mb-2">{label}</h4>
                <p className="text-text-secondary text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
