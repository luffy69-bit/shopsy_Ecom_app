import { Component } from '@angular/core';
import { itemList } from '../../interface/items';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  totalprice = 0;
  cartItems: itemList[] = [];

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log(this.cartItems);
    this.calculateTotal();
  }
  //function to calculate total price of items in cart
  calculateTotal() {
    this.totalprice = parseFloat(
      this.cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2)
    );
  }

  //function to remove item from cart
  removeItem(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }

  IncreaseQuantity(id: number) {
    const index = this.cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.cartItems[index].quantity = (this.cartItems[index].quantity || 1) + 1;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.calculateTotal();
  }
  
}
 DecreaseQuantity(id: number) {
    const index = this.cartItems.findIndex((item) => item.id === id);
    if (index !== -1 && (this.cartItems[index].quantity || 1) > 1) {
      this.cartItems[index].quantity = (this.cartItems[index].quantity || 1) - 1;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.calculateTotal();
}
}
}
