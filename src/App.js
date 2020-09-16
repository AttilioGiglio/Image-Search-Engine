import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import ImageList from './Components/ImageList';


function App() {

  const [state, setState] = useState('');
  const [images, setImage] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(5);


  useEffect(() => {
    const consultarAPI = async () => {
      if (state === '') { return; }
      const imagenesPorPagina = 10;
      const key = '18335628-5fe134934f4963f0624958a12';
      const url = `https://pixabay.com/api/?key=${key}&q=${state}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      setImage(resultado.hits);
      // calcular total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      setTotalPaginas(calcularTotalPaginas);
      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth'})
    }
    consultarAPI();
  }, [state, paginaActual])


  const paginaAnterior = () =>{
    const nuevaPaginaActual = paginaActual - 1;
    if(nuevaPaginaActual === 0){return;}
    setPaginaActual(nuevaPaginaActual)
  }

  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaActual + 1;
    if(nuevaPaginaActual > totalPaginas){return;}
    setPaginaActual(nuevaPaginaActual)
  }


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
      <div className='row justify-content-center'>
        <ImageList
          images={images}
        />
      </div>
      {(paginaActual===1 ? null : 
      <button
        type='button'
        className='bbtn btn-info mr-1'
        onClick={paginaAnterior}
      >
        &laquo; Anterior
      </button>)}
      {(paginaActual===totalPaginas)? null :
       <button
       type='button'
       className='bbtn btn-info mr-1'
       onClick={paginaSiguiente}
     >
       Siguiente &raquo;
     </button>
      }
    </div>
  );
}

export default App;
