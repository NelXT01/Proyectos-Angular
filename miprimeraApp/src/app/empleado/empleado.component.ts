import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles:['p{ background-color:red;}']
})
export class EmpleadoComponent implements OnInit {

  nombre="Nelson";
  apellido="Tontarelli";
  edad=20;
  empresa="";






  // getEdad(){

  //   return this.edad;
  // }

  textoRegistro = "No hay nadie registrado"

  habilitacionCuadro=true;

  usuRegistrado=false;

  getRegistroUsuario(){

    this.usuRegistrado = false;
  }

  setUserRegistrado(event:Event){

    //this.textoRegistro="Te has registrado"
    if((<HTMLInputElement>event.target).value =="si"){
      this.textoRegistro="Te has registrado";
      this.habilitacionCuadro = false
    }
    else{
      this.textoRegistro="No hay nadie registrado";
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
