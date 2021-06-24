import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleFocus = () => {

const [show, setShow] = useState(false)


    return (
        <div className='container'>
            <h1>Real Example</h1>
            <hr/>


        {show && <MultipleCustomHooks/>}
      
        <button
        className='btn btn-danger mt-3'
        onClick={ ()=>{

            setShow(!show)

        } }> Mostras Ocultar</button>


        </div>
    )
}
