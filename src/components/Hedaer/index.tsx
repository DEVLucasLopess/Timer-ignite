import { HeaderContainer } from './styles'
import Logo from '../../../src/assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={Logo} alt="Logo do site - dois triangulos" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
