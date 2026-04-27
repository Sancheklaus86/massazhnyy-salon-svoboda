# Architecture Documentation

## 🏗️ Общая архитектура

Проект построен на архитектуре **JAMstack** с использованием Next.js 14 App Router.

```
┌─────────────────────────────────────────┐
│         Browser (Client)                │
│  ┌───────────────────────────────────┐  │
│  │   React Components                │  │
│  │   + Framer Motion                 │  │
│  │   + Tailwind CSS                  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│      Next.js 14 App Router              │
│  ┌───────────────────────────────────┐  │
│  │  Server Components (RSC)          │  │
│  │  Client Components                │  │
│  │  API Routes (optional)            │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│         Static Generation               │
│         (Build Time)                    │
└─────────────────────────────────────────┘
```

## 📁 Структура файлов (детально)

```
massage-salon-svoboda/
├── .cursorrules                          # AI coding rules
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── README.md
│
├── docs/                                 # 📚 Документация
│   ├── PROJECT_OVERVIEW.md               # Обзор проекта
│   ├── ARCHITECTURE.md                   # Этот файл
│   ├── TECH_STACK.md                     # Технологический стек
│   ├── CURRENT_STATUS.md                 # Текущий статус
│   └── DEPLOYMENT.md                     # Инструкции по deploy
│
├── public/                               # 🖼️ Статические файлы
│   ├── images/
│   │   ├── hero/                         # Изображения для hero секции
│   │   ├── services/                     # Иконки услуг
│   │   ├── team/                         # Фото специалистов
│   │   └── testimonials/                 # Аватары клиентов
│   ├── fonts/                            # Кастомные шрифты (если есть)
│   ├── favicon.ico
│   ├── manifest.json                     # PWA manifest
│   └── robots.txt
│
├── src/
│   ├── app/                              # 📄 Next.js App Router
│   │   ├── layout.tsx                    # Root layout
│   │   ├── page.tsx                      # Homepage
│   │   ├── globals.css                   # Глобальные стили
│   │   ├── not-found.tsx                 # 404 страница
│   │   ├── error.tsx                     # Error boundary
│   │   ├── privacy/
│   │   │   └── page.tsx                  # Политика конфиденциальности
│   │   └── terms/
│   │       └── page.tsx                  # Пользовательское соглашение
│   │
│   ├── components/                       # 🧩 React компоненты
│   │   │
│   │   ├── sections/                     # 📑 Секции страницы
│   │   │   ├── HeroSection.tsx           # Hero блок
│   │   │   ├── AnimationsSection.tsx     # Демо анимаций
│   │   │   ├── InteractivitySection.tsx  # Демо интерактива
│   │   │   ├── VisualEffectsSection.tsx  # Демо визуальных эффектов
│   │   │   ├── ServicesSection.tsx       # Услуги массажа
│   │   │   ├── PricingSection.tsx        # Цены и пакеты
│   │   │   ├── TestimonialsSection.tsx   # Отзывы клиентов
│   │   │   ├── ResponsiveSection.tsx     # Демо адаптивности
│   │   │   ├── ContactSection.tsx        # Контакты и карта
│   │   │   └── Footer.tsx                # Подвал сайта
│   │   │
│   │   ├── ui/                           # 🎨 UI компоненты
│   │   │   ├── Button.tsx                # Кнопка (variants)
│   │   │   ├── Card.tsx                  # Карточка
│   │   │   ├── ThemeToggle.tsx           # Переключатель темы
│   │   │   ├── DeviceToggle.tsx          # Desktop/Tablet/Mobile
│   │   │   ├── AnimatedText.tsx          # Анимированный текст
│   │   │   ├── GlassCard.tsx             # Glassmorphism карточка
│   │   │   ├── GradientBlob.tsx          # Gradient пятно
│   │   │   ├── InteractiveButton.tsx     # Кнопка с эффектами
│   │   │   ├── ScrollProgress.tsx        # Индикатор прокрутки
│   │   │   ├── Badge.tsx                 # Бейдж/тег
│   │   │   ├── Input.tsx                 # Поле ввода
│   │   │   ├── Textarea.tsx              # Текстовое поле
│   │   │   ├── Slider.tsx                # Слайдер
│   │   │   ├── Switch.tsx                # Переключатель
│   │   │   ├── Tooltip.tsx               # Всплывающая подсказка
│   │   │   └── Modal.tsx                 # Модальное окно
│   │   │
│   │   ├── effects/                      # ✨ Эффекты и анимации
│   │   │   ├── ConfettiEffect.tsx        # Конфетти
│   │   │   ├── ParallaxEffect.tsx        # Параллакс
│   │   │   ├── MorphingShape.tsx         # Морфинг форм (SVG)
│   │   │   ├── FloatingElements.tsx      # Плавающие элементы
│   │   │   ├── RippleEffect.tsx          # Ripple на клик
│   │   │   ├── MagneticButton.tsx        # Magnetic эффект
│   │   │   ├── GlowEffect.tsx            # Glow на hover
│   │   │   └── ParticleField.tsx         # Particle система
│   │   │
│   │   └── layout/                       # 🏛️ Layout компоненты
│   │       ├── Header.tsx                # Шапка сайта (optional)
│   │       ├── Navigation.tsx            # Навигация
│   │       ├── Container.tsx             # Контейнер с max-width
│   │       └── Section.tsx               # Обёртка для секций
│   │
│   ├── lib/                              # 🛠️ Утилиты и хелперы
│   │   ├── animations.ts                 # Конфиги Framer Motion
│   │   ├── constants.ts                  # Константы проекта
│   │   ├── utils.ts                      # Общие утилиты
│   │   └── cn.ts                         # Tailwind className merger
│   │
│   ├── contexts/                         # 🌐 React Contexts
│   │   ├── ThemeContext.tsx              # Тема (dark/light)
│   │   └── DeviceContext.tsx             # Device preview (optional)
│   │
│   ├── hooks/                            # 🪝 Custom Hooks
│   │   ├── useScrollAnimation.ts         # Scroll-triggered анимации
│   │   ├── useTheme.ts                   # Хук для работы с темой
│   │   ├── useMediaQuery.ts              # Responsive breakpoints
│   │   ├── useInView.ts                  # Intersection Observer
│   │   ├── useLocalStorage.ts            # LocalStorage wrapper
│   │   └── useMousePosition.ts           # Позиция курсора
│   │
│   ├── styles/                           # 🎨 Стили
│   │   ├── theme.ts                      # Цветовая палитра
│   │   └── animations.css                # Кастомные CSS анимации
│   │
│   └── types/                            # 📝 TypeScript типы
│       ├── index.ts                      # Экспорт всех типов
│       ├── components.ts                 # Типы компонентов
│       └── theme.ts                      # Типы темы
│
├── package.json
├── package-lock.json
├── tsconfig.json                         # TypeScript конфиг
├── tailwind.config.ts                    # Tailwind конфиг
├── next.config.js                        # Next.js конфиг
└── postcss.config.js                     # PostCSS конфиг
```

