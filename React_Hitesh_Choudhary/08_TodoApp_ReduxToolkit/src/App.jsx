import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [editingTodo, setEditingTodo] = useState(null)

  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo
        editingTodo={editingTodo}
        onEditingChange={setEditingTodo}
      />
      <Todos onEdit={setEditingTodo} />
    </>
  )
}

export default App
