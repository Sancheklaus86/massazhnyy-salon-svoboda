# 📊 Визуализация архитектуры проекта

## 🏗️ Общая архитектура системы

```
┌─────────────────────────────────────────────────────────────────┐
│                         BROWSER (Client)                         │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    React Components                         │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │ │
│  │  │   Hero   │  │Animation │  │Interactive│  │ Visual   │  │ │
│  │  │ Section  │  │ Section  │  │  Section  │  │ Effects  │  │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │ │
│  │                                                            │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │ │
│  │  │ Services │  │ Pricing  │  │Testimon- │  │Responsive│  │ │
│  │  │ Section  │  │ Section  │  │   ials   │  │ Section  │  │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │                     Footer                            │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              Framer Motion Animation Engine                 │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                  Tailwind CSS Styles                        │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    Next.js 14 App Router                         │
│                                                                   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌───────────────┐ │
│  │ Server Components│  │ Client Components│  │  API Routes   │ │
│  │      (RSC)       │  │   (Interactive)  │  │  (Optional)   │ │
│  └──────────────────┘  └──────────────────┘  └───────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │           Static Site Generation (SSG/ISR)                  │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      Vercel Edge Network                         │
│                         (CDN + Edge)                             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Структура файловой системы (дерево)

```
massage-salon-svoboda/
│
├── 📚 docs/                           # Документация
│   ├── 📄 PROJECT_OVERVIEW.md         # Обзор проекта
│   ├── 📄 ARCHITECTURE.md             # Архитектура
│   ├── 📄 TECH_STACK.md               # Технологии
│   ├── 📄 CURRENT_STATUS.md           # Статус и roadmap
│   ├── 📄 SUMMARY.md                  # Краткое резюме
│   └── 📄 VISUALIZATION.md            # Этот файл
│
├── 🎨 public/                         # Статические файлы
│   ├── images/
│   │   ├── hero/                      # Hero изображения
│   │   ├── services/                  # Иконки услуг
│   │   └── testimonials/              # Аватары
│   ├── favicon.ico
│   └── manifest.json
│
├── 💻 src/
│   │
│   ├── 📄 app/                        # Next.js App Router
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Homepage
│   │   ├── globals.css                # Глобальные стили
│   │   ├── privacy/page.tsx           # Privacy Policy
│   │   └── terms/page.tsx             # Terms of Service
│   │
│   ├── 🧩 components/
│   │   │
│   │   ├── 📑 sections/               # Секции страницы (9 штук)
│   │   │   ├── HeroSection.tsx        # 1️⃣ Hero блок
│   │   │   ├── AnimationsSection.tsx  # 2️⃣ Демо анимаций
│   │   │   ├── InteractivitySec.tsx   # 3️⃣ Демо интерактива
│   │   │   ├── VisualEffectsSec.tsx   # 4️⃣ Демо эффектов
│   │   │   ├── ServicesSection.tsx    # 5️⃣ Услуги массажа
│   │   │   ├── PricingSection.tsx     # 6️⃣ Цены
│   │   │   ├── TestimonialsSec.tsx    # 7️⃣ Отзывы
│   │   │   ├── ResponsiveSection.tsx  # 8️⃣ Адаптивность
│   │   │   └── Footer.tsx             # 9️⃣ Подвал
│   │   │
│   │   ├── 🎨 ui/                     # UI компоненты (15+)
│   │   │   ├── Button.tsx             # Кнопка
│   │   │   ├── Card.tsx               # Карточка
│   │   │   ├── GlassCard.tsx          # Glassmorphism
│   │   │   ├── ThemeToggle.tsx        # Переключатель темы
│   │   │   ├── ScrollProgress.tsx     # Прогресс прокрутки
│   │   │   ├── AnimatedText.tsx       # Анимированный текст
│   │   │   ├── Badge.tsx              # Бейдж
│   │   │   ├── Input.tsx              # Поле ввода
│   │   │   ├── Slider.tsx             # Слайдер
│   │   │   ├── Switch.tsx             # Переключатель
│   │   │   └── ...
│   │   │
│   │   ├── ✨ effects/                # Эффекты (7+)
│   │   │   ├── ConfettiEffect.tsx     # Конфетти
│   │   │   ├── ParallaxEffect.tsx     # Параллакс
│   │   │   ├── FloatingElements.tsx   # Плавающие элементы
│   │   │   ├── GradientBlob.tsx       # Gradient пятно
│   │   │   ├── MagneticButton.tsx     # Magnetic эффект
│   │   │   └── ...
│   │   │
│   │   └── 🏛️ layout/                 # Layout компоненты
│   │       ├── Container.tsx          # Контейнер
│   │       └── Section.tsx            # Обёртка секции
│   │
│   ├── 🛠️ lib/                        # Утилиты
│   │   ├── animations.ts              # Framer Motion variants
│   │   ├── constants.ts               # Константы
│   │   ├── utils.ts                   # Утилиты
│   │   └── cn.ts                      # className merger
│   │
│   ├── 🌐 contexts/                   # React Contexts
│   │   └── ThemeContext.tsx           # Тема (dark/light)
│   │
│   ├── 🪝 hooks/                      # Custom Hooks
│   │   ├── useInView.ts               # Scroll detection
│   │   ├── useTheme.ts                # Тема
│   │   ├── useMediaQuery.ts           # Responsive
│   │   └── useLocalStorage.ts         # LocalStorage
│   │
│   ├── 🎨 styles/                     # Стили
│   │   └── theme.ts                   # Цветовая палитра
│   │
│   └── 📝 types/                      # TypeScript типы
│       ├── index.ts                   # Экспорт типов
│       ├── components.ts              # Типы компонентов
│       └── theme.ts                   # Типы темы
│
├── ⚙️ Конфигурация
│   ├── .cursorrules                   # AI coding rules
│   ├── .eslintrc.json                 # ESLint
│   ├── .prettierrc                    # Prettier
│   ├── tsconfig.json                  # TypeScript
│   ├── tailwind.config.ts             # Tailwind
│   ├── next.config.js                 # Next.js
│   └── package.json                   # Dependencies
│
├── 📖 README.md                       # Readme
└── 🚫 .gitignore                      # Git ignore
```

---

## 🧩 Карта зависимостей компонентов

```
┌─────────────────────────────────────────────────────────────────┐
│                         app/page.tsx                             │
│                       (Main Homepage)                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ├─ ThemeProvider (Context)
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                           │
   ┌────▼────┐                                 ┌────▼────┐
   │ Sections│                                 │ Effects │
   └────┬────┘                                 └────┬────┘
        │                                           │
        ├─ HeroSection                             ├─ ScrollProgress
        │   ├─ AnimatedText                        ├─ ThemeToggle
        │   ├─ Button (CTA)                        └─ FloatingElements
        │   ├─ GradientBlob
        │   └─ FloatingElements
        │
        ├─ AnimationsSection
        │   ├─ Card (x6 услуг)
        │   └─ Framer Motion variants
        │
        ├─ InteractivitySection
        │   ├─ InteractiveButton
        │   │   ├─ ConfettiEffect
        │   │   ├─ MagneticButton
        │   │   └─ RippleEffect
        │   ├─ Slider (Radix)
        │   └─ Switch (Radix)
        │
        ├─ VisualEffectsSection
        │   ├─ GlassCard (x4)
        │   ├─ GradientBlob
        │   └─ GlowEffect
        │
        ├─ ServicesSection
        │   ├─ Card (x6 услуг)
        │   └─ Modal (опц.)
        │
        ├─ PricingSection
        │   ├─ Card (x3 пакета)
        │   ├─ Badge ("Popular")
        │   └─ Button (CTA)
        │
        ├─ TestimonialsSection
        │   ├─ Card (carousel)
        │   └─ Avatar
        │
        ├─ ResponsiveSection
        │   └─ DeviceToggle
        │
        └─ Footer
            ├─ Button (CTA)
            └─ Social icons
