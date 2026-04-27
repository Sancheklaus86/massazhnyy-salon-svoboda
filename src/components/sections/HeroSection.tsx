'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GradientBlob } from '@/components/ui/GradientBlob';
import { FloatingElements } from '@/components/effects/FloatingElements';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
      <GradientBlob
        color="indigo"
        size="xl"
        className="absolute -top-40 -left-40"
      />
      <GradientBlob
        color="purple"
        size="lg"
        className="absolute -bottom-20 -right-20"
      />
      <GradientBlob
        color="pink"
        size="md"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              Лучший массажный салон Тольятти
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            Массажный салон
            <br />
            <span className="text-gradient">«Свобода»</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Профессиональный массаж для тела и души в сердце Тольятти.
            Почувствуй настоящее расслабление.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" variant="primary" leftIcon={<Phone className="w-5 h-5" />}>
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline">
              Узнать о нас
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-8 pt-8 text-text-secondary"
          >
            {[
              { value: '500+', label: 'Довольных клиентов' },
              { value: '8', label: 'Видов массажа' },
              { value: '5 лет', label: 'Опыта работы' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-sm">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-6 h-6 text-text-muted" />
      </motion.div>
    </section>
  );
}
