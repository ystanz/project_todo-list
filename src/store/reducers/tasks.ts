import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      title: 'Estudar JavaScript',
      $priority: enums.Priority.NORMAL,
      $status: enums.Status.CONCLUIDA,
      description: 'Estudar JavaScript revendo o exercício do módulo 7'
    },
    {
      id: 2,
      title: 'Estudar TypeScript',
      $priority: enums.Priority.NORMAL,
      $status: enums.Status.PENDENTE,
      description: 'Estudar Material de Apoio'
    },
    {
      id: 3,
      title: 'Estudar BootStrap',
      $priority: enums.Priority.IMPORTANTE,
      $status: enums.Status.PENDENTE,
      description: 'Praticar a construção de uma landing page'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions

export default tasksSlice.reducer
