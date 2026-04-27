# Technology Stack Documentation

## 📚 Полный стек технологий

### 🏗️ Core Framework

#### Next.js 14.2+
**Версия:** 14.2 или новее (App Router)

**Почему выбран:**
- ✅ Server-Side Rendering (SSR) для SEO
- ✅ Static Site Generation (SSG) для производительности
- ✅ App Router - современная архитектура
- ✅ Image Optimization из коробки
- ✅ Автоматический code splitting
- ✅ API Routes (если понадобятся)
- ✅ Built-in поддержка TypeScript
- ✅ Vercel deployment в один клик

**Ключевые фичи для проекта:**
- Server Components для быстрой загрузки
- Client Components для интерактивности
- Metadata API для SEO
- `next/font` для оптимизации шрифтов
- `next/image` для ленивой загрузки изображений

**Альтернативы (не выбраны):**
- ❌ Vite + React - нет SSR из коробки
- ❌ Gatsby - медленный build для больших сайтов
- ❌ Remix - меньше экосистема

---

#### React 18.2+
**Версия:** 18.2 или новее

**Почему выбран:**
- ✅ Concurrent rendering для плавных анимаций
- ✅ Automatic batching для производительности
- ✅ Server Components (с Next.js 14)
- ✅ Огромная экосистема библиотек
- ✅ Отличная документация

**Используемые фичи:**
- Hooks (useState, useEffect, useRef, useContext, useMemo, useCallback)
- Custom Hooks для переиспользуемой логики
- Suspense для lazy loading
- Error Boundaries для обработки ошибок

---

#### TypeScript 5.0+
**Версия:** 5.0 или новее

**Почему выбран:**
- ✅ Статическая типизация - меньше багов
- ✅ Лучший DX (Developer Experience) с автокомплитом
- ✅ Легче рефакторинг и масштабирование
- ✅ Самодокументирующийся код
- ✅ Обязательный для production проектов

**Конфигурация:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Альтернативы:**
- ❌ JavaScript - нет типизации, больше багов

---

### 🎨 Styling

#### Tailwind CSS 3.4+
**Версия:** 3.4 или новее

**Почему выбран:**
- ✅ Utility-first подход - быстрая разработка
- ✅ Нет конфликтов имён классов (CSS-in-JS без JS)
- ✅ Tree-shaking - только используемые стили в production
- ✅ Responsive design из коробки
- ✅ Dark mode поддержка
- ✅ Кастомизация через конфиг
- ✅ JIT (Just-In-Time) компиляция

**Плагины:**
- `@tailwindcss/forms` - стилизация форм (если нужны)
- `@tailwindcss/typography` - типографика (если blog)

**Кастомизация:**
```javascript
// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...},
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
    },
  },
};
```

**Альтернативы (не выбраны):**
- ❌ CSS Modules - больше boilerplate
- ❌ Styled Components - runtime overhead
- ❌ Emotion - сложнее с SSR
- ❌ Vanilla CSS - неудобно для больших проектов

---

#### PostCSS
**Версия:** 8.4+

**Почему нужен:**
- Autoprefixer для кроссбраузерности
- Минификация CSS
- Nested rules (опционально)

---

### ✨ Анимации и Интерактивность

#### Framer Motion 11.0+
**Версия:** 11.0 или новее

**Почему выбран:**
- ✅ Декларативный API - легко читать и писать
- ✅ Spring-based физика для реалистичных анимаций
- ✅ Gesture recognition (drag, hover, tap)
- ✅ Scroll-triggered анимации
- ✅ Layout animations из коробки
- ✅ AnimatePresence для exit анимаций
- ✅ Отличная производительность (GPU acceleration)
- ✅ TypeScript поддержка

**Ключевые компоненты:**
```typescript
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Базовая анимация
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>

// Scroll-triggered
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

// Gestures
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>

// Exit animations
<AnimatePresence>
  {isVisible && <motion.div exit={{ opacity: 0 }} />}
</AnimatePresence>
```

**Используется для:**
- Scroll-triggered секции
- Stagger анимации карточек
- Hover/Tap эффекты
- Page transitions
- Morphing shapes
- Drag and drop

**Альтернативы (не выбраны):**
- ❌ React Spring - менее декларативный API
- ❌ GSAP - платный для коммерческих проектов
- ❌ CSS Animations - ограниченные возможности
- ❌ Anime.js - не React-специфичный

---

#### Canvas Confetti 1.9+
**Версия:** 1.9 или новее

**Почему выбран:**
- ✅ Лёгкая библиотека (~7KB)
- ✅ Красивые конфетти эффекты
- ✅ Кастомизация (цвета, формы, физика)
- ✅ Хорошая производительность (Canvas)

**Использование:**
```typescript
import confetti from 'canvas-confetti';

const handleClick = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#6366F1', '#8B5CF6', '#EC4899'],
  });
};
```

**Где используется:**
- InteractiveSection (кнопка с конфетти)
- Success модальные окна (при записи на массаж)

---

### 🧩 UI Компоненты и Утилиты

#### Radix UI (Primitives)
**Версия:** Latest

