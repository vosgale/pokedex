import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
    };
    gradients: {
      fire: string;
      water: string;
      nature: string;
      ghost: string;
      darkness: string;
    };
  }
}
