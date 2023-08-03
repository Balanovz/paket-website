import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import './styles.css'
import {useState, useEffect} from 'react'

function App() {
  const [todos, setTodos] = useState(() =>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(
          [
            ...todos, 
            {id: crypto.randomUUID(), title, completed: false}
          ]
        )
  }

  function toggleTodo(id, completed) {
    setTodos(todos => {
      return todos.map(todo => todo.id === id ? {...todo, completed} : todo)
    })
  }

  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return <>  
    <TodoForm onSubmit={addTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
  </>
}

export default App
