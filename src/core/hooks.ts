import useSWR from "swr";

export function useLinearThemes() {
  return useSWR<Record<string, string>>("/api/themes");
}
