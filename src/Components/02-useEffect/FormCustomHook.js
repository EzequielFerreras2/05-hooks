
import { useFrom } from '../../Hooks/useFrom';


export const FormCustomHook = () => {

const [formValues, handleInputChange] = useFrom({

    name:'',
    email:'',
    password:''

});

const {name , email, password} = formValues;

const handleSubmint =(e)=>{

    e.prevenDefault();

    console.log(formValues);
}


    return (
        <form onSubmit={handleSubmint}>
        

                <hr/>
                <h1>FormCustomHook </h1>
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

                <div className='form-group'>

                    <label className=''>Password</label>
                    <input

                        type="password"
                        name="password"
                        className='form-control'
                        placeholder='*********'
                        value={password}
                        onChange={handleInputChange}


                    />

                </div>

                <div className='form-group'>

                <button type='submit' className='btn btn-success'> Guardar</button>
                
                </div>
            

  
            
        </form>
    )
}
