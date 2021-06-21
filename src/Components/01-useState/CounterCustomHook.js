import React from 'react'
import { HookApp } from '../../HookApp';
import { useCounter } from '../../Hooks/useCounter'
import { CounterApp } from './CounterApp';

export const CounterCustomHook = () => {

const {state, increment ,decrement, reset} = useCounter(200);

    return (
        <>
        <div className='container'>

        <hr/>
            <h1>Counter Whit Hook: {state}</h1>
            <hr/>

            <div className='btn-group'>
                
                <button type="button" onClick={()=>increment(2)} className='btn btn-danger'>Custon +1</button>
                <button type="button" onClick={reset} className='btn btn-info'>Reset</button>
                <button type="button" onClick={()=>decrement()} className='btn btn-primary'>Custon -2</button>

            </div>

           

        </div>
          
            
        </>
    )
}
