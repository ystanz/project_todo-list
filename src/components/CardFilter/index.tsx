import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  caption: string
}

const CardFilter = ({ active, counter, caption }: Props) => (
  <S.Card active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{caption}</S.Label>
  </S.Card>
)

export default CardFilter
