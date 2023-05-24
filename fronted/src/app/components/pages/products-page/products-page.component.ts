import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products!:Products;

  constructor(activatedRoute:ActivatedRoute, productsService:ProductsService){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.products = productsService.getProductsById(params.id);
    })

  }

}
