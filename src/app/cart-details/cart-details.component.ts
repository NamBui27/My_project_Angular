import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart-service/cart.service';


@Component ({
    selector : 'app-cart-details',
    templateUrl: './cart-details.component.html',
    styleUrls: ['./cart-details.component.css']
})

export class CartDetailComponent implements OnInit{
    items;

    constructor(
        private cartService: CartService
    ){}
    ngOnInit(){
        this.items = this.cartService.getItems();
    }
}