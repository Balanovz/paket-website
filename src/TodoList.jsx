/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem"

export const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    return (
        <>
            <h1 className='header'>Todo list</h1>
            <ul className='list'>
            {todos.length === 0 && "No todos"}
            {
                todos.map(todo => 
                <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                )
            }
            </ul>
        </>
    )
}