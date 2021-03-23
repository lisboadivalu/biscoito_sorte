import React, { Component } from "react";

class Botao extends Component {
    constructor(props){
        super(props);
        this.state = {};
        
        this.quebraBiscoito = this.quebraBiscoito.bind(this);

    }
    
    quebraBiscoito(){
        //alert('QUEBROU');
        let state = this.props.state;
        let numeroAleatorio = Math.floor(Math.random() * this.props.frases.length);
        state.numeroAleatorio = this.frases[numeroAleatorio];
        this.setState(state);

    }

    render(){
        return(
            <div>
                <button onClick={ this.quebraBiscoito }>{this.props.nome}</button>
            </div>
        );
    }
}

export default Botao;