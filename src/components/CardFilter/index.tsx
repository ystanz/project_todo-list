import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  caption: string
  triage: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ caption, triage, value }: Props) => {
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootReducer) => state.tasks)
  const filter = useSelector((state: RootReducer) => state.filter)

  const checkIsActive = () => {
    const sameTriage = filter.triage === triage
    const sameFilter = filter.value === value

    return sameFilter && sameTriage
  }

  const tasksCounter = () => {
    if (triage === 'todas') return tasks.items.length
    if (triage === 'prioridade') {
      return tasks.items.filter((item) => item.$priority === value).length
    }
    if (triage === 'status') {
      return tasks.items.filter((item) => item.$status === value).length
    }
  }

  const filtrate = () => {
    dispatch(
      changeFilter({
        triage,
        value
      })
    )
  }

  const counter = tasksCounter()
  const $active = checkIsActive()

  return (
    <S.Card $active={$active} onClick={filtrate}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{caption}</S.Label>
    </S.Card>
  )
}

export default CardFilter
