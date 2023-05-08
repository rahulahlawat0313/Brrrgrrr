import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Ingredient';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  ingredients = Ingredients

  constructor() { }

  ngOnInit(): void {
  }

}
