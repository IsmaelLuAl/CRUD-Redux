import { UserId, deleteUserById } from "../store/users/usersSlice";
import { useAppDispatch } from "./store";

export const useUsersActions = () => {
  const dispatch = useAppDispatch();

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  }

  return { removeUser }
}
