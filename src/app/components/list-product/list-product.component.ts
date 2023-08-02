import { Product } from './../../models/product.model';
import { Component } from '@angular/core';
import { products } from "../../products";
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {


  products = [...products]

}
