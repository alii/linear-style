import React, { useEffect, useRef } from "react";
import { ThemeCardGrid } from "../components/ThemeCard";
import { useInputFilter, useLinearThemes } from "../core/hooks";
import { Theme } from "../molecules/Theme";
import { getBrightness } from "../core/utils";
import { Title, Subtitle, LearnMore, Link } from "../components/Headers";
import { SearchInput, SearchLabel } from "../components/SearchInput";
import _themes from "../themes.json";

export default function Index() {
  const { data: themes } = useLinearThemes(_themes);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const focus = () => {
      inputRef?.current.focus();
    };

    document.addEventListener("keypress", focus);
    return () => document.removeEventListener("keypress", focus);
  }, []);

  const { state, setState, filtered } = useInputFilter((theme, i, s) => {
    const [name, colors] = theme;
    s = s.toLowerCase();

    if ("light".includes(s)) {
      const [background] = colors.split(",");
      return getBrightness(background) > 50;
    }

    if ("dark".includes(s)) {
      const [background] = colors.split(",");
      return getBrightness(background) < 50;
    }

    return (colors + name).toLowerCase().includes(s);
  }, Object.entries(themes));

  return (
    <div className="app">
      <Title>Linear Style</Title>
      <Subtitle>Click on a theme to copy it.</Subtitle>
      <LearnMore>
        Learn more <Link href="https://github.com/alii/linear-style/blob/main/README.md">here.</Link>
      </LearnMore>
      <SearchLabel>
        Tip: Search for "light" or "dark".
        <SearchInput
          type="text"
          value={state}
          onChange={e => setState(e.target.value)}
          placeholder={"Search for themes.."}
        />
      </SearchLabel>
      <ThemeCardGrid>
        {filtered.map(theme => {
          const [name] = theme;
          return <Theme key={name} theme={theme} />;
        })}
      </ThemeCardGrid>
    </div>
  );
}
