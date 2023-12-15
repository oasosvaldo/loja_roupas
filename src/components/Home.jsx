import React from 'react'
import './Pages.css'
import imgJaquetaCouro from '../imgs/jaqueta_couro.jpg'
import imgMoletomFem from '../imgs/conjunto_moleton.jpg'
import imgCalcaJeansAzul from '../imgs/calça_jeans.jpg'
import imgBiquiniCroucheBege from '../imgs/biquine_crouche.jpg'

const Home = () => {
  return (
    <div className='Pag'>
      <h2>Bem vindo a nossa loja!</h2>
        <h3>Lançamentos</h3>
            <section className="produtos">
                <ul className="galeriaProdutos">
                    <li className="detalheProduto">
                        <h6>Jaqueta Couro</h6>
                        <li className="imgProduto"><img src={imgJaquetaCouro} alt="" /></li>
                        <li className="bodyProduto">Jaqueta em couro sintético masculina</li>
                        <li className="bodyProduto">Preço: R$ 320,00</li>
                    </li>
                </ul>
                <ul className="galeriaProdutos">
                    <li className="detalheProduto">
                        <li><h6>Conjunto Moletom</h6></li>
                        <li className="imgProduto"><img src={imgMoletomFem} alt="" /></li>
                        <li className="bodyProduto">Conjunto de moletom feminino</li>
                        <li className="bodyProduto">Preço: R$ 120,00</li>
                    </li>
                </ul>
                <ul className="galeriaProdutos">
                    <li className="detalheProduto">
                        <h6>Calça Jeans Azul</h6>
                        <li className="imgProduto"><img src={imgCalcaJeansAzul} alt="" /></li>
                        <li className="bodyProduto">Calça jeans azul feminina</li>
                        <li className="bodyProduto">Preço: R$ 140,00</li>
                    </li>
                </ul>
                <ul className="galeriaProdutos">
                    <li className="detalheProduto">
                        <h6>Biquine Crouche</h6>
                        <li className="imgProduto"><img src={imgBiquiniCroucheBege} alt="" /></li>
                        <li className="bodyProduto">Biquini em crouche bege</li>
                        <li className="bodyProduto">Preço: R$ 320,00</li>
                    </li>
                </ul>
            </section>
    </div>
  )
}

export default Home