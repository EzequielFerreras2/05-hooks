import React, { useRef } from 'react'

export const FocusScreen = () => {
    
    const inputRef = useRef();


    const handleClick= ( ) =>{

        document.querySelector('input').select();
    };
    
    
    
    return (
        <div className='container'>
            <h1>Focus Screen</h1>
            <hr/>

            <input
            ref={inputRef}
            className='form-control'
            placeholder='Sunombre'

            />

            <button onClick={handleClick} className='btn btn-success mt-2'> Focus </button>
        </div>
    )
}
