import * as enums from '../utils/enums/Task'

class Task {
  title: string
  $priority: enums.Priority
  $status: enums.Status
  description: string
  id: number

  constructor(
    title: string,
    $priority: enums.Priority,
    $status: enums.Status,
    description: string,
    id: number
  ) {
    this.title = title
    this.$priority = $priority
    this.$status = $status
    this.description = description
    this.id = id
  }
}

export default Task
