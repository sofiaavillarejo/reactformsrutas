import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import Collazt from "./Collazt";
import TablaMultiplicar from "./TablaMultiplicar";
import TablaMultiplicar2 from "./TablaMultiplicar2";
import SeleccionMultiple from "./SeleccionMultiple";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            {/* aqui indicamos cada uno de los componentes que vamos a usar 
            Cuando este en esta rutav (path) -> muestra el component
            */}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cine" element={<Cine/>}></Route>
            <Route path="/musica" element={<Musica/>}></Route>
            <Route path="/collazt" element={<Collazt/>}></Route>
            <Route path="/tablamultiplicar" element={<TablaMultiplicar/>}></Route>
            <Route path="/tablamultiplicar2" element={<TablaMultiplicar2/>}></Route>
            <Route path="/seleccionmultiple" element={<SeleccionMultiple/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
