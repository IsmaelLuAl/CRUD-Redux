import React from 'react'
import './App.css'
import CreateNewUser from './users/components/CreateNewUser'
import { ListOfUsers } from './users/components/ListOfUser'

function App() {
  return (
    <>
      <CreateNewUser />
      <ListOfUsers />
    </>
  )
}

export default App
