import { CauntdownContainer, Separator } from './styles'
import { useEffect, useContext } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CycleContext } from '..'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CycleContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiference = differenceInSeconds(
          new Date(),
          activeCycle.startData,
        )

        if (secondsDiference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDiference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  // adicionando um zero na frente do numero caso não tenho 2 valores
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CauntdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>

      <Separator>:</Separator>

      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CauntdownContainer>
  )
}
