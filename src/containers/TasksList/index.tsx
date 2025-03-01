import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Assistir aula 3 da EBAC',
    $priority: enums.Priority.IMPORTANTE,
    $status: enums.Status.PENDENTE
  },
  {
    title: 'Pagar conta de internet',
    description: 'Baixar fatura no Gmail',
    $priority: enums.Priority.URGENTE,
    $status: enums.Status.CONCLUIDA
  },
  {
    title: 'Academia',
    description: 'Fazer treino B',
    $priority: enums.Priority.IMPORTANTE,
    $status: enums.Status.PENDENTE
  }
]
const TasksList = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
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

export default TasksList
