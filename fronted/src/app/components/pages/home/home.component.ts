import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/shared/models/Products';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   products:Products[] = [];


   constructor(private productsService:ProductsService, activatedRoute:ActivatedRoute) {
    let productsObvservable: Observable<Products[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      productsObvservable = this.productsService.getAllProductsbySerach(params.searchTerm);
      else if (params.tag)
      productsObvservable = this.productsService.getAllProductsByTag(params.tag);
      else
      productsObvservable = productsService.getAll();

      productsObvservable.subscribe((serverProducts) => {
        this.products = serverProducts;
      })
    })

  }

}
