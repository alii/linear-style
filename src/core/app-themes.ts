export const appThemeNames = ["dark"] as const;

export type AppTheme = {
  colors: {
    background: string;
    text: string;
    alternateBackground: string;
    accent: string;
    inputBackground: string;
  };
};

export const appTheme: AppTheme = {
  colors: {
    background: "var(--bg)",
    text: "var(--text)",
    alternateBackground: "var(--alt-bg)",
    accent: "var(--accent)",
    inputBackground: "var(--input-bg)",
  },
};
