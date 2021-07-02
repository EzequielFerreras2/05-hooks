import React from 'react'

export const TodosListItem = ( {todo, index, handleToggle, handleDelete}) => {
    return (

        <li
                key={todo.id}
                className='list-group-item'
                >
                <div className='col align-self-center'>
                       <p className={`${todo.done && 'complete' }`} onClick={()=>handleToggle(todo.id)}> {index + 1}. {todo.desc}....</p>
                </div>
                

                <div className=' col offset-10'>

                    <button onClick={() => handleDelete(todo.id) } className='btn btn-danger'>
                        Borrar
                    </button> 

                </div>
              
                </li>
    )
}
