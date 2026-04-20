const CATEGORIES = [
  { id: "aluminum", name: "АЛЮМИНИЕВЫЙ ДИВИЗИОН", emoji: "🏭", color: "#FF9800" },
  { id: "alumina", name: "ГЛИНОЗЁМНЫЙ ДИВИЗИОН", emoji: "⛏️", color: "#4CAF50" },
  { id: "downstream", name: "ДАУНСТРИМ", emoji: "📦", color: "#2196F3" },
  { id: "central", name: "ЦЕНТРАЛЬНАЯ КОМПАНИЯ", emoji: "🏢", color: "#9C27B0" }
];

const KEY_PROJECTS = [
  {
    id: "energy",
    icon: "⚡",
    title: "ЭНЕРГОЭФФЕКТИВНОСТЬ",
    customer: "Русал Энерго",
    object: "Все площадки",
    description: "ИИ-система оптимизации потребления электроэнергии на основе прогнозирования нагрузки и динамического ценообразования.",
    current_situation: "Ручное планирование энергопотребления без учета прогнозов цен на рынке.",
    effect: "10 млн USD/год",
    status: "🟡 В РАБОТЕ",
    progress: 65,
    next_step: "Внедрение на 3 площадках"
  },
  {
    id: "digital-plant",
    icon: "🏭",
    title: "ЦИФРОВОЙ ЗАВОД",
    customer: "Русал Технологии",
    object: "САЗ, КРАЗ",
    description: "Интеллектуальная система управления сверхсложным производством с 50 000+ параметров контроля.",
    current_situation: "Разрозненные системы контроля, ручной анализ данных.",
    effect: "Оптимизация цепочки",
    status: "🟡 В РАЗРАБОТКЕ",
    progress: 40,
    next_step: "MVP пилот"
  },
  {
    id: "toro",
    icon: "🔧",
    title: "ЦИФРОВОЕ ТОРО",
    customer: "Русал Технологии",
    object: "Все площадки",
    description: "Предиктивная система обслуживания оборудования на основе анализа вибрации, тепловизии и ИИ-моделей.",
    current_situation: "Плановое ТО по графику, аварийные остановки.",
    effect: "13 млн USD/год",
    status: "🟢 ЗАВЕРШЕН",
    progress: 100,
    next_step: "Масштабирование"
  },
  {
    id: "alverse",
    icon: "🌐",
    title: "ALVERSE",
    customer: "Русал",
    object: "Глобально",
    description: "Цифровой двойник производства алюминия с полной симуляцией процессов и прогнозированием качества.",
    current_situation: "Отсутствует единая модель производства.",
    effect: "+100 млн USD/год",
    status: "🟡 В РАЗРАБОТКЕ",
    progress: 25,
    next_step: "Сбор данных"
  }
];

