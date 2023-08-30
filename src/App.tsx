import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

// Esse cara é configurado para que o Router funciona na devida forma.
import { BrowserRouter } from 'react-router-dom'

// Arquivo global para acessar os Themas.
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
