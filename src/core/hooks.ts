import useSWR from "swr";
import { useState } from "react";

export function useLinearThemes(fallbackData?: Record<string, string>) {
  return useSWR<Record<string, string>>("/api/themes", { fallbackData });
}

export function useInputFilter<T>(predicate: (item: T, index: number, state: string) => boolean, items: T[] = []) {
  const [state, setState] = useState("");

  const filtered = state.trim() === "" ? items : items.filter((item, index) => predicate(item, index, state));

  return { state, setState, filtered };
}
