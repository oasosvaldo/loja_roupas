import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header_Footer/Header';
import Footer from './Header_Footer/Footer';
import Home from './components/Home';
import Produtos from './components/Produtos';
import QuemSomos from './components/QuemSomos';
import Contato from './components/Contato';
import CadClientes from './components/CadClientes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/Produtos"><Produtos /></Route>
            <Route path="/QuemSomos"><QuemSomos /></Route>
            <Route path="/Contato"><Contato /></Route>
            <Route path="/CadClientes"><CadClientes /></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
