import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private item: any = null;

  addToCart(item: any) {
    this.item = item;
  }

  getItem() {
    return this.item;
  }

  clearCart() {
    this.item = null;
    return this.item;
  }

}
