import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
// import * as enums from '../../utils/enums/Task'
import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ description, $priority, $status, title, id }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag $priority={$priority} $parameter="priority">
        {$priority}
      </S.Tag>
      <S.Tag $status={$status} $parameter="status">
        {$status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.RemoveCancelButton onClick={() => setIsEditing(false)}>
              Cancelar
            </S.RemoveCancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.RemoveCancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.RemoveCancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
