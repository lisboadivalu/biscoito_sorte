import React, { Component } from "react";
import "./estilo.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      textoFrase: ''
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']
  }
  
  quebrarBiscoito(){    
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={ require('./assets/biscoito.png').default } alt="Biscoito" className="img"/>

        <Botao frases={this.state.frases} nome="Abrir Biscoito" acaoBtn={this.quebrarBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>

      </div>
    );
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>Quebrar Biscoito</button>
      </div>
    );
  }
}


export default App;