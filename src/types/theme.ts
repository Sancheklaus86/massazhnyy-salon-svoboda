export type Theme = 'dark' | 'light';

export interface ThemeColors {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  accent: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}
