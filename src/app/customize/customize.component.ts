import { Component, OnInit } from '@angular/core';
import { Ingredients, Ingredient } from '../Ingredient';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {

  ingredients = Ingredients
  totalBill:number = 0;
  onSelect(ingredient: Ingredient): void {
    ingredient.selected = !ingredient.selected;
    if (ingredient.selected) {
      this.totalBill += ingredient.price;
    }
    else {
      this.totalBill -= ingredient.price;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
