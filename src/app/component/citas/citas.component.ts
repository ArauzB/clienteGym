import { Component,OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent implements OnInit {

  citas: any[] = [];


  constructor(private citasService:CitasService){}


  ngOnInit(): void {
    const token = localStorage.getItem('token');

    this.citasService.getCitas(token).subscribe(
      (data) => {
        this.citas = data;
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );

  }

}
