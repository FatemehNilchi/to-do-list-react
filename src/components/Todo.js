import React from 'react'
import trash from '../icons/trash.png'
import ediit from '../icons/edit.png'
export const Todo = ({task , toggleComplete, deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed' :"" }`}>{task.task}</p>
      <div> <img src={ediit} className='fa-edit' onClick={()=> editTodo(task.id)} ></img>
        <img src={trash} className='fa-trash' onClick={()=> deleteTodo(task.id)} ></img>
        
        
      </div>
    </div>
  )
}
