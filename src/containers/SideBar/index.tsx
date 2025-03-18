import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <CardFilter counter={1} caption="pendentes" />
          <CardFilter counter={2} caption="concluídas" />
          <CardFilter counter={3} caption="urgentes" />
          <CardFilter counter={4} caption="importantes" />
          <CardFilter counter={5} caption="normal" />
          <CardFilter counter={10} caption="todas" $active />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
