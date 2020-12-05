import React, { useState } from "react";
import { ColorDisplay } from "../components/ColorDisplay";
import {
  ThemeCard,
  ThemeCardHeader,
  ThemeCardOverlay,
  ThemeCopiedLabel,
} from "../components/ThemeCard";

export function Theme({ theme }: { theme: [string, string] }) {
  const [copying, setCopying] = useState(false);
  const [name, colors] = theme;

  async function copy() {
    setCopying(true);
    await navigator.clipboard.writeText(colors);
    await new Promise((r) => setTimeout(r, 1500));
    setCopying(false);
  }

  const [
    background,
    text,
    sidebarBackground,
    sidebarText,
    accent,
    accentText,
  ] = colors.split(",");

  return (
    <ThemeCardOverlay>
      {copying && <ThemeCopiedLabel>✓ Copied!</ThemeCopiedLabel>}
      <ThemeCard onClick={copy} dimmed={copying}>
        <ThemeCardHeader>{name}</ThemeCardHeader>

        {[
          background,
          sidebarBackground,
          sidebarText,
          text,
          accentText,
          accent,
        ].map((color) => {
          return <ColorDisplay key={color} color={color} />;
        })}
      </ThemeCard>
    </ThemeCardOverlay>
  );
}
