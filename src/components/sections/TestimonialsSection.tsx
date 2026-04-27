'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import { useInView } from '@/hooks/useInView';
import { fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/cn';
import type { Testimonial } from '@/types/components';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Анна Петрова',
    avatar: 'А',
    rating: 5,
    text: 'Невероятный массаж! После первого сеанса ушла боль в спине, которая мучила меня несколько месяцев. Мастер очень профессиональный, знает своё дело.',
    date: 'Март 2025',
    service: 'Классический массаж',
  },
  {
    id: '2',
    name: 'Михаил Соколов',
    avatar: 'М',
    rating: 5,
    text: 'Хожу сюда уже год. Спортивный массаж помогает восстанавливаться после тренировок. Очень доволен результатом и отношением персонала.',
    date: 'Февраль 2025',
    service: 'Спортивный массаж',
  },
  {
    id: '3',
    name: 'Елена Кузнецова',
    avatar: 'Е',
    rating: 5,
    text: 'Расслабляющий массаж с ароматическими маслами — это просто мечта! Обстановка уютная, мастера профессиональные. Рекомендую всем!',
    date: 'Январь 2025',
    service: 'Расслабляющий массаж',
  },
  {
    id: '4',
    name: 'Дмитрий Иванов',
    avatar: 'Д',
    rating: 5,
    text: 'Взял пакет из 10 сеансов — отличное соотношение цены и качества. Профессионализм мастеров на высоте, всегда чистота и порядок.',
    date: 'Декабрь 2024',
    service: 'Премиум пакет',
  },
];

export function TestimonialsSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const testimonial = testimonials[current];

  return (
    <Section id="testimonials" className="bg-dark-primary">
      <div ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <Badge variant="primary">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Что говорят <span className="text-gradient">клиенты</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-dark-tertiary border border-white/5 p-8 md:p-12">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={testimonial.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -50 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="space-y-6"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-lg text-text-secondary leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold text-lg shadow-glow">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-text-muted">
                        {testimonial.service} · {testimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                      className={cn(
                        'w-2 h-2 rounded-full transition-all duration-300',
                        i === current ? 'bg-accent-primary w-6' : 'bg-white/20 hover:bg-white/40'
                      )}
                      aria-label={`Отзыв ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                    aria-label="Предыдущий"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-secondary hover:text-white transition-colors"
                    aria-label="Следующий"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
