import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Buscar" />
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

export default SideBar
