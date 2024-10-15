import React, { Component } from 'react'

export default class Collazt extends Component {
    cajaNumero = React.createRef();

    state = {
        numero: null,
        listaNumeros: []
    }

    peticionForm = (e) => {
        e.preventDefault();
        console.log("peticion lista");
        var numero = parseInt(this.cajaNumero.current.value);
        this.setState({
            numero: numero
        })
        console.log(numero);
        //llamo al metodo pasandole el numero cogido del input
        this.collazt(numero);
    }
    //recibe el  numero del input del usuario
    collazt = (numero) => {
        var secuenciaNumeros = [];

        while ( numero !== 1){
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = (numero * 3) + 1;
            }
            //añado al array  
            secuenciaNumeros.push(numero);
        }

        console.log(secuenciaNumeros);
        //actualizo el state de listaNumeros con los numeros guardados en el array secuenciaNumeros
        this.setState({
            listaNumeros: secuenciaNumeros
        })
    }

  render() {
    return (
      <div>
        <h1>Conjetura de Collazt</h1>
        <form onSubmit={this.peticionForm}>
          <label>Introduce un número: </label>
          <input type='text' ref={this.cajaNumero}></input><br/>
          <button>Enviar</button>
        </form>
        {
            this.state.numero && (
            <h3>El numero es: {this.state.numero}</h3>
        )
        }
        <ul>
          {/* para dibujar los numeros, es necesairo mapearlos para recorrer el array */}
            {this.state.listaNumeros.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>
      </div>
    )
  }
}
