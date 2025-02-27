import * as S from './style'

const Task = () => (
  <S.Card>
    <S.Title>Nome da Tarefa</S.Title>
    <S.Tag>Importante</S.Tag>
    <S.Tag>Pendente</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Button>Editar</S.Button>
      <S.Button>Remover</S.Button>
    </S.ActionBar>
  </S.Card>
)

export default Task
