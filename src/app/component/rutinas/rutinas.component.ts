import { Component } from '@angular/core';

@Component({
  selector: 'app-rutinas',
  standalone: true,
  imports: [],
  templateUrl: './rutinas.component.html',
  styleUrl: './rutinas.component.css'
})
export class RutinasComponent {
  rutinas = [
    // Ejemplo de datos de rutinas
    { RUTINA_ID: 1, NOMBRE_EJERCICIO: 'Push Ups', DIA: 'Lunes', DURACION_MINUTOS: 30, INSTRUCTOR_NOMBRE: 'Juan', INSTRUCTOR_APELLIDO: 'Perez' },
    { RUTINA_ID: 2, NOMBRE_EJERCICIO: 'Squats', DIA: 'Martes', DURACION_MINUTOS: 45, INSTRUCTOR_NOMBRE: 'Ana', INSTRUCTOR_APELLIDO: 'Lopez' },
    { RUTINA_ID: 3, NOMBRE_EJERCICIO: 'Squats', DIA: 'Miércoles', DURACION_MINUTOS: 45, INSTRUCTOR_NOMBRE: 'Ana', INSTRUCTOR_APELLIDO: 'Lopez' },
    { RUTINA_ID: 4, NOMBRE_EJERCICIO: 'Squats', DIA: 'Jueves', DURACION_MINUTOS: 45, INSTRUCTOR_NOMBRE: 'Ana', INSTRUCTOR_APELLIDO: 'Lopez' },
    { RUTINA_ID: 5, NOMBRE_EJERCICIO: 'Squats', DIA: 'Viernes', DURACION_MINUTOS: 45, INSTRUCTOR_NOMBRE: 'Ana', INSTRUCTOR_APELLIDO: 'Lopez' },
    { RUTINA_ID: 6, NOMBRE_EJERCICIO: 'Squats', DIA: 'Sábado', DURACION_MINUTOS: 45, INSTRUCTOR_NOMBRE: 'Ana', INSTRUCTOR_APELLIDO: 'Lopez' },
    // Agrega más rutinas según sea necesario
  ];

  rutinasHoy: any = [];

  constructor() { }

  ngOnInit(): void {
    this.obtenerRutinasHoy();
  }

  obtenerRutinasHoy() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const hoy = new Date().getDay();
    const diaHoy = diasSemana[hoy];

    this.rutinasHoy = this.rutinas.filter(rutina => rutina.DIA === diaHoy);
  }

}
