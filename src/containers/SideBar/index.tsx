import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Buscar" />
      <S.Filters>
        <CardFilter active={false} />
        <CardFilter active={false} />
        <CardFilter active={false} />
        <CardFilter active={false} />
        <CardFilter active={false} />
        <CardFilter active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default SideBar
