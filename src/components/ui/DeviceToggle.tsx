'use client';

import { Monitor, Tablet, Smartphone } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { DeviceMode } from '@/contexts/DeviceContext';

interface DeviceToggleProps {
  device: DeviceMode;
  onChange: (device: DeviceMode) => void;
  className?: string;
}

const devices: { mode: DeviceMode; icon: React.ReactNode; label: string }[] = [
  { mode: 'desktop', icon: <Monitor className="w-4 h-4" />, label: 'Desktop' },
  { mode: 'tablet', icon: <Tablet className="w-4 h-4" />, label: 'Tablet' },
  { mode: 'mobile', icon: <Smartphone className="w-4 h-4" />, label: 'Mobile' },
];

export function DeviceToggle({ device, onChange, className }: DeviceToggleProps) {
  return (
    <div className={cn('flex items-center gap-1 bg-dark-secondary rounded-xl p-1', className)}>
      {devices.map(({ mode, icon, label }) => (
        <button
          key={mode}
          type="button"
          onClick={() => onChange(mode)}
          className={cn(
            'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all',
            device === mode
              ? 'bg-accent-primary text-white shadow-glow'
              : 'text-text-secondary hover:text-white hover:bg-white/5'
          )}
          aria-label={label}
        >
          {icon}
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
