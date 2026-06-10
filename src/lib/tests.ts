export type TestKind = "solid" | "pattern" | "motion";

export type DisplayTest = {
  id: string;
  name: string;
  hint: string;
  kind: TestKind;
  className?: string;
  color?: string;
  duration: number;
};

export const DISPLAY_TESTS: DisplayTest[] = [
  {
    id: "white",
    name: "Білий",
    hint: "Шукайте темні пікселі, плями та нерівномірну яскравість",
    kind: "solid",
    color: "#ffffff",
    duration: 1200,
  },
  {
    id: "black",
    name: "Чорний",
    hint: "У темному приміщенні перевірте засвіти та світлі пікселі",
    kind: "solid",
    color: "#000000",
    duration: 1800,
  },
  {
    id: "red",
    name: "Червоний",
    hint: "Шукайте пікселі іншого кольору",
    kind: "solid",
    color: "#ff0000",
    duration: 1100,
  },
  {
    id: "green",
    name: "Зелений",
    hint: "Шукайте пікселі іншого кольору",
    kind: "solid",
    color: "#00ff00",
    duration: 1100,
  },
  {
    id: "blue",
    name: "Синій",
    hint: "Шукайте пікселі іншого кольору",
    kind: "solid",
    color: "#0000ff",
    duration: 1100,
  },
  {
    id: "yellow",
    name: "Жовтий",
    hint: "Перевірте рівномірність кольору",
    kind: "solid",
    color: "#ffff00",
    duration: 900,
  },
  {
    id: "magenta",
    name: "Фіолетовий",
    hint: "Перевірте рівномірність кольору",
    kind: "solid",
    color: "#ff00ff",
    duration: 900,
  },
  {
    id: "cyan",
    name: "Бірюзовий",
    hint: "Перевірте рівномірність кольору",
    kind: "solid",
    color: "#00ffff",
    duration: 900,
  },
  {
    id: "gradient-h",
    name: "Горизонтальний градієнт",
    hint: "Переходи мають бути плавними, без смуг",
    kind: "pattern",
    className: "gradient-h",
    duration: 1400,
  },
  {
    id: "gradient-v",
    name: "Вертикальний градієнт",
    hint: "Переходи мають бути плавними, без смуг",
    kind: "pattern",
    className: "gradient-v",
    duration: 1400,
  },
  {
    id: "gradient-r",
    name: "Радіальний градієнт",
    hint: "Шукайте кільця та нерівномірність",
    kind: "pattern",
    className: "gradient-r",
    duration: 1400,
  },
  {
    id: "checker",
    name: "Шахівниця",
    hint: "Перевірте геометрію та залишкові артефакти",
    kind: "pattern",
    className: "checker",
    duration: 1400,
  },
  {
    id: "grid",
    name: "Сітка",
    hint: "Лінії мають бути прямими та рівними",
    kind: "pattern",
    className: "grid",
    duration: 1400,
  },
  {
    id: "contrast",
    name: "Контрастні пікселі",
    hint: "Шукайте мерехтіння та биті пікселі",
    kind: "pattern",
    className: "contrast",
    duration: 1400,
  },
  {
    id: "oled-rgb",
    name: "OLED RGB",
    hint: "Шукайте тіні від статичних елементів інтерфейсу",
    kind: "pattern",
    className: "oled-rgb",
    duration: 1500,
  },
  {
    id: "oled-gray",
    name: "OLED Gray",
    hint: "На сірому фоні найкраще видно вигорання",
    kind: "pattern",
    className: "oled-gray",
    duration: 1600,
  },
  {
    id: "banding-dark",
    name: "Dark gradient",
    hint: "Темний перехід має бути без сходинок",
    kind: "pattern",
    className: "banding-dark",
    duration: 1500,
  },
  {
    id: "banding-color",
    name: "Color gradient",
    hint: "Шукайте різкі смуги у кольорових переходах",
    kind: "pattern",
    className: "banding-color",
    duration: 1500,
  },
  {
    id: "motion",
    name: "Motion test",
    hint: "Стежте за ривками, шлейфом і ghosting",
    kind: "motion",
    duration: 2600,
  },
  {
    id: "motion-inverse",
    name: "Inverse motion",
    hint: "Шукайте темний шлейф за світлими об’єктами",
    kind: "motion",
    className: "inverse",
    duration: 2600,
  },
];

export const TOTAL_AUTO_DURATION = DISPLAY_TESTS.reduce((sum, test) => sum + test.duration, 0);
