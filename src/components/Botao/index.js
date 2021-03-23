import React, { Component } from "react";

class Botao extends Component {
    constructor(props){
        super(props);
        this.state = {};
        
        this.quebraBiscoito = this.quebraBiscoito.bind(this);

    }
    
    quebraBiscoito(){
        alert('QUEBROU');
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