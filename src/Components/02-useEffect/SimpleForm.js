import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

const [formState, setFormState] = useState({

    name:'',
    email:''

});

const {name , email} = formState;

useEffect(()=>{

    console.log('hey');
},[]);


useEffect(()=>{

    console.log('Cambio Form star');
},[formState]);



useEffect(()=>{

    console.log('Cambio email');
},[email]);



const handleInputChange = ({target})=>{


    setFormState({

        ...formState,
        [ target.name ] : target.value
    });
   
};



    return (
        <>
            <div className='container'>

                <hr/>
                <h1>UseEffect</h1>
                <hr/>

                <div className='form-group'>

                    <label className=''>Nombre</label>
                    <input
                    
                        type="text"
                        name="name"
                        className='form-control'
                        placeholder='Nombre'
                        autoComplete='off'
                        value={name}
                        onChange={handleInputChange}

                    
                    />

                </div>

                <div className='form-group'>

                    <label className=''>Email</label>
                    <input
                    
                        type="text"
                        name="email"
                        className='form-control'
                        placeholder='Email'
                        autoComplete='off'
                        value={email}
                        onChange={handleInputChange}

                    
                    />

                </div>
                
            </div>
            
        </>
    )
}
