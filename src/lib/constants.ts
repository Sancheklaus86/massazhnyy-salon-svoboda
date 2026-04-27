export const SITE_NAME = 'Массажный салон Свобода';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://svoboda-massage.ru';

export const CONTACT = {
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+7 (848) 200-00-00',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@svoboda-massage.ru',
  address: 'Тольятти, улица 40 лет Победы, 19б',
  workingHours: 'Пн-Вс: 9:00 – 21:00',
  city: 'Тольятти',
};

export const SOCIAL_LINKS = {
  vk: 'https://vk.com/svoboda_massage',
  telegram: 'https://t.me/svoboda_massage',
  instagram: 'https://instagram.com/svoboda_massage',
};

export const NAV_LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contact' },
] as const;

export const THEME_STORAGE_KEY = 'svoboda-theme';
