import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Assistir aula 3 da EBAC',
    priority: 'Importante',
    status: 'Pendente'
  },
  {
    title: 'Pagar conta de internet',
    description: 'Baixar fatura no Gmail',
    priority: 'Urgente',
    status: 'Concluída'
  },
  {
    title: 'Academia',
    description: 'Fazer treino B',
    priority: 'Importante',
    status: 'Pendente'
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
            priority={t.priority}
            status={t.status}
            description={t.description}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default TasksList
