import { Injectable } from '@angular/core';
import { Products } from '../shared/models/Products';
import { products, samble_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

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

  getAllTags():Tag[]{
    return samble_tags;
  }

  getAllProductsByTag(tag:string):Products[]{
    return tag =="All"?
    this.getAll():
    this.getAll()
    .filter(products => products.tags?.includes(tag));

  }

  getProductsById(ProductId:string):Products{
    return this.getAll()
    .find(products => products.id == ProductId) ?? new Products();
  }
}
