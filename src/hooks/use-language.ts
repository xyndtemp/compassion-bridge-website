
import { create } from 'zustand';

type Language = {
  code: string;
  name: string;
  nativeName: string;
};

type LanguageState = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
};

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
];

export const useLanguage = create<LanguageState>((set) => ({
  currentLanguage: languages[0],
  setLanguage: (lang) => set({ currentLanguage: lang }),
}));

export { languages };
