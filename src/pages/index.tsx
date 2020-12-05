import { ThemeCardGrid } from "../components/ThemeCard";
import { useInputFilter, useLinearThemes } from "../core/hooks";
import { Theme } from "../molecules/Theme";

export default function Index() {
  const { data: themes } = useLinearThemes();

  const entries = Object.entries(themes ?? {});

  const { state, setState, filtered } = useInputFilter((theme, i, s) => {
    const [name] = theme;
    return s.includes(name);
  }, entries);

  if (!themes)
    return (
      <div className="app">
        <h1 className={"title"}>Loading</h1>
        <span className="subtitle">Fetching the latest themes</span>
      </div>
    );

  return (
    <div className="app">
      <h1 className="title">Linear Style</h1>
      <span className="subtitle">Click on a theme to copy it.</span>
      <ThemeCardGrid>
        {entries.map((theme) => {
          return <Theme theme={theme} />;
        })}
      </ThemeCardGrid>
    </div>
  );
}
