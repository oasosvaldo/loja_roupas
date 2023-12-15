import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/quemSomos">Quem Somos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/cadClientes">Cadastro</Link></li>
            </ul>
        </div>
    )
}

export default Menu