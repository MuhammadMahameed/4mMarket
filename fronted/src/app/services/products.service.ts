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
}
