import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartAmount=0;
  user!:User;
  constructor(cartService:CartService ,private userService:UserService ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartAmount = newCart.totalCount;
    })


    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
   }

   logout(){
    this.userService.logout()
  }

  get isAuthentication(){
    return this.user.token;

  }




}


