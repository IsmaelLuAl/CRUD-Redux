import { type Middleware, configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/usersSlice'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  // Aquí se ejecuta el código antes de que se actualice el estado
  next(action)
  // Aquí se ejecuta el código despues de actualizar el estado
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
