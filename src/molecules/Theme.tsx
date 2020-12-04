import React, { useState } from "react";
import { ColorDisplay } from "../components/ColorDisplay";
import { ThemeCard, ThemeCardHeader } from "../components/ThemeCard";

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
    <ThemeCard onClick={copy}>
      <ThemeCardHeader color={text}>
        {copying ? "Copied!" : name}
      </ThemeCardHeader>
      {[
        background,
        text,
        sidebarBackground,
        sidebarText,
        accent,
        accentText,
      ].map((color) => {
        return <ColorDisplay key={color} color={color} />;
      })}
    </ThemeCard>
  );
}
