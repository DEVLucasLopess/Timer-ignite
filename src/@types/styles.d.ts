import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Ele está criando uma tipagem para o module styled-compenents
declare module 'styled-components' {
  export interface defaultTheme extends ThemeType {}
}
