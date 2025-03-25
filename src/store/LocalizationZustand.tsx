import { create } from "zustand";
import { persist } from "zustand/middleware";
import { I18n, Scope, TranslateOptions } from "i18n-js";
import th from "../translations/th.json";
import en from "../translations/en.json";

const i18n = new I18n({
  th,
  en,
});
i18n.enableFallback = true;

const defaultLocale = "th"; 

i18n.locale = defaultLocale;

interface LocalizationStore {
  locale: string;
  setLocale: (locale: string) => void;
  t: (scope: Scope, options?: TranslateOptions) => string;
}

const useLocalizationStore = persist<LocalizationStore>(
  (set) => ({
    locale: defaultLocale,
    setLocale: (locale: string) => {
      i18n.locale = locale;
      set({ locale });
    },
    t: (scope: Scope, options?: TranslateOptions) =>
      i18n.t(scope, { locale: i18n.locale, ...options }),
  }),
  { name: "Localization" }
);

export const useLocalization = create(useLocalizationStore);