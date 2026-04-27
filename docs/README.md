# 💆 Массажный салон "Свобода" - Showcase Website

> **Позволь себе больше, чем просто массаж**

Современный одностраничный сайт-витрина для массажного салона в Тольятти, демонстрирующий возможности вайбкодинга и современной веб-разработки.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)

---

## ✨ Особенности

### 🎭 Showcase возможностей
Каждая секция сайта демонстрирует отдельную технологию веб-разработки:
- **Animations** - Framer Motion scroll-triggered анимации
- **Interactivity** - Confetti, magnetic buttons, drag-and-drop
- **Visual Effects** - Glassmorphism, gradient meshes, glow эффекты
- **Responsive Design** - Адаптивность с live preview

### 💼 Коммерческая функция
- Информация об услугах массажа
- Ценовые пакеты
- Отзывы клиентов
- Контакты и запись

### 🎨 Дизайн
- Тёмная и светлая темы
- Плавные анимации и transitions
- Современная типографика
- Неоновые акценты и градиенты

---

## 🚀 Быстрый старт

### Требования
- Node.js 18+ 
- npm / pnpm / yarn

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/yourusername/massage-salon-svoboda.git
cd massage-salon-svoboda

# Установить зависимости
npm install
# или
pnpm install

# Запустить dev сервер
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

---

## 📁 Структура проекта

```
massage-salon-svoboda/
├── docs/                    # 📚 Документация
│   ├── PROJECT_OVERVIEW.md  # Обзор проекта
│   ├── ARCHITECTURE.md      # Архитектура
│   ├── TECH_STACK.md        # Технологический стек
│   └── CURRENT_STATUS.md    # Текущий статус
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/
│   │   ├── sections/       # Секции сайта
│   │   ├── ui/             # UI компоненты
│   │   └── effects/        # Эффекты и анимации
│   ├── lib/                # Утилиты
│   ├── hooks/              # Custom hooks
│   └── styles/             # Стили и темы
└── public/                  # Статические файлы
```

---

## 🛠️ Технологический стек

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework с App Router
- **[React 18](https://reactjs.org/)** - UI библиотека
- **[TypeScript](https://www.typescriptlang.org/)** - Типизация

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Анимации

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI компоненты
- **[Lucide React](https://lucide.dev/)** - Иконки
- **[Canvas Confetti](https://www.kirilv.com/canvas-confetti/)** - Эффекты конфетти

### Tools
- **ESLint** - Линтер
- **Prettier** - Форматирование кода

[📖 Полный список технологий](docs/TECH_STACK.md)

---

## 📱 Секции сайта

1. **Hero** - Впечатляющая первая секция с градиентным фоном
2. **Animations** - Демонстрация Framer Motion
3. **Interactivity** - Интерактивные элементы
4. **Visual Effects** - Glassmorphism и современные эффекты
5. **Services** - Услуги массажа
6. **Pricing** - Ценовые пакеты
7. **Testimonials** - Отзывы клиентов
8. **Responsive** - Демонстрация адаптивности
9. **Footer** - Контакты и CTA

[📖 Детальное описание секций](docs/ARCHITECTURE.md)

---

## 🎨 Цветовая палитра

### Тёмная тема (основная)
```
Background: #0A0A0F, #13131A, #1A1A24
Text:       #FFFFFF, #B4B4C8, #8484A0
Accent:     #6366F1 (Indigo), #8B5CF6 (Purple), #EC4899 (Pink)
```

### Светлая тема
```
Background: #FFFFFF, #F8F9FA, #F1F3F5
Text:       #0A0A0F, #4A4A5E, #6A6A7E
Accent:     #5558E3 (Indigo), #7C3AED (Purple), #DB2777 (Pink)
```

---

## 🚀 Команды

```bash
# Development
npm run dev          # Запуск dev сервера
npm run build        # Production build
npm start            # Запуск production build

# Code Quality
npm run lint         # ESLint проверка
npm run type-check   # TypeScript проверка
npm run format       # Prettier форматирование

# Testing (если добавлено)
npm run test         # Запуск тестов
npm run test:watch   # Watch mode
```

---

## 📚 Документация

Полная документация находится в папке `/docs`:

- **[PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md)** - Цели, аудитория, концепция
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - Архитектура и компоненты
- **[TECH_STACK.md](docs/TECH_STACK.md)** - Детальное описание технологий
- **[CURRENT_STATUS.md](docs/CURRENT_STATUS.md)** - План разработки и прогресс

---

## 🗓️ Roadmap

### Фаза 1: MVP (20 дней)
- [x] Планирование и архитектура
- [ ] Базовая настройка проекта
- [ ] Core UI компоненты
- [ ] Все секции сайта
- [ ] SEO оптимизация
- [ ] Deploy на Vercel

### Фаза 2: v2.0 (Будущее)
- [ ] Онлайн-запись на массаж
- [ ] Интеграция с CRM
- [ ] Онлайн-оплата
- [ ] Чат-бот
- [ ] Мультиязычность (i18n)
- [ ] Blog секция

[📖 Детальный план](docs/CURRENT_STATUS.md)

---

## 🤝 Contribution

Этот проект создан как showcase и учебный материал. 

Если хотите внести вклад:
1. Fork проекта
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

---

## 📄 Лицензия

MIT License - используйте как хотите!

---

## 📞 Контакты

**Для клиентов салона:**
- 📍 Адрес: г. Тольятти, [укажите адрес]
- 📞 Телефон: +7 (XXX) XXX-XX-XX
- 📧 Email: info@svoboda-massage.ru
- 🕐 Время работы: Пн-Вс 9:00-21:00

**Социальные сети:**
- VK: [ссылка]
- Instagram: [ссылка]
- Telegram: [ссылка]

**Для разработчиков:**
- GitHub: [your-github]
- Email: [your-email]

---

## 🙏 Благодарности

Спасибо всем open-source проектам, которые сделали это возможным:
- Next.js Team
- Vercel
- Tailwind Labs
- Framer
- И всему React сообществу!

---

## 📸 Скриншоты

> Скриншоты будут добавлены после завершения разработки

---

## ⭐ Star History

Если проект был полезен - поставьте звезду! ⭐

---

**Сделано с ❤️ для демонстрации возможностей современной веб-разработки**

[🔗 Live Demo](#) | [📚 Документация](docs/) | [🐛 Report Bug](#) | [💡 Request Feature](#)
