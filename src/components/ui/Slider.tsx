'use client';

import * as RadixSlider from '@radix-ui/react-slider';
import { cn } from '@/lib/cn';

interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  label?: string;
}

export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className,
  label,
}: SliderProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && <span className="text-sm font-medium text-text-secondary">{label}</span>}
      <RadixSlider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={value}
        onValueChange={onValueChange}
        min={min}
        max={max}
        step={step}
      >
        <RadixSlider.Track className="bg-white/10 relative grow rounded-full h-2">
          <RadixSlider.Range className="absolute bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          className={cn(
            'block w-5 h-5 bg-white rounded-full shadow-lg',
            'hover:bg-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary',
            'transition-colors cursor-pointer'
          )}
          aria-label={label ?? 'Slider'}
        />
      </RadixSlider.Root>
    </div>
  );
}
