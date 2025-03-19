import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remove, edit, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { Button, SaveButton } from '../../styles'
import * as enums from '../../utils/enums/Task'

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

  function changeTaskStatus(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, finished: event.target.checked }))
  }
  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={$status === enums.Status.CONCLUIDA}
          onChange={changeTaskStatus}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
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
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
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