```

---

## 🎨 Theme System Flow

```
┌───────────────────────────────────────────────────────────────┐
│                    User Interaction                            │
│              (Clicks Theme Toggle Button)                      │
└────────────────────────────┬──────────────────────────────────┘
                             │
                             ▼
              ┌──────────────────────────────┐
              │     ThemeToggle Component    │
              │   (calls toggleTheme())      │
              └──────────────┬───────────────┘
                             │
                             ▼
              ┌──────────────────────────────┐
              │      ThemeContext            │
              │  (updates theme state)       │
              └──────────────┬───────────────┘
                             │
                             ├──────────────────┐
                             │                  │
                             ▼                  ▼
              ┌─────────────────────┐  ┌────────────────┐
              │   localStorage      │  │  <html> class  │
              │  (persist theme)    │  │  ('dark'/'')   │
              └─────────────────────┘  └────────────────┘
                                              │
                                              ▼
                                ┌─────────────────────────────┐
                                │    CSS Custom Properties    │
                                │   (--bg-primary, etc.)      │
                                └─────────────────────────────┘
                                              │
                                              ▼
                                ┌─────────────────────────────┐
                                │   Tailwind dark: classes    │
                                │   Apply new styles          │
                                └─────────────────────────────┘
                                              │
                                              ▼
                                ┌─────────────────────────────┐
                                │      UI Re-renders          │
                                │   with new theme colors     │
                                └─────────────────────────────┘
