import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { itemList } from '../../interface/items';

@Injectable({
  providedIn: 'root'
})
export class Ecomm {

 
  constructor(private http: HttpClient){}
  url='https://fakestoreapi.com/products'

  getData():Observable<itemList[]>
  {
    return this.http.get<itemList[]>(this.url)
  }

  
}
