import { type UserId, deleteUserById, addNewUser, type User } from '../store/users/usersSlice'
import { useAppDispatch } from './store'

export const useUsersActions = () => {
  const dispatch = useAppDispatch()

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  const addUser = ({ name, email, github }: User) => {
    dispatch(addNewUser({ name, email, github }))
  }

  return { removeUser, addUser }
}
