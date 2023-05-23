import { Injectable } from '@angular/core';
import { Products } from '../shared/models/Products';
import { products } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll():Products[]{
    return products;
  }

  getAllProductsbySerach(searchTerm:string){
  return  this.getAll()
   .filter(products => products.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
