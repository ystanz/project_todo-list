import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const tasksFilter = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;{term}&quot;</p>
      <ul>
        {tasksFilter().map((t) => (
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
    </Container>
  )
}

export default TasksList
