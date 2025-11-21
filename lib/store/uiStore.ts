import { create } from 'zustand';

export type Theme = 'light' | 'dark';
export type Language = 'ru' | 'en';

type UIState = {
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLanguage: (language: Language) => void;
};

export const useUIStore = create<UIState>((set) => ({
  theme: 'light',
  language: 'ru',
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
  setLanguage: (language) => set({ language }),
}));
