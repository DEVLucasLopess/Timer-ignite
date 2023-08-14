import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  // quebra a aplicação quando a tela ficar muite estreita
  flex-wrap: wrap;
`

// Coisas em comum no mesmo componente
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
// Reaproveitando as coisas em comum e colocando as individualidades.
export const TaskInput = styled(BaseInput)`
  // é um atalho pra setar 3 propriedade flex flex-grow -> eu dou habilidade do compoente crescer alem to tamanho original dele
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
// Reaproveitando as coisas em comum e colocando as individualidades.
export const MinutesAmountInputs = styled(BaseInput)`
  width: 4rem;
`
