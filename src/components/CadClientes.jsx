import React from 'react'
import './Pages.css'
import './CadCleintes.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const CadClientes = () => {
  return (
    <div className='Pag'>
      <h2>Cadastre-se!</h2>
      <form className='register-form'>
        <div className='email'>
          <label htmlFor='email'>Email:</label>
          <input type="email" name='email' className='email' placeholder='Digite seu email' />
        </div>
        <div className='nome'>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' className='name' placeholder='Digite seu nome' />
          </div>
          <div>
            <label htmlFor="sobreNome">Sobrenome:</label>
            <input type="text" name='sobreNome' className='sobreNome' placeholder='Digite seu nome' />
          </div>
        </div>
        <div className='senha'>
          <div>
            <label htmlFor="password spacing">Senha:</label>
            <input type="password" name='password' className='password' placeholder='Digite sua senha' />
          </div>
          <div>
            <label htmlFor="passConfirme">Confimar senha:</label>
            <input type="password" name='passConfirme' className='passConfirme' placeholder='Digite seu nome' />
          </div>
        </div>
        <div className='checkbox'>
          <input type="checkbox" name='agreement' className='agreement' />
          <label htmlFor='agreement' className='agreement-label'>Eu li e aceito <Link>os termos!</Link></label>
        </div>
        <div className='btn'>
          <input type="submit" className='btn-submit' value="Registrar" />
        </div>
      </form>
      <p className='error-validation template'></p>
    </div>
  )
}

export default CadClientes