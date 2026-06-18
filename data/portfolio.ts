export const profile = {
  name: "Максим Ефимов",
  role: "Software Developer",
  specialization: "React, Next.js, TypeScript",
  location: "Электросталь, Московская область",
  workMode: "Remote / full-time / project work",
  summary: "Разрабатываю современные веб-интерфейсы и production-ready продукты: от архитектуры и UI до интеграций, CI/CD и запуска на сервере.",
  about: [
    "Я веб-разработчик с опытом в React-экосистеме и практикой полного цикла: проектирование интерфейса, разработка, интеграция API, оптимизация производительности, деплой и сопровождение.",
    "В проектах беру на себя не только компонентную разработку, но и продуктовую ясность: структуру экранов, UX-сценарии, надежность форм, состояние приложения и понятную архитектуру.",
    "Сейчас усиливаю fullstack-профиль: работал с Payload, PostgreSQL, Docker, GitHub Actions, пробовал NestJS и активно развиваюсь в Go.",
  ],
  contacts: [
    { label: "Email", value: "maksim.e@mail.ru", href: "mailto:maksim.e@mail.ru" },
    { label: "Telegram", value: "@yahontovyy", href: "https://t.me/yahontovyy" },
    { label: "GitHub", value: "MaksimAndreevich", href: "https://github.com/MaksimAndreevich" },
    { label: "Phone", value: "+7 929 663-26-67", href: "tel:+79296632667" },
  ],
};

export const metrics = [
  { value: "4y 2m", label: "commercial experience" },
  { value: "4+", label: "production projects" },
  { value: "Full-cycle", label: "delivery to production" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS", "SCSS", "MUI", "Redux", "MobX"],
  },
  {
    title: "Product UI",
    items: ["Adaptive layouts", "Design systems", "Forms", "Validation", "Tables", "Code editors", "Real-time UX"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Next API Routes", "Payload CMS", "PostgreSQL", "Go", "Gin", "REST API", "Socket.io"],
  },
  {
    title: "Delivery",
    items: ["Docker", "Docker Compose", "GitHub Actions", "S3", "Backups", "SEO", "Yandex Metrica", "Git"],
  },
];

export const experience = [
  {
    company: "Агрохимик",
    role: "Fullstack-разработчик",
    period: "Feb 2026 — May 2026",
    location: "Remote / agrohimik.by",
    summary: "Развивал интернет-магазин на Payload + Next.js: архитектура, PostgreSQL, S3, Docker Compose, CI/CD, SEO и runbook.",
    highlights: [
      "Настроил S3 для медиа и pgbackup/pgrestore, чтобы данные не зависели от локального диска.",
      "Расширил ecommerce-логику Payload: кастомные поля, валидация валюты и инвентаря, синхронизация остатков.",
      "Собрал GitHub Actions pipeline с кэшированием слоев, преддеплойным backup и workflow для ручного/еженедельного восстановления.",
    ],
  },
  {
    company: "QTalents",
    role: "React Developer",
    period: "Feb 2022 — Nov 2025",
    location: "Greece / code.qtalents.co",
    summary:
      "Разработка платформы для технических интервью: личный кабинет, совместный редактор кода, видеоинтервью, чат, запуск кода и Telegram bot matching.",
    highlights: [
      "Внедрял новые UI-компоненты, рефакторил legacy-код и улучшал UX ключевых сценариев интервью.",
      "Разработал fullscreen-режим, переключение языка редактора, авторизацию, проверку audio/video permissions.",
      "Добавил чат, вывод результата выполнения кода, адаптивные вертикальные панели, hotkeys и индикацию качества связи.",
    ],
  },
  {
    company: "Rayt Solutions",
    role: "Software Developer",
    period: "Sep 2025",
    location: "Moscow / rayt-solutions.ru",
    summary: "Коммерческий корпоративный сайт на Next.js 15, React 19 и TypeScript: дизайн, формы, анимации, SEO, аналитика и Docker deploy.",
    highlights: [
      "Собрал модульную компонентную архитектуру, SSR/SSG, структурированные данные, sitemap и локальное SEO.",
      "Реализовал формы на Formik + Yup, отправку заявок через API Routes, Nodemailer и Telegram Bot API.",
      "Подключил Яндекс.Метрику, webvisor и fallback-обработку ошибок заявок.",
    ],
  },
  {
    company: "SCDB",
    role: "Fullstack Developer",
    period: "Mar 2025 — Aug 2025",
    location: "Moscow / scdb-landing-001e.twc1.net",
    summary: "Система управления данными образовательных учреждений РФ: Go API, PostgreSQL, Next.js UI, парсинг XML 1+ ГБ и demo-режим.",
    highlights: [
      "Спроектировал микросервисную архитектуру с REST API на Gin, rate limiting и repository pattern.",
      "Реализовал batch-вставку данных, нормализованную схему PostgreSQL и индексы для поиска/фильтрации.",
      "Настроил Docker Compose, demo-образы, ESLint, Prettier, Conventional Commits, Husky и lint-staged.",
    ],
  },
];

export const projects = [
  {
    title: "Agrohimik ecommerce",
    type: "Full-cycle commerce platform",
    href: "https://agrohimik.by",
    stack: ["Payload", "Next.js", "PostgreSQL", "S3", "Docker", "GitHub Actions"],
    description: "Интернет-магазин с кастомной ecommerce-логикой, role-protected endpoints, облачными backups и production deploy.",
  },
  {
    title: "QTalents interview platform",
    type: "Collaborative coding product",
    href: "https://code.qtalents.co",
    stack: ["React", "Real-time UI", "Video", "Code runner", "Telegram Bot"],
    description: "Интерфейсы для live coding interviews: редактор, чат, permissions, hotkeys, fullscreen, output и качество связи.",
  },
  {
    title: "SCDB",
    type: "Data platform",
    href: "http://scdb-landing-001e.twc1.net",
    stack: ["Go", "Gin", "Next.js", "PostgreSQL", "Docker", "MUI"],
    description: "Платформа поиска и анализа образовательных учреждений РФ с обработкой больших XML-файлов и demo-режимом.",
  },
  {
    title: "Rayt Solutions",
    type: "Corporate website",
    href: "https://rayt-solutions.ru",
    stack: ["Next.js 15", "React 19", "TypeScript", "SCSS", "Formik", "Yup"],
    description: "Конверсионный корпоративный сайт с формами, SEO, аналитикой, Docker deploy и аккуратной модульной архитектурой.",
  },
];

export const achievements = [
  "Выводил новые продукты в production в сжатые сроки: от архитектуры до deploy и документации.",
  "Работал с надежностью данных: S3-хранилище, backup/restore workflow, Dockerized deployments.",
  "Проектировал сложные интерфейсы для интервью: real-time editor, video, chat, hotkeys и permissions.",
  "Строил data-heavy систему с Go API, PostgreSQL и обработкой XML-файлов объемом 1+ ГБ.",
  "Освоил способность быстро адаптироваться и переключаться на новые технологии.",
  "Приоритет — желание заказчика и скорость: выполнял задачи в условиях сжатых сроков без потери качества.",
];
