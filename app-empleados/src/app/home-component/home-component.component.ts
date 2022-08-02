import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  title = 'Listado de Empleados';


  empleados:Empleado[]=[];


  agregarEmpleado(){

    let miEmplado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadosService.agregarEmpleadoServicio(miEmplado);
    
  } 

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  constructor(private empleadosService:EmpleadosService) { 
    //this.empleados = this.empleadosService.empleados
  }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }


}
