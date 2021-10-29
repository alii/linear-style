import "styled-components";
import { AppTheme } from "./src/core/app-themes";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