const ORDER1_PROJECTS = [
  {
    id: 20,
    icon: "⚙️",
    title: "СНИЖЕНИЕ ПОТРЕБЛЕНИЯ ЭНЕРГОРЕСУРСОВ (МАЗУТ)",
    customer: "ЩЕРБАКОВ Е.А. / САЗ",
    object: "ПЕЧЬ СУШКИ КОКСА",
    description: "ИИ-система управляет процессом подачи мазута в печь сушки кокса на основании онлайн данных влагомера кокса с конвейерной линии.",
    current_situation: "РАЗ В СМЕНУ ОПЕРАТОРЫ ЗАМЕРЯЮТ ВЛАГУ И ВЫСТАВЛЯЮТ ПАРАМЕТРЫ РАБОТЫ ПЕЧИ. ВЛАЖНОСТЬ КОКСА МОЖЕТ ИЗМЕНЯТЬСЯ НЕСКОЛЬКО РАЗ В ТЕЧЕНИЕ СМЕНЫ.",
    effect: 8,
    effect_currency: "млн руб/год",
    category_id: "aluminum",
    category_name: "АЛЮМИНИЕВЫЙ ДИВИЗИОН",
    category_emoji: "🏭",
    status: "🟡 ОСНАЩЕНИЕ ВЛАГОМЕРОМ",
    progress: 75,
    next_step: "РАЗРАБОТКА СВЯЗКИ ВЛАГОМЕРА И ПЕЧИ СУШКИ"
  },
  {
    id: 21,
    icon: "🚚",
    title: "ОПТИМИЗАЦИЯ ЛОГИСТИКИ АД",
    customer: "АД (5 заводов)",
    object: "5 заводов АД",
    description: "Оптимизация логистических процессов с использованием алгоритмов машинного обучения. Интеграция с существующими системами ERP.",
    current_situation: "Ручное планирование маршрутов, простои транспорта.",
    effect: 295,
    effect_currency: "млн руб/год",
    category_id: "aluminum",
    category_name: "АЛЮМИНИЕВЫЙ ДИВИЗИОН",
    category_emoji: "🏭",
    status: "🟡 В РАБОТЕ",
    progress: 20,
    next_step: "MVP апрель 2027"
  },
  {
    id: 22,
    icon: "⚖️",
    title: "ЦИФРОВАЯ ВЕСОВАЯ",
    customer: "КРАЗ, ТААЗ",
    object: "Красноярск, Тайшет",
    description: "Внедрение цифровой системы взвешивания с интеграцией ИИ для контроля качества и автоматической регистрации.",
    current_situation: "Ручное взвешивание, бумажные журналы.",
    effect: 4.5,
    effect_currency: "млн руб/год",
    category_id: "aluminum",
    category_name: "АЛЮМИНИЕВЫЙ ДИВИЗИОН",
    category_emoji: "🏭",
    status: "🟡 В РАБОТЕ",
    progress: 15,
    next_step: "MVP 2026"
  },
  {
    id: 23,
    icon: "📹",
    title: "ВгАЗ. КОНТРОЛЬ ПРОСТЕНКОВ",
    customer: "ВгАЗ",
    object: "Волгоград",
    description: "Система компьютерного зрения для контроля качества простенков. Автоматическое выявление дефектов и отклонений.",
    current_situation: "Визуальный осмотр операторами.",
    effect: 0,
    effect_currency: "",
    category_id: "aluminum",
    category_name: "АЛЮМИНИЕВЫЙ ДИВИЗИОН",
    category_emoji: "🏭",
    status: "🟡 В РАБОТЕ",
    progress: 10,
    next_step: "Разработка модели"
  },
  {
    id: 24,
    icon: "🔍",
    title: "ТАФ. КОНТРОЛЬ НИППЕЛЬНЫХ ГНЕЗД",
    customer: "ТАФ",
    object: "Татарстан",
    description: "Автоматизированный контроль ниппельных гнёзд с использованием нейросетевого анализа изображений.",
    current_situation: "Ручной контроль, высокий процент брака.",
    effect: 0,
    effect_currency: "",
    category_id: "aluminum",
    category_name: "АЛЮМИНИЕВЫЙ ДИВИЗИОН",
    category_emoji: "🏭",
    status: "🟡 В РАБОТЕ",
    progress: 5,
    next_step: "Пилот"
  },
  {
    id: 25,
    icon: "📊",
    title: "ПЛАНИРОВАНИЕ ПОСТАВОК ГЛИНОЗЁМА",
    customer: "АГК",
    object: "Ачинск",
    description: "Система прогнозирования и оптимизации поставок глинозёма на основе машинного обучения.",
    current_situation: "Ручное планирование, избыток/дефицит запасов.",
    effect: 0,
    effect_currency: "",
    category_id: "alumina",
    category_name: "ГЛИНОЗЁМНЫЙ ДИВИЗИОН",
    category_emoji: "⛏️",
    status: "🟡 В РАБОТЕ",
    progress: 10,
    next_step: "Сбор данных"
  },
  {
    id: 19,
    icon: "🏗️",
    title: "КРАМЗ. ЦИФРОВОЙ ПРЕСС",
    customer: "КРАМЗ",
    object: "Красноярск",
    description: "Система технологических подсказок для операторов пресса на основе анализа данных и лучших практик.",
    current_situation: "Операторы работают по интуиции, нет обратной связи.",
    effect: 105,
    effect_currency: "млн руб/год",
    category_id: "downstream",
    category_name: "ДАУНСТРИМ",
    category_emoji: "📦",
    status: "🟢 ЗАВЕРШЕН",
    progress: 100,
    next_step: "В эксплуатации"
  },
  {
    id: 26,
    icon: "📳",
    title: "САЯНАЛ. ВИБРОДИАГНОСТИКА",
    customer: "САЯНАЛ",
    object: "Саяногорск",
    description: "Система вибродиагностики оборудования с прогнозированием отказов и планированием ТОиР.",
    current_situation: "Плановое ТО, аварийные остановки.",
    effect: 0,
    effect_currency: "",
    category_id: "downstream",
    category_name: "ДАУНСТРИМ",
    category_emoji: "📦",
    status: "🟡 В РАБОТЕ",
    progress: 60,
    next_step: "Тестирование"
  },
  {
    id: 27,
    icon: "📅",
    title: "САЯНАЛ. ОПТИМИЗАТОР ПЛАНИРОВАНИЯ",
    customer: "САЯНАЛ",
    object: "Саяногорск",
    description: "Оптимизация планирования производства с использованием ИИ для учёта множества переменных.",
    current_situation: "Excel-таблицы, ручное планирование.",
    effect: 0,
    effect_currency: "",
    category_id: "downstream",
    category_name: "ДАУНСТРИМ",
    category_emoji: "📦",
    status: "🟡 В РАБОТЕ",
    progress: 75,
    next_step: "Внедрение"
  },
  {
    id: 28,
    icon: "🌡️",
    title: "СКАД. ОПТИМИЗАТОР ЛИТЬЯ",
    customer: "СКАД",
    object: "Саяногорск",
    description: "Оптимизация параметров литья с использованием ИИ для снижения брака и повышения качества.",
    current_situation: "Ручная настройка параметров, высокий брак.",
    effect: 0,
    effect_currency: "",
    category_id: "downstream",
    category_name: "ДАУНСТРИМ",
    category_emoji: "📦",
    status: "🟡 В РАБОТЕ",
    progress: 40,
    next_step: "Пилот"
  },
  {
    id: 29,
    icon: "🤖",
    title: "AI PLATFORM",
    customer: "Русал",
    object: "Москва",
    description: "Корпоративная платформа ИИ с инструментами для разработки и внедрения ML-моделей.",
    current_situation: "Разрозненные разработки, нет стандартов.",
    effect: 0,
    effect_currency: "",
    category_id: "central",
    category_name: "ЦЕНТРАЛЬНАЯ КОМПАНИЯ",
    category_emoji: "🏢",
    status: "🟡 В РАБОТЕ",
    progress: 25,
    next_step: "Разработка архитектуры"
  },
  {
    id: 30,
    icon: "💾",
    title: "DATALAKE",
    customer: "Русал",
    object: "Москва",
    description: "Единый datalake для сбора и обработки производственных данных со всех площадок.",
    current_situation: "Данные в изолированных системах.",
    effect: 0,
    effect_currency: "",
    category_id: "central",
    category_name: "ЦЕНТРАЛЬНАЯ КОМПАНИЯ",
    category_emoji: "🏢",
    status: "🟡 В РАБОТЕ",
    progress: 45,
    next_step: "Миграция данных"
  },
  {
    id: 31,
    icon: "🚪",
    title: "ЦИФРОВАЯ ПРОХОДНАЯ",
    customer: "Русал",
    object: "Все площадки",
    description: "Система цифровой идентификации сотрудников и посетителей с контролем доступа.",
    current_situation: "Пропуска, охрана, журналы.",
    effect: 0,
    effect_currency: "",
    category_id: "central",
    category_name: "ЦЕНТРАЛЬНАЯ КОМПАНИЯ",
    category_emoji: "🏢",
    status: "🟡 В РАБОТЕ",
    progress: 30,
    next_step: "Пилот на САЗ"
  },
  {
    id: 32,
    icon: "⏰",
    title: "УЧЁТ РАБОЧЕГО ВРЕМЕНИ",
    customer: "Русал",
    object: "Все площадки",
    description: "Автоматизированная система учёта рабочего времени с интеграцией СКУД.",
    current_situation: "Табели, ручной учёт.",
    effect: 0,
    effect_currency: "",
    category_id: "central",
    category_name: "ЦЕНТРАЛЬНАЯ КОМПАНИЯ",
    category_emoji: "🏢",
    status: "🟡 В РАБОТЕ",
    progress: 15,
    next_step: "Сбор требований"
  }
];

