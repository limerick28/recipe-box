import { Component, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  imports: [RecipeDetail],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly title = signal('My Recipe Box!');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected showCarbonara(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected showCaprese(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }
}