## 🧩 Компоненты (детально)

### 1️⃣ Секции (sections/)

#### HeroSection.tsx
```typescript
/**
 * Героская секция сайта
 * 
 * Возможности:
 * - Полноэкранная высота (100vh)
 * - Градиентный animated фон
 * - Плавающие декоративные элементы (FloatingElements)
 * - Анимированный заголовок с gradient text
 * - Подзаголовок с эффектом печатной машинки
 * - CTA кнопки с hover эффектами
 * - Scroll indicator (стрелка вниз)
 * 
 * Анимации:
 * - fadeIn для основного контента
 * - stagger для кнопок
 * - bounce для scroll indicator
 * 
 * Интеграция:
 * - GradientBlob для фона
 * - FloatingElements для декора
 * - AnimatedText для заголовка
 * - Button для CTA
 */
```

**Props:**
```typescript
interface HeroSectionProps {
  className?: string;
}
```

#### AnimationsSection.tsx
```typescript
/**
 * Демонстрация возможностей Framer Motion
 * 
 * Возможности:
 * - Сетка карточек услуг (2-3 колонки)
 * - Stagger animation (появление по очереди)
 * - Scroll-triggered анимации (при входе в viewport)
 * - Hover эффекты (scale, rotate, glow)
 * - Различные варианты анимаций:
 *   - fadeIn (плавное появление)
 *   - slideIn (въезд сбоку)
 *   - bounceIn (пружинистое появление)
 *   - scaleIn (масштабирование)
 * 
 * Интеграция:
 * - Card компоненты для услуг
 * - useInView хук для scroll detection
 * - Framer Motion variants
 */
```

