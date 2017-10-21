import React, { Component } from 'react'
//import logo from './logo.svg'
import './App.css'

class App extends Component {

  state = {
    value: '',
    sent: false,
    error: false,
    data: [
      
    ],
  }

  //METODO PARA RECIBIR EL VALOR

  validateValue(value) {
    const largo = value.length

    const mensaje = largo === 0
      ? 'Debe ingresar un valor' //SI ES IGUAL A CERO
      : largo <= 3 // ANIDANDO UN IF
        ? 'El valor debe ser mayor que 3'  // SI ES MENOR QUE 3
        : largo >= 10 //ANIDANDO UN IF
          ? 'El valor debe ser menor que 10' //SI ES MAYOR QUE 10
          : 'Perfect!' //ELSE FINAL

    return mensaje
    // PODRIA SER QUE NO SEA NECESARIO CREAR UNA CONSTANTE Y DIRECTAMENTE RETORNARLO:
    /*
    return ( largo == 0
      ? 'Debe ingresar un valor' //SI ES IGUAL A CERO
      : largo <= 3 // ANIDANDO UN IF
        ? 'El valor debe ser mayor que 3'  // SI ES MENOR QUE 3
        : largo >= 10 //ANIDANDO UN IF
          ? 'El valor debe ser menor que 10' //SI ES MAYOR QUE 10
          : 'Perfect!' //ELSE FINAL
      )
    */
    //ALGUNOS PODRÍAN DECIR QUE ES UNA MALA PRÁCTICA PERO SI ES SIMPLE CONVIENE USARLO EN VEZ DE UN SWITCH CASE
  }

  //TODO
  /*handleInputChange(x) {
    console.log(x.target.value)
  }*/

  /*FILTRA DE TODO SÓLO EL TARGET
  handleInputChange({target}) {
    console.log(target.value)
  }*/

  //MÁS ESPECIFICO
  handleInputChange({ target: { value } }) {
    //console.log(value)
    this.setState({ value })
  }

  //PARA ENVIAR
  enviar(e){
    e.preventDefault()
    this.validateValue(this.state.value) === 'Perfect!'
      ? this.setState({ 
        sent: true, 
        error: false, 
        value: '',
        data: this.state.data.concat(this.state.value)
       })
      : this.setState({ error: true})
  }


  // <input onChange={() => this.handleInputChange()}/> LE INYECTA UN VALOR QUE HACE REFERENCIA AL EVENTO QUE ESÁ PASANDO . X ES EL EVENTO QUE SE ESTÁ GATILLANDO CUANDO ESTOY ACTIVANDO LA FUNCION ONCHANGE 

  render() {

    return (
      <div className="App">
        <form>
          <input value={this.state.value} onChange={ x => this.handleInputChange(x)}/>
          <button onClick={(e) => this.enviar(e)}>ENVIAR</button>
        </form>
        <div>{this.validateValue(this.state.value)}</div>
        {this.state.sent && <div>Formulario enviado con éxito</div>}
        {this.state.error && <div>El formulario tiene observaciones favor corregir</div>}
        <ul>{this.state.data.map((x, i) => <li key={i}>{x}</li>)}</ul>
      </div>
    )
  }
}

export default App

