import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Peter Doe",
    email: "peter@gmail.com",
    github: "perter"
  },
  {
    id: "2",
    name: "Yazman Luna",
    email: "yazmanito@gmail.com",
    github: "yazmanito"
  },
  {
    id: "3",
    name: "Martin Fernandez",
    email: "martin@gmail.com",
    github: "midudev"
  },
  {
    id: "4",
    name: "Eileen Luna",
    email: "eileen@gmail.com",
    github: "leo"
  },
];

export type UserId = string;

export interface User {
  name: string,
  email: string,
  github: string,
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  if(persistedState) {
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE
})();


export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id)
    }
  },
})

export default userSlice.reducer

export const { deleteUserById } = userSlice.actions