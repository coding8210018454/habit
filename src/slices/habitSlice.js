import { createSlice } from '@reduxjs/toolkit'

export const details = [
  { day: 'Mon', status: 'none' },
  { day: 'Tue', status: 'none' },
  { day: 'Wed', status: 'none' },
  { day: 'Thu', status: 'none' },
  { day: 'Fri', status: 'none' },
  { day: 'Sat', status: 'none' },
  { day: 'Sun', status: 'none' },
]

const habitStorage = localStorage.getItem('newHabits')
  ? JSON.parse(localStorage.getItem('newHabits'))
  : [{ title: 'early bird', description: 'wake up at 4:00am', details }]

let habits = [...habitStorage]

const initialState = {
  habits: habits,
}


const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits = [...state.habits, action.payload]
      habits = [...habits, action.payload]
      window.localStorage.setItem('newHabits', JSON.stringify(habits))
    },
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter((habit) => habit.title !== action.payload)
      window.localStorage.setItem('newHabits', JSON.stringify(state.habits))
    },
    changeStatus: (state, action) => {
      state.habits.forEach((habit) => {
        if (habit.title === action.payload.title) {
          habit.details.forEach((detail) => {
            if (detail.day === action.payload.details[0].day) {
              detail.status = action.payload.details[0].status
            }
          })
        }
      })
      window.localStorage.setItem('newHabits', JSON.stringify(state.habits))
    },
  },
})

console.log(habitSlice)

export const { addHabit, deleteHabit, changeStatus } = habitSlice.actions

export default habitSlice.reducer