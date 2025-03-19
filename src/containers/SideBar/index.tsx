import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { Button, Field } from '../../styles'

type Props = {
  displayFilters: boolean
}

const SideBar = ({ displayFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {displayFilters ? (
          <>
            <Field
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(event) => dispatch(changeTerm(event.target.value))}
            />
            <S.Filters>
              <CardFilter
                value={enums.Status.PENDENTE}
                triage="status"
                caption="pendentes"
              />
              <CardFilter
                value={enums.Status.CONCLUIDA}
                triage="status"
                caption="concluídas"
              />
              <CardFilter
                value={enums.Priority.URGENTE}
                triage="prioridade"
                caption="urgentes"
              />
              <CardFilter
                value={enums.Priority.IMPORTANTE}
                triage="prioridade"
                caption="importantes"
              />
              <CardFilter
                value={enums.Priority.NORMAL}
                triage="prioridade"
                caption="normal"
              />
              <CardFilter triage="todas" caption="todas" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')} type="button">
            Voltar a Lista de Tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
