'use client';

import * as RadixSwitch from '@radix-ui/react-switch';
import { cn } from '@/lib/cn';

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  className?: string;
  id?: string;
}

export function Switch({ checked, onCheckedChange, label, className, id }: SwitchProps) {
  const switchId = id ?? `switch-${Math.random().toString(36).slice(2)}`;

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <RadixSwitch.Root
        id={switchId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary',
          'transition-colors duration-300',
          checked ? 'bg-accent-primary' : 'bg-white/10'
        )}
      >
        <RadixSwitch.Thumb
          className={cn(
            'inline-block h-4 w-4 rounded-full bg-white shadow-lg',
            'transition-transform duration-300',
            checked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </RadixSwitch.Root>
      {label && (
        <label htmlFor={switchId} className="text-sm text-text-secondary cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
}
