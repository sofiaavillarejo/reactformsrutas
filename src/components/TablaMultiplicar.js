import React, { Component } from 'react'

export default class  extends Component {
    cajaNumero = React.createRef();
    state = {
        numero: null,
        listaNumeros: []
    }

    generarMultiplicacion = (e) => {
        e.preventDefault();
        console.log("petición lista");
        var num = parseInt(this.cajaNumero.current.value);
        console.log(num);
        var secuencia = []
        this.setState({
            numero: num
        })
        for (let i = 0; i <=10; i++) {
            let multiplicacion = num * i;
            //console.log(i)
            //console.log(multiplicacion);
            secuencia.push(multiplicacion);
        }
        this.setState({
            listaNumeros: secuencia 
        })
    }

    render() {
    return (
        <div>
            <h1>Tabla multiplicar</h1>
            <form onSubmit={this.generarMultiplicacion}>{/*Si en vez del onSubmit pongo un onCLick con lo mismo en el btn, hace lo mismo  */}
                <label>Introduce un número: </label>
                <input type='text' ref={this.cajaNumero} />
                <button>Calcular</button> {/* <button onClick={this.generarMultiplicacion}>Calcular</button>}*/}
            </form>
            {
                this.state.numero && (
                <h3>El numero es: {this.state.numero}</h3>
            )
            }
            <br/>
            <table border="3" style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th>Multiplicación</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>  
                    {this.state.listaNumeros.map((num, index) => (
                        <tr>
                            <td key={index}>{this.state.numero} * {index}</td>
                            <td>{num}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        )
    }
}

/* 
todo: CORRECION DEL PROFE USANDO OBJETOS

import React, { Component } from 'react'
export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();
    state = {
        tabla: []
    }
    mostrarTabla = (e) => {
        e.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        console.log(numero);
        var aux=[];
        for (var i = 1; i <= 10; i++)
        {
            let dato = {
                operacion: numero + " * " + i,
                resultado: (numero * i)
            }
            aux.push(dato);
        }
        this.setState({
            tabla: aux
        })
    }
  render() {
    return (
    <div>
        <h1>TablaMultiplicar</h1>
        <form>
            <label>Introduzca número</label>
            <input type="text" ref={this.cajaNumero}/>
            <button onClick={this.mostrarTabla}>
                Tabla multiplicar
            </button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.tabla.map((fila, index) => {
                       return ( <tr key={index}>
                            <td>{fila.operacion}</td>
                            <td>{fila.resultado}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
    )
  }
}

todo: usando dibujos
<tbody>
    {this.state.tabla} -> tambien se puede pintar asi la otra version que ha hecho
</tbody>

*/