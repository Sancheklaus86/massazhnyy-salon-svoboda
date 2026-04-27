import type React from 'react';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface MassageService {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: number[];
  price: number;
  icon: React.ReactNode;
  image?: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  animationType: 'fadeIn' | 'slideIn' | 'bounceIn' | 'scaleIn';
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  sessions: number;
  popular?: boolean;
  features: string[];
  bonus?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
}

export type AnimationType = 'fadeIn' | 'slideIn' | 'bounceIn' | 'scaleIn';
