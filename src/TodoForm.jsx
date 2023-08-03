/* eslint-disable react/prop-types */
import {useState} from 'react'


export const TodoForm = ({ onSubmit }) => {
    const [item, setItem] = useState('')

    function handleSubmit (e) {
        e.preventDefault()
        if(item === '') return
        onSubmit(item)
        setItem('')
      }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input value={item} onChange={e => setItem(e.target.value)} type="text" id="item" />
        </div>
        <button className='btn'>Add</button>
      </form>  
    )
}