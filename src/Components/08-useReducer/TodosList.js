import { TodosListItem } from "./TodosListItem"

export const TodosList = ( {todos, handleDelete, handleToggle}) => {
    return (
        <ul className='list-group list-group-flush'>
        {
            todos.map((todo,i) =>(
                
                <TodosListItem
                
                todo ={todo}
                index ={i}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                
                />
                
            ))
        }
        </ul>
    )
}
