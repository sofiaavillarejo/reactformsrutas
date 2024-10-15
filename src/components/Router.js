import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";

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
        </Routes>
      </BrowserRouter>
    )
  }
}
