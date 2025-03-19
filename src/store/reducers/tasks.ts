import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  items: Task[]
}

const initialState: TasksState = {
  items: [
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
      state.items = [
        ...(state.items = state.items.filter(
          (task) => task.id !== action.payload
        ))
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.items[taskIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskExist = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskExist) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.items[state.items.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.items.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.items[taskIndex].$status = action.payload.finished
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, register, changeStatus } = tasksSlice.actions

export default tasksSlice.reducer
