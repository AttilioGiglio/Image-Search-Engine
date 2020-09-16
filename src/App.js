import React, {useState, useEffect} from 'react';
import Form from './Components/Form';

function App() {

  const [state, setState] = useState('');
  



  useEffect(() => {
    const consultarAPI = async() => {
    if(state===''){return;}
    const imagenesPorPagina = 30;
    const key = '18335628-5fe134934f4963f0624958a12';
    const url = `https://pixabay.com/api/?key=${key}&q=${state}&per_page=${imagenesPorPagina}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()
    console.log(resultado.hits);
  }
  consultarAPI();
  }, [state])

  return (
    <div className="container">
      <div className='jumbotron'>
        <p className='lead text-center'>
          Buscador de imagenes
        </p>
        <Form 
        setState={setState}
        />
      </div>
    </div>
  );
}

export default App;
