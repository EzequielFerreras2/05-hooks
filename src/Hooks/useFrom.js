import { useState } from "react"


export const useFrom = (initialState ={}) => {
    
const [values, setValue] = useState(initialState)


const handleInputChange = ({target})=>{


    setValue({

        ...values,
        [ target.name ] : target.value
    });
   
};

return[values, handleInputChange]

}
