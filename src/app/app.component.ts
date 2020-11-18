import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipe: Recipe;

  constructor() {
    this.recipe = new Recipe('Banana bread',
      'This is good',
      null, null, null);
  }
}
