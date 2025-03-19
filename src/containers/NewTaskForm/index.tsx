import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Title, Field, SaveButton } from '../../styles'
import { Form, Options, Option } from './styles'
import * as enums from '../../utils/enums/Task'

import { register } from '../../store/reducers/tasks'

const NewTaskForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [$priority, setPriority] = useState(enums.Priority.NORMAL)

  const taskRegister = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      register({
        title,
        $priority,
        description,
        $status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <Form onSubmit={taskRegister}>
        <Field
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <Field
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="prioridade"
                type="radio"
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default NewTaskForm