**Структура карточки услуги:**
```typescript
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  animationType: 'fadeIn' | 'slideIn' | 'bounceIn' | 'scaleIn';
}
```

#### InteractivitySection.tsx
```typescript
/**
 * Демонстрация интерактивных элементов
 * 
 * Возможности:
 * - Интерактивные кнопки с разными эффектами:
 *   1. Confetti Button (конфетти при клике)
 *   2. Morphing Button (изменение формы)
 *   3. Ripple Button (волна от точки клика)
 *   4. Magnetic Button (следует за курсором)
 * 
 * - Интерактивный слайдер:
 *   - Выбор продолжительности массажа (30/60/90 мин)
 *   - Плавная анимация значения
 *   - Изменение цены в реальном времени
 * 
 * - Toggle switches:
 *   - Плавная transition
 *   - Анимация индикатора
 *   - Изменение состояния с spring эффектом
 * 
 * - Drag-and-drop:
 *   - Перетаскивание карточек
 *   - Constraints (границы перетаскивания)
 *   - Snap to grid (опционально)
 * 
 * Интеграция:
 * - InteractiveButton компонент
 * - ConfettiEffect
 * - Slider, Switch компоненты
 * - Framer Motion gestures
 */
```

#### VisualEffectsSection.tsx
```typescript
/**
 * Демонстрация визуальных эффектов
 * 
 * Возможности:
 * - Glassmorphism cards:
 *   - backdrop-filter: blur()
 *   - Полупрозрачный фон
 *   - Тонкая граница
 * 
 * - Gradient cards:
 *   - Animated gradient borders
 *   - Mesh gradients
 *   - Радужные переливы
 * 
 * - Glow эффекты:
 *   - box-shadow: 0 0 20px rgba(...)
 *   - Усиление при hover
 *   - Цветные свечения
 * 
 * - Неоновые акценты:
 *   - text-shadow для текста
 *   - Neon button стили
 * 
 * - 3D transforms:
 *   - rotateX, rotateY на hover
 *   - perspective для глубины
 *   - Эффект "карточка следит за курсором"
 * 
 * Интеграция:
 * - GlassCard компонент
 * - GlowEffect HOC
 * - CSS custom properties для цветов
 */
```

#### ServicesSection.tsx
```typescript
/**
 * Секция с услугами массажного салона
 * 
 * Список услуг:
 * 1. Классический массаж (60/90 мин)
 * 2. Спортивный массаж (60 мин)
 * 3. Расслабляющий массаж (60/90 мин)
 * 4. Антицеллюлитный массаж (45/60 мин)
 * 5. Массаж лица (30/45 мин)
 * 6. Точечный массаж (30/60 мин)
 * 
 * Возможности:
 * - Карточки с описанием каждой услуги
 * - Иконки с анимацией при hover
 * - Кнопка "Подробнее" с модальным окном (опционально)
 * - Scroll-triggered появление
 * 
 * Интеграция:
 * - Card компоненты
 * - Modal для детального описания
 * - AnimatedText для заголовков
 */
```

**Структура услуги:**
```typescript
interface MassageService {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: number[];  // Доступные варианты длительности
  price: number;       // Базовая цена
  icon: React.ReactNode;
  image?: string;
}
```

