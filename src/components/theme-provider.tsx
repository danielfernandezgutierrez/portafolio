// src/components/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { I18nextProvider } from 'react-i18next';
import i18next from '@/lib/i18n';

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <I18nextProvider i18n={i18next}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </I18nextProvider>
  );
}