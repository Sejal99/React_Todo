import React from 'react'


 const TodoItem = ({todo , onDelete}) => { //we can write in the form of props or in the form of array-destructuring . Here we have written in the form of array-destructruing
  return (
    <div>
     <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick= {()=>{onDelete(todo)}}>Delete</button>
    </div>
    
  )
}

export default TodoItem
