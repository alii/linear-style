export const themeNames = ["dark"] as const;

export type Theme = {
  colors: {
    background: string;
    text: string;
    lighterBackground: string;
  };
};

export const themes: Record<typeof themeNames[number], Theme> = {
  dark: {
    colors: {
      background: "#121212",
      text: "#cccccc",
      lighterBackground: "#1b1c1d",
    },
  },
};
