import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar JavaScript',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Task(
      'Estudar TypeScript',
      enums.Priority.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do módulo',
      2
    ),
    new Task(
      'Estudar React',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      'Praticar useEffect',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions

export default tasksSlice.reducer
