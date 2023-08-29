import { type UserId, deleteUserById, addNewUser, type User } from '../store/users/usersSlice'
import { useAppDispatch } from './store'

interface userActions {
  removeUser: (id: UserId) => void
  addUser: ({ name, email, github }: User) => void
}

export const useUsersActions = (): userActions => {
  const dispatch = useAppDispatch()

  const removeUser = (id: UserId): void => {
    dispatch(deleteUserById(id))
  }

  const addUser = ({ name, email, github }: User): void => {
    dispatch(addNewUser({ name, email, github }))
  }

  return { removeUser, addUser }
}
