import React from 'react'
import './App.css'
import CreateNewUser from './users/components/CreateNewUser'
import { ListOfUsers } from './users/components/ListOfUser'
import { Toaster } from 'sonner'

const App: React.FC = () => {
  return (
    <>
      <CreateNewUser />
      <ListOfUsers />
      <Toaster richColors />
    </>
  )
}

export default App
