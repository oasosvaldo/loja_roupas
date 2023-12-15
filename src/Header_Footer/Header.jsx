import React from 'react'
import './Header.css'
import Menu from '../components/Menu'

const Header = () => {
  return (
    <div className='Header'>
      <div className='formLogin'>
        <label>LOGIN</label>
        <div className='contentForm'>
          <label>NOME: <input className='nomeLogin' type="text" /></label>
          <label>SENHA: <input className='senhaLogin' type="password" /></label>
          <button className='bntLogin'>OK</button>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default Header