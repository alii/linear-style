export const appThemeNames = ["dark"] as const;

export type AppTheme = {
  colors: {
    background: string;
    text: string;
    lighterBackground: string;
  };
};

export const appThemes: Record<typeof appThemeNames[number], AppTheme> = {
  dark: {
    colors: {
      background: "#121212",
      text: "#cccccc",
      lighterBackground: "#1b1c1d",
    },
  },
};
