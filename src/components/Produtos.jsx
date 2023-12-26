import React from 'react'
import './Pages.css'
import './Produtos.css'
import imgJaquetaCouro from '../imgs/jaqueta_couro.jpg'
import imgMoletomFem from '../imgs/conjunto_moleton.jpg'
import imgCalcaJeansAzul from '../imgs/calça_jeans.jpg'
import imgBiquiniCroucheBege from '../imgs/biquine_crouche.jpg'

const Produtos = () => {
  return (
    <div className='Pag'>
        <h2>Conheça Nossos Produtos</h2>
            <section className="produtos">
                <ul className="galeriaProdutos">
                    <li className="detalheProduto">
                        <h6>Jaqueta Couro</h6>
                        <li className="imgProduto"><img className='imgAlign' src={imgJaquetaCouro} alt="" /></li>
                        <li className="bodyProduto">Jaqueta em couro sintético masculina</li>
                        <li className="bodyProduto">Preço: R$ 320,00</li>
                    </li>
                </ul>
                <ul className="galeriaProdutos">
                    <li className="detalheProduto">
                        <li><h6>Conjunto Moletom</h6></li>
                        <li className="imgProduto"><img className='imgAlign' src={imgMoletomFem} alt="" /></li>
                        <li className="bodyProduto">Conjunto de moletom feminino</li>
                        <li className="bodyProduto">Preço: R$ 120,00</li>
                    </li>
                </ul>
                <ul className="galeriaProdutos">
                    <li className="detalheProduto">
                        <h6>Calça Jeans Azul</h6>
                        <li className="imgProduto"><img className='imgAlign' src={imgCalcaJeansAzul} alt="" /></li>
                        <li className="bodyProduto">Calça jeans azul feminina</li>
                        <li className="bodyProduto">Preço: R$ 140,00</li>
                    </li>
                </ul>
                <ul className="galeriaProdutos">
                    <li className="detalheProduto">
                        <h6>Biquine Crouche</h6>
                        <li className="imgProduto"><img className='imgAlign' src={imgBiquiniCroucheBege} alt="" /></li>
                        <li className="bodyProduto">Biquini em crouche bege</li>
                        <li className="bodyProduto">Preço: R$ 320,00</li>
                    </li>
                </ul>
            </section>
    </div>
  )
}

export default Produtos