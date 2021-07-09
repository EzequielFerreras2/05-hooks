import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {


    const {user, setUser} = useContext(UserContext)

const handleUser = () => {

    setUser(  {
            id:11111,
            name:'ezequiel',
            apelllido:'Ferreras'
        
    });


    console.log(user)
    

                          };


    return (
        <div className='container'>
            <h1>LoginScreen</h1>
            <hr/>
            <button 
            className='btn btn-success'
            onClick={()=> handleUser()}
            >
                Login
            </button>
        </div>
    )
}
