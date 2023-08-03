// eslint-disable-next-line react/prop-types
export const TodoItem = ({id, completed, title, toggleTodo, deleteTodo}) => {
    return (
        <li key={id}>
            <label data-checked={completed}>
                <input 
                type='checkbox' 
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button className='btn btn-danger' onClick={() => deleteTodo(id)} >Delete</button>
        </li>
    )
}