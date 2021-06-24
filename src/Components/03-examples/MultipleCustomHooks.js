import React from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { useCounter } from '../../Hooks/useCounter'

export const MultipleCustomHooks = () => {


 const { counter, increment, decrement}= useCounter(1);

        const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        //console.log(state);
        

    
        const { author ,quote} =!! data && data[0];




    return (
        <div className='container'>

            <h1>Frases Breaking bad</h1>
            <hr/>

            {
                loading 

                ?

                (
                    <div className='alert alert-info text-center'> 

                    Loading..

                    </div>

                ) 

                :
                (
                    <div>

                            <figure className="text-end">
                                    <blockquote className="blockquote">
                                        <p>{author}</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        {quote}
                                    </figcaption>
                            </figure>

                            <div className=' text-end btn-group '>

                            <button onClick={decrement} className='btn btn-primary'>
                                    Atras
                            </button>

                            <button onClick={increment} className='btn btn-primary'>
                                Siguiente
                            </button>

                            </div>
                            

                    </div>
                    
                   

                )
            }
        
            

            
        </div>
    )
}
