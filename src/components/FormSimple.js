import React, { Component } from 'react'

export default class FormSimple extends Component {
  //necesitamos declarar variables de referencia
  //para cada control dentro de react
  cajaNombre = React.createRef();//creamos la referencia
  cajaEdad = React.createRef();

  //para pintar los datos que escriba el usuario
  state = {
    user: null
  }

  //para procesar la peticion necesitamos un metood que reciba 
  //Event (e)
  peticionForm = (e) => {
    //la primera linea siempre va a ser detener la propagacion del evento (submit)
    e.preventDefault();
    console.log("peticion lista");
    var nombre = this.cajaNombre.current.value //cojo el nombre que haya introducido en el input el usuario
    var edad = parseInt(this.cajaEdad.current.value) //cojo la edad
    this.setState({
      //creamos un objeto pasandole los datos cogidos del input
      user: {
        nombre: nombre,
        edad: edad
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Formulario simple React</h1>
        {/* condicional if -> si user tiene valores, pinto */}
        {
          this.state.user && (<h2 style={{color:"blue"}}>Nombre: {this.state.user.nombre}, Edad: {this.state.user.edad}</h2>)
        }
        <form onSubmit={this.peticionForm}>
          <label>Nombre: </label>
          <input type='text' ref={this.cajaNombre} /><br/>
          <label>Edad: </label>
          <input type='text' ref={this.cajaEdad}/>
          <button>Enviar datos</button>
        </form>
      </div>
    )
  }
}
