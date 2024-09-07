import { create } from 'zustand';

type ThemeStore = {
  dark: boolean;
  switchMode: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  dark: localStorage.getItem('theme-mode') === 'dark',
  switchMode: () =>
    set((state) => {
      localStorage.setItem('theme-mode', !state.dark ? 'dark' : 'light');
      return { dark: !state.dark };
    }),
}));
