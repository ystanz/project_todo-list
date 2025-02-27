import Task from '../../components/Task'
import { Container } from './styles'

const TasksList = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </Container>
)

export default TasksList
