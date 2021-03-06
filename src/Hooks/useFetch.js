import { useState,useEffect, useRef } from "react";

export const useFetch = (url) => {

    //para evitar error al momento de montar el componente
    const isMounted =useRef(true);

    const [state, setState] = useState({data:null,loading:true,error:null})
  
    //para evitar error al momento de montar el componente
    useEffect(() => {
       return ()=>{

        isMounted.current=false;

       }
        
    }, [])

    useEffect(() => {
        
        setState({data:null,loading:true,error:null})

        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            if(isMounted.current)
            {
                setState({
                    loading:false,
                    error:null,
                    data
                })
    
            }
            
            
        })
      
    }, [url]);

    return state;
};
