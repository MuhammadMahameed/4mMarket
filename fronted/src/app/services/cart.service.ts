import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../shared/models/Products';
import { CartItem } from '../shared/models/CartItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(products:Products):void{
    let cartItem = this.cart.items
    .find(item => item.products.id === products.id);

    if(cartItem)
    return;

    this.cart.items.push(new CartItem(products));
    this.setCartToLocalStorage();
  }

  removeFromCart(productId: string):void{
    this.cart.items = this.cart.items
    .filter(item => item.products.id != productId)
    this.setCartToLocalStorage();
  }

  changeCount(productId: string , count:number){
    let cartItem = this.cart.items
    .find(item => item.products.id === productId);
    if(!cartItem) return;

    cartItem.quantity = count;
    cartItem.price = count * cartItem.products.price;
    this.setCartToLocalStorage();

  }
  getCart(): Cart{
    return this.cartSubject.value;
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }


  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
