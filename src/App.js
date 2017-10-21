import React, { Component } from 'react'
//import logo from './logo.svg'
import './App.css'

class App extends Component {

  state  = {
    value: '',
    Name: '',
    LastName: '',
    Email: '',
    sent: false,
    error: false,
    data: [],
  }

  //METODO PARA RECIBIR EL VALOR

  validateValue(Name) {
    const largo = Name.length

    const mensaje = largo === 0
      ? 'Debe ingresar un valor' //SI ES IGUAL A CERO
      : largo <= 3 // ANIDANDO UN IF
        ? 'El valor debe ser mayor que 3'  // SI ES MENOR QUE 3
        : largo >= 10 //ANIDANDO UN IF
          ? 'El valor debe ser menor que 10' //SI ES MAYOR QUE 10
          : 'Perfect!' //ELSE FINAL

    return mensaje
    
  }


  //MÁS ESPECIFICO
  handleInputChange({ target: { Name } }) {
    this.setState({ Name })
  }



  //PARA ENVIAR
  enviar(e){
    e.preventDefault()
    this.validateValue(this.state.Name) === 'Perfect!'
      ? this.setState({ 
        sent: true, 
        error: false, 
        value: '',
        Name: '',
        LastName: '',
        Email: '',
        data: this.state.data.concat(this.state.Name)
       })
      : this.setState({ error: true})
  }

  // <input onChange={() => this.handleInputChange()}/> LE INYECTA UN VALOR QUE HACE REFERENCIA AL EVENTO QUE ESÁ PASANDO . X ES EL EVENTO QUE SE ESTÁ GATILLANDO CUANDO ESTOY ACTIVANDO LA FUNCION ONCHANGE 

  render() {

    return (
      <div className="App">

        <br/><br/><br/><br/>

        <h1>Registro</h1>

        <form className="full-form">
          
          <div className="flex-row start">
            <label>Nombre:</label>
            <input type="text" value={this.state.Name} onChange={ x => this.handleInputChange(x)}/>
          </div>

          <div className="flex-row start">
            <label>Apellido:</label>
            <input type="text" value={this.state.LastName} onChange={ x => this.handleInputChange(x)}/>
          </div>

          <div className="flex-row start">
            <label>Correo:</label>
            <input type="text" value={this.state.Email} onChange={ x => this.handleInputChange(x)}/>
          </div>

          <div className="flex-row start">
            <label>Sexo:</label>
            <div className="flex-row start">
              <input type="radio"/>
              <label className="inset-label">Femenino</label>
            </div>
            <div className="flex-row start">
              <input type="radio"/>
              <label className="inset-label">Masculino</label>
            </div>
          </div>

          <div className="flex-row start">
            <label>Música favorita:</label>
            <div className="flex-row start">
              <input type="checkbox"/>
              <label className="inset-label">Rock</label>
            </div>
            <div className="flex-row start">
              <input type="checkbox"/>
              <label className="inset-label">Pop</label>
            </div>
          </div>
          

        </form>

        <br/><br/><br/><br/>



        <div className="alert-state">{this.validateValue(this.state.Name)}</div>
        {this.state.sent && <div className="alert-state">Formulario enviado con éxito</div>}
        {this.state.error && <div className="alert-state">El formulario tiene observaciones favor corregir</div>}
        <ul>{this.state.data.map((x, i) => <li key={i}>{x}</li>)}</ul>


      </div>
    )
  }
}

export default App

