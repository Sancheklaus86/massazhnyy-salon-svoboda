'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Slider } from '@/components/ui/Slider';
import { Switch } from '@/components/ui/Switch';
import { Section } from '@/components/layout/Section';
import { ConfettiEffect } from '@/components/effects/ConfettiEffect';
import { MagneticButton } from '@/components/effects/MagneticButton';
import { RippleEffect } from '@/components/effects/RippleEffect';
import { Button } from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { formatPrice, formatDuration } from '@/lib/utils';

const PRICE_PER_MINUTE = 50;

export function InteractivitySection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });
  const [duration, setDuration] = useState([60]);
  const [switches, setSwitches] = useState({ aromatherapy: false, hotStones: false, twoMasters: false });

  const basePrice = duration[0] * PRICE_PER_MINUTE;
  const extras = (switches.aromatherapy ? 500 : 0) + (switches.hotStones ? 800 : 0) + (switches.twoMasters ? 1500 : 0);
  const totalPrice = basePrice + extras;

  return (
    <Section id="interactivity" className="bg-dark-secondary">
      <div ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <Badge variant="primary">Интерактивность</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Живые <span className="text-gradient">элементы</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Попробуй интерактивные эффекты — кнопки, слайдеры, переключатели
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="bg-dark-tertiary rounded-2xl p-8 border border-white/5 space-y-6">
              <h3 className="text-xl font-semibold text-white">Калькулятор стоимости</h3>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-text-secondary mb-2">
                  <span>Длительность: {formatDuration(duration[0])}</span>
                  <span>{formatPrice(basePrice)}</span>
                </div>
                <Slider value={duration} onValueChange={setDuration} min={30} max={120} step={30} />
                <div className="flex justify-between text-xs text-text-muted">
                  <span>30 мин</span><span>60 мин</span><span>90 мин</span><span>120 мин</span>
                </div>
              </div>

              <div className="space-y-3">
                <Switch
                  checked={switches.aromatherapy}
                  onCheckedChange={(v) => setSwitches((p) => ({ ...p, aromatherapy: v }))}
                  label="Ароматерапия (+500 ₽)"
                />
                <Switch
                  checked={switches.hotStones}
                  onCheckedChange={(v) => setSwitches((p) => ({ ...p, hotStones: v }))}
                  label="Горячие камни (+800 ₽)"
                />
                <Switch
                  checked={switches.twoMasters}
                  onCheckedChange={(v) => setSwitches((p) => ({ ...p, twoMasters: v }))}
                  label="Два мастера (+1500 ₽)"
                />
              </div>

              <motion.div
                className="bg-accent-primary/10 border border-accent-primary/30 rounded-xl p-4"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 0.3 }}
                key={totalPrice}
              >
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Итого:</span>
                  <span className="text-2xl font-bold text-gradient">{formatPrice(totalPrice)}</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-dark-tertiary rounded-2xl p-8 border border-white/5 space-y-4">
                <h3 className="text-xl font-semibold text-white">Эффекты кнопок</h3>

                <div className="flex flex-wrap gap-4">
                  <ConfettiEffect>
                    {(trigger) => (
                      <Button onClick={trigger} variant="primary" leftIcon={<Sparkles className="w-4 h-4" />}>
                        Конфетти
                      </Button>
                    )}
                  </ConfettiEffect>

                  <RippleEffect className="rounded-xl">
                    <Button variant="outline">Ripple эффект</Button>
                  </RippleEffect>

                  <MagneticButton>
                    <Button variant="secondary">Magnetic</Button>
                  </MagneticButton>
                </div>
              </div>

              <div className="bg-dark-tertiary rounded-2xl p-8 border border-white/5 space-y-4">
                <h3 className="text-xl font-semibold text-white">Drag & Drop</h3>
                <p className="text-text-secondary text-sm">Перетащи карточку</p>
                <div className="relative h-32 bg-dark-secondary rounded-xl border border-white/5 overflow-hidden">
                  <motion.div
                    drag
                    dragConstraints={{ left: 0, right: 200, top: 0, bottom: 60 }}
                    whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                    className="absolute top-4 left-4 w-20 h-12 bg-accent-primary rounded-xl flex items-center justify-center text-white text-sm font-medium cursor-grab select-none"
                  >
                    Тащи
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