```

---

## ✨ Animation Flow (Scroll-Triggered)

```
User scrolls page
       │
       ▼
┌────────────────────────────────┐
│  Intersection Observer API     │
│  (via useInView hook)          │
└────────────┬───────────────────┘
             │
             ▼
      Element enters viewport?
             │
     ┌───────┴───────┐
     │ YES           │ NO
     ▼               ▼
┌─────────────┐  ┌──────────────┐
│ isInView =  │  │ isInView =   │
│    true     │  │    false     │
└──────┬──────┘  └──────────────┘
       │
       ▼
┌────────────────────────────────┐
│  Framer Motion Variant         │
│  animate="animate"             │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│  Animation plays               │
│  (fadeIn, slideIn, etc.)       │
└────────────────────────────────┘
```

---

## 🎯 User Journey Flow

```
                    User visits site
                          │
                          ▼
              ┌───────────────────────┐
              │   1. Hero Section     │
              │   - First impression  │
              │   - CTA visible       │
              └───────────┬───────────┘
                          │ Scroll down
                          ▼
              ┌───────────────────────┐
              │ 2. Animations Section │
              │   - Wow effect        │
              │   - See services      │
              └───────────┬───────────┘
                          │ Scroll down
                          ▼
              ┌───────────────────────┐
              │ 3. Interactive Section│
              │   - Play with buttons │
              │   - Engage with site  │
              └───────────┬───────────┘
                          │ Scroll down
                          ▼
              ┌───────────────────────┐
              │ 4. Visual Effects     │
              │   - More wow moments  │
              └───────────┬───────────┘
                          │ Scroll down
                          ▼
              ┌───────────────────────┐
              │ 5. Services Section   │
              │   - Learn about       │
              │     massage types     │
              └───────────┬───────────┘
                          │ Scroll down
                          ▼
              ┌───────────────────────┐
              │ 6. Pricing Section    │
              │   - See prices        │
              │   - Compare packages  │
              └───────────┬───────────┘
                          │ Scroll down
                          ▼
              ┌───────────────────────┐
              │ 7. Testimonials       │
              │   - Build trust       │
              │   - Read reviews      │
              └───────────┬───────────┘
                          │ Scroll down
                          ▼
              ┌───────────────────────┐
              │ 8. Responsive Demo    │
              │   - See tech showcase │
              └───────────┬───────────┘
                          │ Scroll down
                          ▼
              ┌───────────────────────┐
              │ 9. Footer             │
              │   - Final CTA         │
              │   - Contact info      │
              │   - Book appointment  │◄─── Conversion!
              └───────────────────────┘
