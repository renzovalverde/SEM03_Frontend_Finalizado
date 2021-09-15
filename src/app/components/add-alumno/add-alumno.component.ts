import { Component, OnInit } from '@angular/core';



import { Alumno } from 'src/app/models/alumno.model';

import { AlumnoService } from 'src/app/services/alumno.service';



@Component({

  selector: 'app-add-alumno',

  templateUrl: './add-alumno.component.html',

  styleUrls: ['./add-alumno.component.css']

})





export class AddAlumnoComponent implements OnInit {



  constructor(private alumnoService: AlumnoService) { }



  alumno: Alumno = {

    idAlumno: 0,

    nombre: '',

    dni: '',

    correo: '',

    fechaNacimiento: new Date()

  };



  ngOnInit(): void {

  }



 saveAlumno(){

    console.log(">>> saveAlumno() ");



    const data = {

      nombre: this.alumno.nombre,

      dni: this.alumno.dni,

      correo: this.alumno.correo,

      fechaNacimiento: this.alumno.fechaNacimiento

    };



    console.log(">>>Save Inicio Impresion");

    console.log(data);

    console.log(">>>Save Fin Impresion");

this.alumnoService.create(data)
.subscribe(

response =>{
console.log(response.mensaje);
alert(response.mensaje)
},
error=> {
  console.log(error());
}


);

  }





}