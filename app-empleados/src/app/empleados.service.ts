import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServiciosEmpleadosService } from "./servicios-empleados.service";
@Injectable()
export class EmpleadosService{

    constructor(private servicioAlert: ServiciosEmpleadosService){}

    empleados:Empleado[]=[

        new Empleado("Nelson","JR","Empleado",5000),
        new Empleado("Alberto","Pedro","Constructor",15000),
        new Empleado("Pedro","Alberto","Desarrollador",29000),
        new Empleado("Pepe","Diaz","Aguatero",50000),
      ];

    agregarEmpleadoServicio(empleado:Empleado){

        this.servicioAlert.muestraMensaje("Persona Registrada: " + "\n" + empleado.nombre + " " + empleado.apellido)

        this.empleados.push(empleado);
    }

    encontrarEmpleado(indice:number){

        let empleado:Empleado=this.empleados[indice];

        return empleado
    }

    actualizarEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado = this.empleados[indice]

        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;

    }
 
} 