import React, { Component } from "react";
import Botao from "./components/Botao";
import "./estilo.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      textoFrase: ''
    };

    this.frases = ['Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']
  }
  
  render(){
    return(
      <div className="container">
        <img src={ require('./assets/biscoito.png').default } alt="Biscoito" className="img"/>

        <Botao frases={this.state.frases} nome="Abrir Biscoito" texto={this.state.textoFrase} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>

      </div>
    );
  }
}

export default App;