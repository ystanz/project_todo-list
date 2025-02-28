import { useState } from 'react'
import * as S from './style'
import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ description, priority, status, title }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag priority={priority} parameter="priority">
        {priority}
      </S.Tag>
      <S.Tag status={status} parameter="status">
        {status}
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
            <S.RemoveCancelButton>Remover</S.RemoveCancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