#### PricingSection.tsx
```typescript
/**
 * Секция с ценовыми пакетами
 * 
 * Пакеты:
 * 1. Базовый - одна процедура
 * 2. Оптимальный - 5 процедур (скидка 10%) + бонус
 * 3. Премиум - 10 процедур (скидка 20%) + VIP-бонусы
 * 
 * Возможности:
 * - Карточки с ценами
 * - Highlight популярного пакета (border glow)
 * - Сравнение пакетов (toggle comparison mode)
 * - Animated price numbers (count-up эффект)
 * - Список включённых услуг с check-marks
 * 
 * Интеграция:
 * - Card компоненты
 * - Badge для "Популярно"
 * - Button для "Выбрать пакет"
 * - Framer Motion для анимации цен
 */
```

**Структура пакета:**
```typescript
interface PricingPackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;  // Зачёркнутая цена
  sessions: number;
  popular?: boolean;
  features: string[];
  bonus?: string;
}
```

#### TestimonialsSection.tsx
```typescript
/**
 * Секция с отзывами клиентов
 * 
 * Возможности:
 * - Карусель с автопрокруткой
 * - Навигация (стрелки влево/вправо)
 * - Dots индикатор
 * - Звёздный рейтинг (1-5 звёзд)
 * - Avatar с glow эффектом
 * - Анимация смены слайдов
 * 
 * Интеграция:
 * - Framer Motion AnimatePresence для transitions
 * - Card для каждого отзыва
 * - useInterval для автопрокрутки
 */
```

**Структура отзыва:**
```typescript
interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;  // 1-5
  text: string;
  date: string;
  service?: string;  // Какую услугу использовал
}
```

#### ResponsiveSection.tsx
```typescript
/**
 * Демонстрация адаптивности сайта
 * 
 * Возможности:
 * - Device preview switcher:
 *   - Desktop (1920x1080)
 *   - Tablet (768x1024)
 *   - Mobile (375x667)
 * 
 * - Live preview текущей страницы
 * - Масштабирование для вписывания в экран
 * - Showcase различных breakpoints
 * 
 * Интеграция:
 * - DeviceToggle компонент
 * - iframe для preview (или transform: scale)
 * - Responsive grid демонстрация
 */
```

#### Footer.tsx
```typescript
/**
 * Подвал сайта
 * 
 * Секции:
 * 1. Контактная информация:
 *    - Адрес в Тольятти
 *    - Телефон (кликабельный)
 *    - Email
 *    - Время работы
 * 
 * 2. Быстрые ссылки:
 *    - Услуги
 *    - Цены
 *    - Отзывы
 *    - Контакты
 * 
 * 3. Социальные сети:
 *    - VK, Instagram, Telegram
 *    - Hover эффекты на иконках
 * 
 * 4. Юридическая информация:
 *    - Политика конфиденциальности
 *    - Пользовательское соглашение
 *    - ОГРН, ИНН (если ООО/ИП)
 * 
 * 5. CTA:
 *    - "Хочешь отдохнуть не только телом, а душой?"
 *    - Кнопка "Записаться"
 * 
 * 6. Copyright:
 *    - © 2025 Массажный салон Свобода
 *    - GitHub ссылка
 * 
 * Интеграция:
 * - Button для CTA
 * - Ссылки с hover эффектами
 * - Grid layout для колонок
 */
```

### 2️⃣ UI компоненты (ui/)

Все UI компоненты следуют единому паттерну:
- TypeScript типизация props
- Variants для разных стилей
- Forwarded refs для доступности
- Tailwind классы с cn() утилитой
- Framer Motion анимации где уместно

#### Пример структуры Button.tsx:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    // Реализация
  }
);
```

## 🎨 Стилизация

### Tailwind конфигурация

Расширенная палитра в `tailwind.config.ts`:

```typescript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Генерируются из styles/theme.ts
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        // Кастомные анимации
      },
    },
  },
  plugins: [],
};
```

### CSS Custom Properties

В `app/globals.css`:

```css
:root {
  /* Светлая тема */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --text-primary: #0A0A0F;
  --accent-primary: #5558E3;
  /* ... */
}