// ВСЕ проекты (более полный список)
const ALL_PROJECTS = [
  ...ORDER1_PROJECTS,
  {
    id: 33,
    icon: "🔥",
    title: "ОПТИМИЗАЦИЯ ГОРЕНИЯ",
    customer: "САЗ",
    object: "Саяногорск",
    description: "ИИ-контроль процесса горения в печах снижает потребление газа и повышает качество продукции.",
    current_situation: "Операторы управляют вручную по приборам.",
    effect: 12,
    effect_currency: "млн руб/год",
    category_id: "aluminum",
    category_name: "АЛЮМИНИЕВЫЙ ДИВИЗИОН",
    category_emoji: "🏭",
    status: "🟡 В РАБОТЕ",
    progress: 50,
    next_step: "Тестирование модели"
  },
  {
    id: 34,
    icon: "🧪",
    title: "КОНТРОЛЬ КАЧЕСТВА АЛЮМИНИЯ",
    customer: "КРАЗ",
    object: "Красноярск",
    description: "Автоматизированная система контроля качества алюминия с использованием компьютерного зрения.",
    current_situation: "Визуальный осмотр, ручная проверка.",
    effect: 18,
    effect_currency: "млн руб/год",
    category_id: "aluminum",
    category_name: "АЛЮМИНИЕВЫЙ ДИВИЗИОН",
    category_emoji: "🏭",
    status: "🟡 В РАБОТЕ",
    progress: 35,
    next_step: "Пилот"
  },
  {
    id: 35,
    icon: "🌊",
    title: "ОЧИСТКА ВОДЫ",
    customer: "АГК",
    object: "Ачинск",
    description: "Оптимизация процессов очистки воды с использованием ИИ для снижения потребления реагентов.",
    current_situation: "Ручная регулировка, избыточный расход реагентов.",
    effect: 6,
    effect_currency: "млн руб/год",
    category_id: "alumina",
    category_name: "ГЛИНОЗЁМНЫЙ ДИВИЗИОН",
    category_emoji: "⛏️",
    status: "🟡 В РАБОТЕ",
    progress: 20,
    next_step: "MVP"
  }
];

function getOrder1ProjectsByCategory(categoryId) {
  return ORDER1_PROJECTS.filter(p => p.category_id === categoryId);
}

function getAllProjectsByCategory(categoryId) {
  return ALL_PROJECTS.filter(p => p.category_id === categoryId);
}

function getProjectById(id) {
  return ALL_PROJECTS.find(p => p.id === id) || ORDER1_PROJECTS.find(p => p.id === id);
}

function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id);
}

function calculateTotalEffect(projects) {
  return projects.reduce((sum, p) => sum + (p.effect || 0), 0);
}

function formatEffect(value, currency) {
  if (!value || value === 0) return "—";
  return `${value} ${currency || ""}`;
}