```

---

## 🔄 Data Flow (Example: Pricing Section)

```
┌──────────────────────────────────────────────────────────────┐
│                   constants/pricing.ts                        │
│                                                                │
│  export const pricingPackages = [                             │
│    { id: 1, name: "Базовый", price: 1500, ... },             │
│    { id: 2, name: "Оптимальный", price: 6500, ... },         │
│    { id: 3, name: "Премиум", price: 12000, ... }             │
│  ]                                                             │
└────────────────────────────┬─────────────────────────────────┘
                             │ import
                             ▼
┌──────────────────────────────────────────────────────────────┐
│               PricingSection.tsx                              │
│                                                                │
│  import { pricingPackages } from '@/lib/constants';           │
│                                                                │
│  function PricingSection() {                                  │
│    return (                                                    │
│      <div>                                                     │
│        {pricingPackages.map(pkg => (                          │
│          <Card key={pkg.id}>                                  │
│            <h3>{pkg.name}</h3>                                │
│            <AnimatedPrice value={pkg.price} />               │
│            <Button>Выбрать</Button>                           │
│          </Card>                                               │
│        ))}                                                     │
│      </div>                                                    │
│    )                                                           │
│  }                                                             │
└────────────────────────────┬─────────────────────────────────┘
                             │ render
                             ▼
┌──────────────────────────────────────────────────────────────┐
│                      Browser DOM                              │
│                                                                │
│  [Card: Базовый - 1500₽]                                     │
│  [Card: Оптимальный - 6500₽] ◄── Popular!                    │
│  [Card: Премиум - 12000₽]                                    │
└──────────────────────────────────────────────────────────────┘
```

---

## 🎨 Component Composition (Example: Hero)

```
HeroSection
│
├── <Section>                        # Layout wrapper
│   │
│   ├── <GradientBlob />             # Background effect
│   │
│   ├── <FloatingElements />         # Floating shapes
│   │
│   ├── <Container>                  # Max-width container
│   │   │
│   │   ├── <motion.div>             # Framer Motion wrapper
│   │   │   │
│   │   │   ├── <AnimatedText>       # Gradient title
│   │   │   │     "Массажный салон Свобода"
│   │   │   │
│   │   │   ├── <AnimatedText>       # Subtitle
│   │   │   │     "Позволь себе больше..."
│   │   │   │
│   │   │   └── <div>                # CTA buttons
│   │   │       ├── <Button>         # Primary CTA
│   │   │       │     "Записаться"
│   │   │       │
│   │   │       └── <Button>         # Secondary CTA
│   │   │             "Узнать больше"
│   │   │
│   │   └── <ScrollIndicator />      # Scroll arrow
│   │
│   └── <ParallaxEffect />           # Parallax scroll
│
└── <ScrollProgress />               # Progress bar (global)
```

---

## 🚀 Build & Deploy Pipeline

```
Developer writes code
         │
         ▼
    git commit
         │
         ▼
    git push origin main
         │
         ▼
┌────────────────────────┐
│   GitHub Repository    │
└───────────┬────────────┘
            │ Webhook trigger
            ▼
┌────────────────────────┐
│   Vercel Build         │
│   1. npm install       │
│   2. TypeScript check  │
│   3. ESLint            │
│   4. next build        │
│   5. Optimize images   │
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│   Vercel Preview       │◄─── For PR branches
│   (staging URL)        │
└────────────────────────┘
            │
            │ Merge to main
            ▼
