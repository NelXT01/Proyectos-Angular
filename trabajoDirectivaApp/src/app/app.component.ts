import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string = "";
  apellido:string = "";
  entradas:any;
  cargo:string= "";

  constructor(){

    this.entradas =[

      {titulo:"Python cada dia mas presente"},
      {titulo:"Java presente desde hace mas de 20 años"},
      {titulo:"JavaScript cada vez mas funcional"},
      {titulo:"Kotlin potencia para tus apss"},
      {titulo:"CSS El estilo de hoja mas usado"},
      

    ]

  }

  registrarUsuario(){

    this.registrado = true;

    this.mensaje="Usuario Registrado con exito"

  }
}
