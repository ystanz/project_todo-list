import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { SaveButton } from '../../styles'

type Props = TaskClass

const Task = ({
  description: originalDescription,
  $priority,
  $status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEditing() {
    setIsEditing(false)
    setDescription(originalDescription)
  }
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag $priority={$priority} $parameter="priority">
        {$priority}
      </S.Tag>
      <S.Tag $status={$status} $parameter="status">
        {$status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    $priority,
                    $status,
                    title,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.RemoveCancelButton onClick={cancelEditing}>
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
