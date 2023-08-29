import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import React, { useState } from 'react'
import { useUsersActions } from '../hooks/useUsersActions'

export const CreateNewUser: React.FC = () => {
  const { addUser } = useUsersActions()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    setResult(null)
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    // Para que esto funcione en el elemento html cada uno tiene que tener su nombre
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (!name || !email || !github) {
      setResult('ko'); return
    }

    addUser({ name, email, github })
    setResult('ok')

    form.reset()
  }

  return (
    <Card style={{ marginTop: '16px' }}>
      <Title>Create New User</Title>

      <form onSubmit={handleSubmit} className="">
        <TextInput name="name" placeholder="User name" />
        <TextInput name="email" placeholder="User mail" />
        <TextInput name="github" placeholder="Github user name" />

        <div>
          <Button type="submit" style={{ marginTop: '16px' }}>
            Crear Usuario
          </Button>
          <span>
            {result === 'ok' && <Badge color='green'>Guardado correctamente</Badge>}
            {result === 'ko' && <Badge color='red'>No se ha guardado correctamente</Badge>}
          </span>
        </div>
      </form>
    </Card>
  )
}

export default CreateNewUser
