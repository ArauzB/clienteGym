import { Component, OnInit } from '@angular/core';
import { MembresiasService } from '../../services/membresias.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membresias',
  standalone: true,
  imports: [],
  templateUrl: './membresias.component.html',
  styleUrl: './membresias.component.css'
})
export class MembresiasComponent implements OnInit{

  membresias!: any[];

  constructor(private router:Router, private membresiasService:MembresiasService, private cartService:CartService){}

  ngOnInit(): void {
    this.membresiasService.getsMembresias().subscribe(
      (data) => {
        this.membresias = data;
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );

  }

  addToCart(membresia: any) {
    this.cartService.addToCart(membresia);
    this.router.navigate(['/carrito']);
  }


}
