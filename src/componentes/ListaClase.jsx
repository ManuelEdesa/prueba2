import React from 'react';
//creamos la clase con el constructor
class ListaClase extends React.Component {
  constructor(props){
    super(props);
    this.icono=props.icono;
    this.titulo=props.titulo;
  }
  render(){
    return (
      <div>
        {this.titulo}= {this.icono}
        </div>
    );
  }
}
//hay que exportar la clase desde aqui para poder importarla en App
export default ListaClase;