import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {


  title = 'Listado de Empleados';

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  indice:number;

  empleados:Empleado[]=[];


  actualizaEmpleado(){

    let miEmplado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadosService.actualizarEmpleado(this.indice,miEmplado);

    this.router.navigate(['']);
    
  } 
  volverHome(){
    this.router.navigate(['']);
  }
  constructor(private router:Router, private empleadosService:EmpleadosService, private route:ActivatedRoute) { } 

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice)

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

}
