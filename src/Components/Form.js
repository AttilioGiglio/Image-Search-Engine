import React, { useState } from 'react'
import Error from './Error';

const Form = () => {

    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    const searchImage = e => {
        e.preventDefault();
        // Validar
        if (search.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
    }

    return (
        <form onSubmit={searchImage}>
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Busca una imagen, ejemplo: futbol o cafe'
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className='form-group col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar'
                    />
                </div>
            </div>
            {error ? <Error mensaje='Agrega un termino de busqueda, porfavor' /> : null}
        </form>
    )
}

export default Form
