import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MiComponente extends Component {
  render() {

    //ESTRUCTURA NO RECOMENDADA PORQUE LA IDEA ES NO ESTAR CAMBIANDO LOS NOMBRES DE LAS VAR
    //const nombre = this.props.nombre
    //const apellido = this.props.apellido

    //OBJECT DISTROCTURING ES RECOMENDADO PERO NO PERMITE CAMBIAR LAS NOMBRES DE LAS VAR
    const { nombre, apellido } = this.props

    return (
      <h2>Soy un componente :D {nombre} {apellido} </h2>
    )
  }
}

// TAMBIÉN PODRÍA SER CONST NOMBRE = this.props.nombre, apellido = this.props.apellido

class App extends Component {
  state = {
    title: 'Titulo inicial'
  }

  //MÉTODO PARA CAMBIAR EL ESTADO USANDO IF ELSE COMO OPERADOR TERNARIO
  toggleTitle() {
    const title = this.state.title == 'Titulo inicial' ? 'Nuevo titulo' : 'Titulo inicial'
    this.setState({ title })
  }

  render() {

    // SE PUEDE ESCRIBIR ASÍ CUANDO NO LE PASAMOS HIJOS (OTRO COMP) PERO SI PROPIEDADES <MiComponente>
    // SE PUEDE ESCRIBIR TMB ASÍ PARA PASARLE PROPIEDADES E HIJOS <MiComponente></MiComponente>
    const appellido1 = 'Schurmann'
    const appellido2 = 'Duarte'
    return (
      <div className="App">
        <h1 onClick={() => this.toggleTitle()}>{this.state.title}</h1>
        <MiComponente nombre='Nicolas' apellido={appellido1}/>
        <MiComponente nombre='Felipe' apellido={appellido2}></MiComponente>
        <p>Esto es un párrafo</p>
        <span>Esto es un span</span>
      </div>
    );
  }
}

export default App;


//PROPIEDAD: ALGO QUE UN PADRE LE PASA A UN HIJO. EN ESTE EJEMPLO App LE PASA LAS PROPIEADES AL HIJO
//ESTADO: ALGO QUE ES DEL COMPONENTE NO SE LA PASA EL PADRE PERO SI SE LE PUEDE PASAR A UN HIJO

//FAT ARROW FUNCTION 
//ARROW FUNCTION NO TIENE THIS

//const suma = (a, b) => a + b
//suma (1, 2)

//SIDE EFFECTS SON FUNCIONES IMPURAS QUE GENERAN EFECTOS DISTINTOS EJ 2 + 2 VES TRAEME LA FECHA. QUEDÓ PENDIENTE EL CONSTRUCTOR

//CONSTRUCTOR SE INICIA UNA SOLA VEZ ANTES DE QUE SE CREE EL COMPONENTE Y RECIBE PROPIEDADES