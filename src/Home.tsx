// PASSO 1 -> declarar o Hook
import { createContext, useContext, useState } from 'react'

// PASSO 2 -> criei o contexto e guardei a informação
const CycleContext = createContext({} as any)

// componente 1
function NewCycleForm() {
  // PASSO 5 -> declarei uma const para pegar meu valor dentro do contexto
  // nesse caso eu apenas estou listando os itens, se eu quero alterar os itens é outra forma.
  const { activeCycle, setActiveCycle } = useContext(CycleContext)

  return (
    <div>
      <h1>NewCycleForm: {activeCycle}</h1>
      {/* PASSO 6 -> manipula os dados usando o estado do componente pai */}
      <button onClick={() => setActiveCycle(3)}>
        Alterar o valor do contexto
      </button>
    </div>
  )
}
// componente 2
function Countdown() {
  const { activeCycle } = useContext(CycleContext)

  return (
    <div>
      <h1>Countdown: {activeCycle} </h1>
    </div>
  )
}

export function Home() {
  // PASSO 3 -> Declarando o contexto e envolvendo-o ao torno de todos os componentes declarando eles com o "Provider"
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <div>
      {/* PASSO 4 -> enviar por value as informações que eu quero que seja compartilhadas entre todos componentes dentro do provider... "via objeto" */}
      <CycleContext.Provider value={{ activeCycle, setActiveCycle }}>
        <Countdown />
        <NewCycleForm />
      </CycleContext.Provider>
    </div>
  )
}
