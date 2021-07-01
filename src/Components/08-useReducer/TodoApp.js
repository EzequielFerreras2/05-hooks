import React, { useEffect, useReducer } from 'react'
import { useFrom } from '../../Hooks/useFrom';
import { todoReducer } from './todoReducer';


const init = () =>{

    return [{
        id:new Date().getTime(),
        desc:'Aprender React',
        done:false
    
    }];
};



export const TodoApp = () => {


    //aplicamos los useREdurce
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    //usamos el hooks useFrom para manipular el formulario
    const [{description}, handleInputChange, reset] = useFrom({

        description:''

    })

    //si ocurre algun cambio en los todos se disparara esta funcion para guardar en el local storage.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [todos])


    //funcion que reliza el cambio del formulario cuando es completado
    const handleSubmit =(e)=>{

        e.preventDefault();

        //evita que se introduscan datos vacios al formulario.
        if( description.trim().length <=1 ){
            return;
        }


        const newTodo= {
            id:new Date().getTime(),
            desc: description,
            done:false
        
        };

        const action={

            type:'add',
            payload:newTodo
        }


        dispatch(action);
        reset();

    };

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>

                <div className='row'>

                    <div className='col-7'>

                                <ul className='list-group list-group-flush'>
                                {
                                    todos.map((todo,i) =>(
                                        <li
                                        key={todo.id}
                                        className='list-group-item'
                                        >

                                        <div className='col align-self-center'>
                                                {i + 1}. {todo.desc}....
                                        </div>
                                        

                                        <div className=' col offset-10'>

                                            <button  className='btn btn-danger'>
                                                Borrar
                                            </button> 

                                        </div>
                                      
                                        </li>
                                        
                                    ))
                                }
                                </ul>
                    </div>


                    <div className='col-4'>
                                <h4>Agregar Todos</h4>
                                <hr/>

                                <form onSubmit={handleSubmit}>

                                    <input
                                    
                                    type='text'
                                    name='description'
                                    className='form-control'
                                    placeholder='Aprender...'
                                    autoComplete='off'
                                    value={description}
                                    onChange={handleInputChange}
                                                    />

                                                    
                                        <div className="d-grid gap-2">
                                             <button className="btn btn-success mt-2" type="submit">Agregar</button>
                                        </div>

                                </form>
                        

                    </div>

                </div>
        </div>
    )
}
