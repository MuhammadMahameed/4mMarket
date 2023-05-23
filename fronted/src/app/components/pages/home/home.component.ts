import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/shared/models/Products';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   products:Products[] = [];
  form: FormGroup;

  constructor(private productsService:ProductsService,private fb: FormBuilder) {
    this.products = productsService.getAll();

    this.form = this.fb.group({
      rating: ['', Validators.required],
    })


   }

}
