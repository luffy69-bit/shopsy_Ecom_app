import { Component } from '@angular/core';
import { Ecomm } from '../services/ecomm';
import {  itemList } from '../../interface/items';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
constructor(private products:Ecomm){}
itemList:itemList[]=[]
cartlength=0
// cartItems:itemList[]=[] //set cart items in this cartItems array


ngOnInit()//getting product data from service or api
{
  this.products.getData().subscribe((data :itemList[])=>
  {
    this.itemList=data
    console.log(this.itemList)
  })
}

addToCart(cartItems: itemList) {
  let cart= JSON.parse(localStorage.getItem('cart') ||'[]') //get cart items from local storage if available otherwise return empty array

  let  index =cart.findIndex((items: any)=> items.id===cartItems.id) //check if item already exists in cart

if(index===-1)//if item does not exist in cart then add it
{
  cart.push({...cartItems, quantity:1}) //add item to cart
}
else{
  cart[index].quantity +=1
 } //if item exists in cart then increase its quantity}

  this.setItemInCart(cart)
  this.cartlength+=1

}

//fucntion to set item in the cart

setItemInCart(cart:itemList) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
}
