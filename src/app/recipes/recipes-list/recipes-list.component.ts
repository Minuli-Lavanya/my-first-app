import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/62_36_1429634659.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/62_36_1429634659.jpg'),
  ];

  constructor() { }

  ngOnInit() { }

}
