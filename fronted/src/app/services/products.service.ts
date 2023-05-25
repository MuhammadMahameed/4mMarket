import { Injectable } from '@angular/core';
import { Products } from '../shared/models/Products';
import { products, samble_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCTS_BY_ID_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_TAGS_URL, PRODUCTS_TAG_TAG_URL, PRODUCTS_URL } from '../shared/Cons/urs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Products[]>{
    return this.httpClient.get<Products[]>(PRODUCTS_URL);
  }

  getAllProductsbySerach(searchTerm:string){
  return  this.httpClient.get<Products[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(PRODUCTS_TAGS_URL);
  }

  getAllProductsByTag(tag:string):Observable <Products[]>{
    return tag =="All"?
    this.getAll():
    this.httpClient.get<Products[]>(PRODUCTS_TAG_TAG_URL + tag)

  }

  getProductsById(ProductId:string):Observable <Products>{
   return this.httpClient.get<Products>(PRODUCTS_BY_ID_URL + ProductId)
  }
}
