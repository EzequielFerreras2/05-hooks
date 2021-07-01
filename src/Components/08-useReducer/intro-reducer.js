const initialState=[{

    id:1,
    todo:'Comprar Hielo',
    done:false

}];

const todoReducer = (state =initialState, action ) =>{

    if (action?.type ==='agregar')
    {
       return[...state, action.payLoad] 
    }

    return state;

};


let todos = todoReducer( );



const newTodo=[{

    id:2,
    todo:'Comprar Refresco',
    done:false

}];



const action ={

    type:'agregar',
    payLoad:newTodo
}


todos =todoReducer(todos, action)

console.log(`todos`, todos)