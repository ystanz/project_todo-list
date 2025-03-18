import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, triage, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const tasksFilter = () => {
    let filteredTasks = itens
    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (triage === 'prioridade') {
        filteredTasks = filteredTasks.filter((item) => item.$priority === value)
      } else if (triage === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.$status === value)
      }

      return filteredTasks
    } else {
      return itens
    }
  }

  const displaysFilteringResult = (amount: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (triage === 'todas') {
      message = `${amount} tarefa(s) encontrada(s) como: todas ${complement}`
    } else {
      message = `${amount} tarefa(s) encontrada(s) como: "${`${triage}=${value}`}" ${complement}`
    }
    return message
  }

  const tasks = tasksFilter()
  const message = displaysFilteringResult(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              title={t.title}
              $priority={t.$priority}
              $status={t.$status}
              description={t.description}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default TasksList
