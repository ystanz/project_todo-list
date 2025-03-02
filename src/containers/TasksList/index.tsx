import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)

  return (
    <Container>
      <p>2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
      <ul>
        {itens.map((t) => (
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
