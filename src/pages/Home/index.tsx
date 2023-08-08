import { Play } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  CauntdownContainer,
  StartCountdownButton,
  Separator,
  TaskInput,
  MinutesAmountInputs,
} from './styles'

// trabalhando com formulário no React a gente pode usar o modo controlled ou o modod uncontrolled.
// controlled -> a gente matem em tempo real a informação que o usuario insere na nossa aplicação dentro de um estado (
// detro de uma variavel no nosso componente), mudei alguma coisa do campo, atualizei o estado... fica monitorando o campo em tempo real.

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
            <option value="projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInputs
            placeholder="00"
            id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CauntdownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>

          <span>0</span>
          <span>0</span>
        </CauntdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
