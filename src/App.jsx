import './styles.css'
import {useState} from 'react'

function App() {
  const [item, setItem] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit (e) {
    e.preventDefault()
    setTodos(
      [
        ...todos, 
        {id: crypto.randomUUID, title:item, completed: false}
      ]
    )
    setItem('')
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
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input value={item} onChange={e => setItem(e.target.value)} type="text" id="item" />
      </div>
      <button className='btn'>Add</button>
    </form>    
    <h1 className='header'>Todo list</h1>
    <ul className='list'>
      {
        todos.map(td => 
          <li key={td.id}>
            <label>
            <input 
            type='checkbox' 
            checked={td.completed}
            onChange={e => toggleTodo(td.id, e.target.checked)}
            />
            {td.title}
          </label>
          <button className='btn btn-danger' onClick={deleteTodo} >Delete</button>
          </li>
        )
      }
    </ul>
  </>
}

export default App
