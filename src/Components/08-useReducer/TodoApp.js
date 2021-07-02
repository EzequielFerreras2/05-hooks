import React, { useEffect, useReducer } from 'react'
import { useFrom } from '../../Hooks/useFrom';
import { todoReducer } from './todoReducer';
import './estilos.css';
import { TodosList } from './TodosList';

//Define el stado inicial del reducer.
const init = () =>{

    // toma los todos del local estorage si nulll regresa un arreglo vacio.
    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id:new Date().getTime(),
    //     desc:'Aprender React',
    //     done:false
    
    // }];
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


    //elimina un todo    
    const handleDelete =( todoId ) =>{

        const action ={

            type:'delete',
            payload:todoId

        }
        dispatch(action);

    };


    const handleToggle =(todoid) =>{

        dispatch({
            type:'toggle',
            payload:todoid
        });
    }


    //funcion que reliza el cambio del formulario cuando es completado
    const handleSubmit =(e)=>{

        e.preventDefault();

        //evita que se introduscan datos vacios al formulario.
        if( description.trim().length <=1 ){
            return;
        }


        //se define el nuevo todo que se va imponer en el reducer
        const newTodo= {
            id:new Date().getTime(),
            desc: description,
            done:false
        
        };

         //se le pone la accion que se va relizar del reducer
        const action={

            type:'add',
            payload:newTodo
        }

        // envia la accion al reducer indicando cual va a realizar por ejemplo Add
        dispatch(action);

        //recetea el cambo de 
        reset();

    };

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>

                <div className='row'>

                    <div className='col-7'>

                               <TodosList 
                               todos={ todos}
                               handleDelete ={handleDelete }
                               handleToggle ={handleToggle }
                               />
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
                                             <button  className="btn btn-success mt-2" type="submit">Agregar</button>
                                        </div>

                                </form>
                        

                    </div>

                </div>
        </div>
    )
}
