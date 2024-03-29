import React from 'react'
import './Pages.css'
import './Home.css'
import img1 from '../imgs-slider/calca_fleir_azul_marinho_laço.jpg'
import img2 from '../imgs-slider/calca_fleir_azul_claro_desbotada.jpg'
import img3 from '../imgs-slider/calca_fleir_azul_marinho.jpg'

const Home = () => {

  

  return (
    <div className='Pag'>

      <h2>Bem vindo a nossa loja!</h2>
      <h3>Lançamentos</h3>
      <div className='Galeria'>

        <div className="slider">
          <img className='foco center' src={img1} alt="Imagem 1" />

          <img className='center' src={img2} alt="Imagem 2" />

          <img className='center' src={img3} alt="Imagem 3" />
        </div>
      </div>

    </div>
  )
}

export default Home