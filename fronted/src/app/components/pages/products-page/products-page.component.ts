import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/shared/models/Products';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products!:Products;
  user!:User;
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing Found :(";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/";

  constructor(activatedRoute:ActivatedRoute, productsService:ProductsService ,
    private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      productsService.getProductsById(params.id).subscribe(serverProducts => {
        this.products = serverProducts;
      });
    })

  }

  addToCart(){
    this.cartService.addToCart(this.products);
    this.router.navigateByUrl('/cart-page');

  }
  get isAuthentication(){
    return this.user.token;

  }


}