**Выбранные компоненты:**
- `@radix-ui/react-switch` - Toggle switches
- `@radix-ui/react-slider` - Range sliders
- `@radix-ui/react-tooltip` - Tooltips
- `@radix-ui/react-dialog` - Modal dialogs
- `@radix-ui/react-dropdown-menu` - Dropdown menus (если нужно)

**Почему выбран:**
- ✅ Headless UI - полный контроль стилей
- ✅ Accessibility из коробки (ARIA, keyboard nav)
- ✅ Unstyled - интеграция с Tailwind
- ✅ Composable API
- ✅ Поддержка анимаций

**Альтернативы:**
- ❌ Headless UI - меньше компонентов
- ❌ React ARIA - более сложный API
- ❌ Chakra UI - слишком opinionated для showcase

---

#### Lucide React
**Версия:** Latest

**Почему выбран:**
- ✅ Современные иконки (форк Feather)
- ✅ Tree-shakable - только нужные иконки
- ✅ Кастомизация размера и цвета
- ✅ TypeScript типы
- ✅ 1000+ иконок

**Использование:**
```typescript
import { Heart, Clock, MapPin, Phone } from 'lucide-react';

<Heart className="w-6 h-6 text-pink-500" />
```

**Альтернативы:**
- ❌ React Icons - больше размер бандла
- ❌ Heroicons - меньше выбор
- ❌ Font Awesome - старомодные

---

#### clsx / tailwind-merge
**Версия:** Latest

**Почему нужны:**
- `clsx` - условные классы
- `tailwind-merge` - merge conflicting Tailwind classes

**Утилита cn():**
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Использование
<div className={cn(
  'base-class',
  isActive && 'active-class',
  className
)} />
```

---

### 🪝 Custom Hooks

Собственные хуки в `src/hooks/`:

#### useInView
Intersection Observer для scroll-triggered анимаций.

```typescript
import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}
```

#### useMediaQuery
Reactive media queries для responsive логики.

```typescript
import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
```

#### useTheme
Работа с темой (dark/light mode).

```typescript
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

#### useLocalStorage
Persistent state в localStorage.

```typescript
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

---

### 🛠️ Development Tools

#### ESLint
**Конфигурация:** `next/core-web-vitals`

**Дополнительные плагины:**
- `eslint-plugin-react-hooks`
- `eslint-plugin-jsx-a11y` (accessibility)

#### Prettier
**Конфигурация:**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

---

### 📦 Package Manager

#### npm / pnpm / yarn
**Рекомендация:** **pnpm** (самый быстрый и экономный)

**Почему pnpm:**
- ✅ Быстрее чем npm/yarn
- ✅ Экономия дискового пространства
- ✅ Строгий dependency resolution

**Альтернативы:**
- npm (стандартный, но медленный)
- yarn (быстрый, но больше места)

---

### 🚀 Deployment

#### Vercel
**Почему выбран:**
- ✅ Оптимизирован для Next.js (создатели Next.js)
- ✅ Zero-config deployment
- ✅ Автоматический CI/CD (push to deploy)
- ✅ Edge Functions
- ✅ Превью для каждого PR
- ✅ Бесплатный SSL
- ✅ Global CDN
- ✅ Analytics из коробки

**Альтернативы:**
- ❌ Netlify - менее оптимизирован для Next.js
- ❌ AWS Amplify - сложнее настройка
- ❌ Cloudflare Pages - новый, меньше фич

---

## 📊 Сравнительная таблица

| Технология | Альтернатива | Почему выбрали | Размер бандла |
|------------|-------------|----------------|---------------|
| Next.js 14 | Vite + React | SSR, SEO, Ecosystem | Base |
| Tailwind CSS | CSS-in-JS | Utility-first, Performance | ~10KB |
| Framer Motion | React Spring | Declarative API, DX | ~30KB |
| Radix UI | Headless UI | More components | ~5KB per component |
| TypeScript | JavaScript | Type safety, DX | 0KB (compile time) |
| Lucide React | React Icons | Modern, Tree-shakable | ~1KB per icon |

---

## 🎯 Performance Budget

**Target metrics:**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

**Bundle size target:**
- Initial JS bundle: < 100KB (gzipped)
- Total page weight: < 500KB

---

## 🔄 Версионирование

**Semantic Versioning:**
- MAJOR.MINOR.PATCH (e.g., 1.0.0)
- Обновления dependencies раз в месяц
- Security patches - сразу

---

## 📚 Обучающие ресурсы

**Next.js:**
- [Official Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

**Framer Motion:**
- [Official Docs](https://www.framer.com/motion/)
- [Examples](https://www.framer.com/motion/examples/)

**Tailwind CSS:**
- [Official Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/) (paid components)

**TypeScript:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 🔮 Будущие улучшения

**Возможные дополнения:**
- React Hook Form (для сложных форм)
- Zod (валидация схем)
- Swiper (carousel для отзывов)
- React Query (если API routes)
- next-intl (интернационализация)
- next-sitemap (автогенерация sitemap)

**Аналитика:**
- Vercel Analytics
- Google Analytics 4
- Yandex Metrika (для РФ аудитории)

**Testing (опционально):**
- Vitest (unit tests)
- Playwright (E2E tests)
- Storybook (component showcase)