.dark {
  /* Тёмная тема */
  --bg-primary: #0A0A0F;
  --bg-secondary: #13131A;
  --text-primary: #FFFFFF;
  --accent-primary: #6366F1;
  /* ... */
}
```

## 🔄 State Management

### Contexts

**ThemeContext:**
- Текущая тема (dark/light)
- Функция toggle
- Сохранение в localStorage
- Sync с system preference

**DeviceContext (опционально):**
- Текущий device mode для preview
- Desktop/Tablet/Mobile

### Local State

Большинство компонентов используют local state (useState, useReducer).
Для сложных форм можно добавить React Hook Form.

## 🎭 Анимации

### Framer Motion Variants

Централизованные в `lib/animations.ts`:

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};
```

### Scroll-Triggered Анимации

Используем `framer-motion` + `useInView`:

```typescript
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  initial="initial"
  animate={isInView ? "animate" : "initial"}
  variants={fadeInUp}
>
  {/* Контент */}
</motion.div>
```

## 📱 Адаптивность

### Breakpoints (Tailwind)

```typescript
sm: '640px',   // Mobile landscape / Small tablet
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
2xl: '1536px', // Extra large
```

### Mobile-First подход

Все стили пишутся сначала для mobile, затем расширяются:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Карточки */}
</div>
```

## ⚡ Производительность

### Оптимизация

1. **Lazy Loading:**
   - `next/dynamic` для тяжёлых компонентов
   - `loading.tsx` для Suspense

2. **Image Optimization:**
   - `next/image` для всех картинок
   - WebP формат
   - Responsive sizes

3. **Code Splitting:**
   - Автоматический в Next.js
   - Динамические импорты для модальных окон

4. **CSS:**
   - Tailwind purge неиспользуемых классов
   - Critical CSS inline

## 🧪 Тестирование (опционально)

Для production можно добавить:
- **Unit:** Jest + React Testing Library
- **E2E:** Playwright / Cypress
- **Visual Regression:** Chromatic

## 📦 Build & Deploy

### Vercel (рекомендуется)

```bash
# Build
npm run build

# Preview локально
npm start

# Deploy на Vercel
vercel --prod
```

### Переменные окружения

```env
NEXT_PUBLIC_SITE_URL=https://svoboda-massage.ru
NEXT_PUBLIC_CONTACT_EMAIL=info@svoboda-massage.ru
NEXT_PUBLIC_CONTACT_PHONE=+7XXXXXXXXXX
```

## 🔐 Безопасность

1. Content Security Policy (CSP) headers
2. HTTPS only
3. Защита от XSS через React
4. Sanitization user input (если будут формы)
5. Rate limiting для API routes (если есть)

## ♿ Accessibility

- Семантический HTML (section, article, nav)
- ARIA labels где необходимо
- Keyboard navigation
- Focus indicators
- Alt text для изображений
- Color contrast (WCAG AA)

## 🌍 SEO

- Meta tags (title, description, OG)
- Sitemap.xml
- Robots.txt
- Structured data (JSON-LD)
- Быстрая загрузка (Core Web Vitals)
- Mobile-friendly

## 📝 Naming Conventions

- **Компоненты:** PascalCase (e.g., `HeroSection.tsx`)
- **Утилиты:** camelCase (e.g., `useScrollAnimation.ts`)
- **Константы:** UPPER_SNAKE_CASE (e.g., `API_URL`)
- **CSS классы:** kebab-case или Tailwind utilities
- **Файлы:** kebab-case (e.g., `massage-services.json`)

## 🚀 Масштабируемость

### Добавление новой секции:

1. Создать компонент в `components/sections/`
2. Импортировать в `app/page.tsx`
3. Добавить в навигацию (если нужно)
4. Обновить типы в `types/`

### Добавление новой темы:

1. Расширить `styles/theme.ts`
2. Добавить CSS переменные в `globals.css`
3. Обновить ThemeContext для поддержки новых значений

### Интернационализация (i18n):

В будущем можно добавить:
- `next-intl` или `next-i18next`
- Папка `locales/` с переводами
- Language switcher компонент
