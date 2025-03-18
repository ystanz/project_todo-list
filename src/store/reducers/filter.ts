import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'
type FilterState = {
  term?: string
  triage: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  triage: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.triage = action.payload.triage
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = filterSlice.actions
export default filterSlice.reducer
