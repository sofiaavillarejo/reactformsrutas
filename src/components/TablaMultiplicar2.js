import React, { Component } from 'react'

export default class  extends Component {
    desplegableNumeros = React.createRef();
    //esto habria que cambiarlo a que sea un random y genere solo los numeros del option
    optionsNum = [1,2,3,4,5,6,7,8,9,10];
    state = {
        numero: null,
        listaNumeros: []
    }

    generarMultiplicacion = (e) => {
        e.preventDefault();
        console.log("petición lista");
        var num = parseInt(e.target.value);
        console.log("AQUIII" + num);
        var secuencia = []
        
        this.setState({
            numero: num
        })

        for (let i = 0; i <=10; i++) {
            let multiplicacion = num * i;
            console.log(num)
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
            <h1>Tabla multiplicar con desplegable</h1>
            <select onChange={this.generarMultiplicacion}>
                {this.optionsNum.map((num, index) => (
                    <option key={index} ref={this.desplegableNumeros} value={num}>{num}</option>
                ))}
            </select>
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