┌────────────────────────┐
│  Production Deploy     │
│  - Edge Network        │
│  - CDN Distribution    │
│  - SSL Certificate     │
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│  svoboda-massage.ru    │◄─── Live site!
│  (Custom Domain)       │
└────────────────────────┘
```

---

## 📱 Responsive Breakpoints Visual

```
┌──────────────────────────────────────────────────────────────┐
│                        Mobile (< 640px)                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ ┌────────────────────────────────────────────────────┐ │  │
│  │ │              Hero Section                          │ │  │
│  │ │      Title (centered)                              │ │  │
│  │ │      Subtitle (centered)                           │ │  │
│  │ │      [Button] [Button]                             │ │  │
│  │ └────────────────────────────────────────────────────┘ │  │
│  │ ┌────────────────────────────────────────────────────┐ │  │
│  │ │ [Service Card 1]                                   │ │  │
│  │ └────────────────────────────────────────────────────┘ │  │
│  │ ┌────────────────────────────────────────────────────┐ │  │
│  │ │ [Service Card 2]                                   │ │  │
│  │ └────────────────────────────────────────────────────┘ │  │
│  │                    (1 column)                          │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                     Tablet (768px - 1024px)                       │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ ┌──────────────────────────────────────────────────────────┐ │
│  │ │                    Hero Section                          │ │
│  │ │         Title (centered, larger)                         │ │
│  │ │         Subtitle (centered)                              │ │
│  │ │         [Button]    [Button]                             │ │
│  │ └──────────────────────────────────────────────────────────┘ │
│  │ ┌─────────────────────────┐ ┌─────────────────────────────┐ │
│  │ │    [Service Card 1]     │ │    [Service Card 2]         │ │
│  │ └─────────────────────────┘ └─────────────────────────────┘ │
│  │ ┌─────────────────────────┐ ┌─────────────────────────────┐ │
│  │ │    [Service Card 3]     │ │    [Service Card 4]         │ │
│  │ └─────────────────────────┘ └─────────────────────────────┘ │
│  │                        (2 columns)                           │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                       Desktop (> 1024px)                              │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │ ┌──────────────────────────────────────────────────────────────┐ │
│  │ │                      Hero Section                            │ │
│  │ │              Title (centered, largest)                       │ │
│  │ │              Subtitle (centered)                             │ │
│  │ │              [Button]       [Button]                         │ │
│  │ └──────────────────────────────────────────────────────────────┘ │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐ │
│  │ │ Card 1   │ │ Card 2   │ │ Card 3   │ │ Card 4   │ │ Card 5 │ │
│  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────────┘ │
│  │                           (3 columns)                            │
│  └────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 State Management Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Application State                         │
└─────────────────────────────────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
            ▼                 ▼                 ▼
    ┌───────────────┐ ┌──────────────┐ ┌──────────────┐
    │  Global State │ │ Local State  │ │ Server State │
    └───────┬───────┘ └──────┬───────┘ └──────┬───────┘
            │                │                 │
            ▼                ▼                 ▼
    ┌───────────────┐ ┌──────────────┐ ┌──────────────┐
    │ Theme Context │ │  Component   │ │   (Future)   │
    │ - dark/light  │ │  useState    │ │   - CMS data │
    │ - localStorage│ │  - isOpen    │ │   - User data│
    └───────────────┘ │  - selected  │ └──────────────┘
                      │  - count     │
                      └──────────────┘
```

---

## 🔐 Security & Performance

```
                    User Request
                         │
                         ▼
              ┌──────────────────┐
              │  Vercel Edge     │
              │  - DDoS protect  │
              │  - Rate limiting │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │   Next.js App    │
              │  - CSP headers   │
              │  - XSS protect   │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │  Static Assets   │
              │  - CDN cached    │
              │  - Compressed    │
              │  - Optimized     │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │   User Browser   │
              │  - HTTPS only    │
              │  - Fast loading  │
              └──────────────────┘
```

---

**Визуализация создана для лучшего понимания архитектуры проекта**  
*Используйте эти диаграммы при разработке и обсуждении проекта*
