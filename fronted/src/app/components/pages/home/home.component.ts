import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/shared/models/Products';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   products:Products[] = [];


   constructor(private productsService:ProductsService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.products = this.productsService.getAllProductsbySerach(params.searchTerm);
      else if (params.tag)
      this.products = this.productsService.getAllProductsByTag(params.tag);
      else
      this.products = productsService.getAll();
    })

  }

}
