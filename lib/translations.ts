import { Language } from "./store/uiStore";
import { UserRole } from "./store/profileStore";

export type Copy = {
  brand: string;
  themeLabel: string;
  light: string;
  dark: string;
  languageLabel: string;
  blogsHeading: string;
  profileTitle: string;
  editProfileTitle: string;
  avatar: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  age: string;
  role: string;
  unknown: string;
  save: string;
  editProfileCta: string;
  back: string;
  roles: Record<UserRole, string>;
};

const translations: Record<Language, Copy> = {
  ru: {
    brand: "Мой блог",
    themeLabel: "Тема",
    light: "светлая",
    dark: "тёмная",
    languageLabel: "Язык",
    blogsHeading: "Блог-посты",
    profileTitle: "Профиль",
    editProfileTitle: "Редактировать профиль",
    avatar: "Аватар (URL)",
    firstName: "Имя",
    lastName: "Фамилия",
    birthDate: "Дата рождения",
    age: "Возраст",
    role: "Роль",
    unknown: "Неизвестно",
    save: "Сохранить",
    editProfileCta: "Редактировать профиль",
    back: "Назад",
    roles: {
      student: "Студент",
      developer: "Разработчик",
      designer: "Дизайнер",
      manager: "Менеджер",
    },
  },
  en: {
    brand: "My blog",
    themeLabel: "Theme",
    light: "light",
    dark: "dark",
    languageLabel: "Language",
    blogsHeading: "Blog posts",
    profileTitle: "Profile",
    editProfileTitle: "Edit profile",
    avatar: "Avatar URL",
    firstName: "First name",
    lastName: "Last name",
    birthDate: "Birth date",
    age: "Age",
    role: "Role",
    unknown: "Unknown",
    save: "Save",
    editProfileCta: "Edit profile",
    back: "Back",
    roles: {
      student: "Student",
      developer: "Developer",
      designer: "Designer",
      manager: "Manager",
    },
  },
};

export function getCopy(language: Language): Copy {
  return translations[language];
}
