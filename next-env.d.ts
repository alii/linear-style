/// <reference types="next" />
/// <reference types="next/types/global" />

import "styled-components";
import { Theme } from "./src/themes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
