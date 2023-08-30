import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Play, HandPalm } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCycleForm } from './NewCycleForm'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Countdown } from './Countdown'

// typando o conteudo
type DataFormType = {
  task: string
  minutesAmount: number
}

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  // trabalhando com formulário no React a gente pode usar o modo controlled ou o modod uncontrolled.
  // "controlled" -> a gente matem em tempo real a informação que o usuario insere na nossa aplicação dentro de um estado (
  // detro de uma variavel no nosso componente), mudei alguma coisa do campo, atualizei o estado... fica monitorando o campo em tempo real.
  // sempre que atualizamos o estado ... provocamos uma nova renderezalção.

  // uncontrolled -> "Não controlado, que ue não monitoro as informações em tempo real", a gente busca a informação do input, somente quando precisarmos dela ... usando o famoso "onSubmit" -> onSubmit="handleSubimit".
  // Essa forma evita renderizações desnecessárias mas perde a praticidade do outro formulário.

  // Quando usar um e quando usar outro? "controlled": poucos dados e poucas informações "uncontrolled": quantidades massivas de dados e informações.
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(1)
      .max(
        60,
        'O ciclo precisa ser de no máximo 60 minutos e no minimo 5 minutos.',
      ),
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  // setando o react-hook-form pra uma constante
  const newCycleForm = useForm<DataFormType>({
    resolver: zodResolver(newCycleFormValidationSchema),
    // setando o valor pradrão.
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  // declarando as funções que vou usar no React-hook-Form
  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Pausar
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
        <div style={{ color: '#fff' }}>
          {errors.task && errors.task.message}
        </div>
        <div style={{ color: '#fff' }}>
          {errors.minutesAmount && errors.minutesAmount.message}
        </div>
      </form>
    </HomeContainer>
  )
}
