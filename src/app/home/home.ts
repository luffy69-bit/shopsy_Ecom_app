import { Component } from '@angular/core';
import { Ecomm } from '../services/ecomm';
import { itemList } from '../../interface/items';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
constructor(private products:Ecomm){}
itemList:itemList[]=[]
ngOnInit()
{
  this.products.getData().subscribe((data :itemList[])=>
  {
    this.itemList=data
    console.log(this.itemList)
  })
}
}
