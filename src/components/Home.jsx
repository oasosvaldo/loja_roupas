import React from 'react'
import './Pages.css'
import './Home.css'
import img1 from '../imgs-slider/calca_fleir_azul_marinho_laço.jpg'
import img2 from '../imgs-slider/calca_fleir_azul_claro_desbotada.jpg'
import img3 from '../imgs-slider/calca_fleir_azul_marinho.jpg'
import img4 from '../imgs-slider/calca_fleir_azul_marinho2.jpg'

const Home = () => {

    const box = document.querySelector(".container")
    const imagens = document.querySelectorAll(".container img")

    let contador = 0

    function slider() {
        contador++

        if (contador > imagens.length - 1) {
            contador = 0
        }

        box.style.transform = `translateX(${-contador * 700}px)`

    }

    setInterval(slider, 2000)

    return (
    <div className='Pag'>
      <h2>Bem vindo a nossa loja!</h2>
        <h3>Lançamentos</h3>
            <div className="carrossel">
                <div className="container">
                    <img className='img-carrossel' src={img1} alt="Calça Flair" />
                    <img className='img-carrossel' src={img2} alt="Calça Flair" />
                    <img className='img-carrossel' src={img3} alt="Calça Flair" />
                    <img className='img-carrossel' src={img4} alt="Calça Flair" />
                </div>
            </div>
    </div>
  )
}

export default Home