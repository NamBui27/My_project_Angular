import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart-service/cart.service';


@Component ({
    selector : 'app-cart-details',
    templateUrl: './cart-details.component.html',
    styleUrls: ['./cart-details.component.css']
})

export class CartDetailComponent implements OnInit{
    items;
    checkoutForm;

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ){
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: '',
            phone: ''
        });
    }

    ngOnInit(){
        this.items = this.cartService.getItems();
    }

    onSubmit(customerData){
        //process checkout data
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();

        console.warn('your order has been submitted', customerData);

    }
}