# Массажный салон "Свобода" - Showcase Website

Современный showcase-сайт для массажного салона в Тольятти с демонстрацией возможностей веб-разработки.

## 🚀 Технологии

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - Типизация для надёжности
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Плавные анимации
- **Radix UI** - Headless компоненты
- **Lucide React** - Современные иконки
- **Dikidi.net** - Онлайн-запись клиентов

## 🌐 Production

**Сайт развёрнут и доступен:**
- 🔗 http://vm15793355.example.com
- 🔗 http://171.22.135.61

**Технический стек сервера:**
- Ubuntu 24.04 LTS (Linux 6.8.0-110)
- Node.js 24.14.1 LTS
- PM2 6.0.14 (process manager)
- Nginx 1.28.2 (reverse proxy)

**Статус:** ✅ Готов к дальнейшей разработке

---

## 📦 Установка (локальная разработка)

```bash
# Клонировать репозиторий
git clone https://github.com/Sancheklaus86/massazhnyy-salon-svoboda.git
cd massazhnyy-salon-svoboda

# Установить зависимости
npm install

# Создать файл окружения
cp .env.example .env.local

# Запустить dev-сервер
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## ⚙️ Настройка Dikidi (онлайн-запись)

1. Зарегистрируйтесь на [dikidi.net](https://dikidi.net)
2. Перейдите в личный кабинет: **Настройки → Виджет онлайн-записи**
3. Скопируйте ссылку на виджет (например: `https://dikidi.net/widget/123456`)
4. Откройте файл `.env.local` и вставьте ссылку:

```env
NEXT_PUBLIC_DIKIDI_URL=https://dikidi.net/widget/YOUR_COMPANY_ID
```

5. Перезапустите dev-сервер

## 📁 Структура проекта

```
src/
├── app/                # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── sections/       # Секции страницы
│   ├── ui/            # UI компоненты
│   ├── effects/       # Эффекты и анимации
│   └── layout/        # Layout компоненты
├── lib/               # Утилиты
├── hooks/             # Custom hooks
├── contexts/          # React contexts
├── styles/            # Стили
└── types/             # TypeScript типы
```

## 🎨 Секции сайта

- **Hero** - Главный экран с градиентами
- **Services** - Виды массажа (6 карточек)
- **Animations** - Демо Framer Motion
- **Interactivity** - Интерактивные элементы
- **Visual Effects** - Glassmorphism, градиенты, 3D
- **Pricing** - Ценовые пакеты
- **Testimonials** - Отзывы клиентов
- **Contact** - Форма записи через Dikidi
- **Footer** - Контакты и ссылки

## 🛠️ Команды

```bash
npm run dev          # Запуск dev-сервера
npm run build        # Production build
npm start            # Запуск production сервера
npm run lint         # ESLint проверка
npm run format       # Prettier форматирование
npm run type-check   # TypeScript проверка
```

## 📝 Настройка контактов

Отредактируйте файл `src/lib/constants.ts`:

```typescript
export const CONTACT = {
  phone: '+7 (848) 200-00-00',
  email: 'info@svoboda-massage.ru',
  address: 'Тольятти, улица 40 лет Победы, 19б',
  workingHours: 'Пн-Вс: 9:00 – 21:00',
  city: 'Тольятти',
};
```

## 🌐 Deploy на Vercel

1. Загрузите проект на GitHub
2. Импортируйте репозиторий на [vercel.com](https://vercel.com)
3. Добавьте переменные окружения:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_PHONE`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_DIKIDI_URL`
4. Deploy!

## 📄 Лицензия

MIT

---

Сделано с ❤️ для массажного салона "Свобода"
