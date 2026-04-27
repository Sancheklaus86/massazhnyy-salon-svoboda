'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/cn';

const glassCards = [
  { title: 'Glassmorphism', desc: 'backdrop-filter blur с прозрачным фоном', color: 'from-indigo-500/20 to-purple-500/20' },
  { title: 'Gradient Border', desc: 'Анимированная градиентная рамка', color: 'from-purple-500/20 to-pink-500/20' },
  { title: 'Glow Effect', desc: 'Свечение при hover взаимодействии', color: 'from-pink-500/20 to-red-500/20' },
  { title: '3D Transform', desc: 'Перспективное вращение при движении курсора', color: 'from-blue-500/20 to-cyan-500/20' },
];

function Card3D({ title, desc, color }: { title: string; desc: string; color: string }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 10;
    const y = -(e.clientX - rect.left - rect.width / 2) / 10;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      className={cn(
        'relative rounded-2xl p-6 cursor-pointer',
        'bg-glass border border-white/10',
        'bg-gradient-to-br',
        color
      )}
      whileHover={{ scale: 1.03 }}
    >
      <div className="space-y-2">
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-text-secondary text-sm">{desc}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}

export function VisualEffectsSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });

  return (
    <Section id="visual-effects" className="bg-dark-primary">
      <div ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <Badge variant="primary">Визуальные эффекты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              CSS <span className="text-gradient">магия</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Glassmorphism, градиенты, свечение и 3D-трансформации
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {glassCards.map((card, i) => (
              <motion.div key={card.title} variants={fadeInUp} custom={i}>
                <Card3D {...card} />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl p-8 bg-glass border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-pink-600/30 animate-gradient" />
              <div className="relative z-10">
                <h4 className="font-semibold text-white mb-2">Animated Gradient</h4>
                <p className="text-text-secondary text-sm">Движущийся градиентный фон</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative rounded-2xl p-8 bg-dark-tertiary border-2 border-transparent"
              style={{
                background: 'linear-gradient(#1A1A24, #1A1A24) padding-box, linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899) border-box',
              }}
            >
              <h4 className="font-semibold text-white mb-2">Gradient Border</h4>
              <p className="text-text-secondary text-sm">Радужная граница через CSS</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative rounded-2xl p-8 bg-dark-tertiary border border-accent-primary/30 group"
              whileHover={{ boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)' }}
            >
              <h4 className="font-semibold text-white mb-2">Glow on Hover</h4>
              <p className="text-text-secondary text-sm">Наведи курсор для свечения</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-primary/5 pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
