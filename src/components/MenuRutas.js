import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/cine'>Cine</a>
          </li>
          <li>
            <a href='/musica'>Música</a>
          </li>
          <li>
            <a href='/collazt'>Collazt</a>
          </li>
          <li>
            <a href='/tablamultiplicar'>Tabla de Multiplicar</a>
          </li>
          <li>
            <a href='/tablamultiplicar2'>Tabla de Multiplicar 2 (desplegable)</a>
          </li>
          <li>
            <a href='/seleccionmultiple'>Seleccion Multiple Forms</a>
          </li>
        </ul>
      </div>
    )
  }
}
