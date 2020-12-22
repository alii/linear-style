export const appThemeNames = ["dark", "light"] as const;

export type AppTheme = {
  colors: {
    background: string;
    text: string;
    alternateBackground: string;
    accent: string;
    inputBackground: string;
  };
};

export const appThemes: Record<typeof appThemeNames[number], AppTheme> = {
  dark: {
    colors: {
      background: "#121212",
      text: "#cccccc",
      alternateBackground: "#1b1c1d",
      accent: "#848CD0",
      inputBackground: "#171717",
    },
  },
  light: {
    colors: {
      background: "#F7F7F7",
      text: "#2f2f2f",
      alternateBackground: "#DDDDDD",
      accent: "#848CD0",
      inputBackground: "#ffffff",
    },
  },
};
