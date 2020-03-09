import { Component , OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-cart-service',
    templateUrl: './cart.service.html',
    styleUrls: ['./cart.service.css']
})

@Injectable({
    providedIn: 'root'
})

export class CartService implements OnInit{
    constructor(
        private http: HttpClient
    ){}

    items = [];

    addToCart(product){
        this.items.push(product);
    }

    getItems(){
        return this.items;
    }

    clearCart(){
        this.items = [];
        return this.items;
    }

    getShippingPrice(){
        return this.http.get('./assets/shipping.json');
    }

    ngOnInit(){}
}