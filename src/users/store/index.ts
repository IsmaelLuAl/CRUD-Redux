import { type Middleware, configureStore } from '@reduxjs/toolkit'
import usersReducer, { type UserWithId, rollBackUser, type UserId } from './users/usersSlice'
import { toast } from 'sonner'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  // Aquí se ejecuta el código antes de que se actualice el estado
  next(action)
  // Aquí se ejecuta el código despues de actualizar el estado
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

const syncWithDataBase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  const previousState = store.getState()

  /// /////
  next(action)
  /// /////

  if (type === 'users/deleteUserById') { // <- Eliminando un usuario
    const userIdToRemove = payload
    const userToRemove: UserWithId = previousState.users.find((user: { id: UserId }) => user.id === userIdToRemove)

    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
      method: 'DELETE'
    })
      .then(() => {
        // Esto fuerza el error en el .then del fetch con lo cual podemos simular el rollback
        throw new Error('Error al eliminar el usuario')
      })
      .catch(err => {
        toast.error(`Error deleting user ${userIdToRemove}`)
        if (userToRemove) {
          store.dispatch(rollBackUser(userToRemove))
        }
        console.log(err)
      })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDataBase]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
