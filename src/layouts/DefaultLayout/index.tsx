// É onde vai aparecer todos os outros componentes.
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Hedaer'
import { LayoutContainer } from './styles'

export function DefaultLauyout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
