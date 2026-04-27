'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { DeviceToggle } from '@/components/ui/DeviceToggle';
import { Section } from '@/components/layout/Section';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import type { DeviceMode } from '@/contexts/DeviceContext';

const deviceSizes: Record<DeviceMode, { width: number; height: number; label: string }> = {
  desktop: { width: 1280, height: 720, label: '1280 × 720' },
  tablet: { width: 768, height: 1024, label: '768 × 1024' },
  mobile: { width: 375, height: 667, label: '375 × 667' },
};

export function ResponsiveSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ once: true, threshold: 0.1 });
  const [device, setDevice] = useState<DeviceMode>('desktop');

  const size = deviceSizes[device];
  const maxWidth = 600;
  const scale = Math.min(maxWidth / size.width, 240 / size.height);
  const scaledWidth = size.width * scale;
  const scaledHeight = size.height * scale;

  return (
    <Section id="responsive" className="bg-dark-secondary">
      <div ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <Badge variant="primary">Адаптивность</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Выглядит <span className="text-gradient">везде</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Сайт идеально работает на всех устройствах
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-8">
            <DeviceToggle device={device} onChange={setDevice} />

            <div className="flex items-center justify-center w-full">
              <motion.div
                key={device}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-dark-primary shadow-2xl"
                style={{ width: scaledWidth, height: scaledHeight }}
              >
                <div className="absolute inset-0 flex flex-col p-3 gap-2 overflow-hidden">
                  <div className="h-4 bg-dark-tertiary rounded-full w-3/4" />
                  <div className="flex gap-2 flex-1">
                    {device !== 'mobile' && (
                      <div className="w-1/4 bg-dark-secondary rounded-lg" />
                    )}
                    <div className="flex-1 space-y-2">
                      <div className="h-1/3 bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 rounded-lg" />
                      <div className={`grid gap-2 ${device === 'desktop' ? 'grid-cols-3' : device === 'tablet' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {[1, 2, 3].slice(0, device === 'mobile' ? 2 : 3).map((i) => (
                          <div key={i} className="h-8 bg-dark-tertiary rounded-md" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-text-muted text-sm font-mono">{size.label}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl text-center">
              {Object.entries(deviceSizes).map(([mode, info]) => (
                <div
                  key={mode}
                  className={`p-4 rounded-xl border transition-colors ${device === mode ? 'border-accent-primary/50 bg-accent-primary/10' : 'border-white/5 bg-dark-tertiary'}`}
                >
                  <p className="font-medium text-white capitalize">{mode}</p>
                  <p className="text-text-muted text-sm font-mono">{info.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
