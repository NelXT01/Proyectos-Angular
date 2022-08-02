import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  title = 'Listado de Empleados';

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;


  agregarEmpleado(){

    let miEmplado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadosService.agregarEmpleadoServicio(miEmplado);
    
  } 

  constructor(private router:Router, private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([''])
  }

}
