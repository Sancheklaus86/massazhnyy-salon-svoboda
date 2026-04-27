'use client';

import { createContext, useContext, useState, useCallback } from 'react';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

interface DeviceContextValue {
  device: DeviceMode;
  setDevice: (device: DeviceMode) => void;
}

const DeviceContext = createContext<DeviceContextValue | undefined>(undefined);

interface DeviceProviderProps {
  children: React.ReactNode;
}

export function DeviceProvider({ children }: DeviceProviderProps) {
  const [device, setDeviceState] = useState<DeviceMode>('desktop');

  const setDevice = useCallback((newDevice: DeviceMode) => {
    setDeviceState(newDevice);
  }, []);

  return (
    <DeviceContext.Provider value={{ device, setDevice }}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDeviceContext(): DeviceContextValue {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDeviceContext must be used within DeviceProvider');
  }
  return context;
}
