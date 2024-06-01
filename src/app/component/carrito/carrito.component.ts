import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MembresiasService } from '../../services/membresias.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  cartItem: any = null;

  data={
    token:<any>'',
    membresiaId:''
  }



  constructor(private membresiasService:MembresiasService, private cartService: CartService,  private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
    this.cartItem = this.cartService.getItem();


    this.data= {
      token: localStorage.getItem('token'),
      membresiaId: this.cartItem.ID
    }




}

procederPago(){
  this.membresiasService.crearOrder(this.data).subscribe(
    (data) => {
      console.log(data)
      this.router.navigate(['/pago']);
    },
    (error) => {
      console.error('Error al obtener los productos', error);
    }
  );


}

};
