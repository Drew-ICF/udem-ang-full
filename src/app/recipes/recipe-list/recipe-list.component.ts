import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is only a test!', 'https://foodfolksandfun.net/wp-content/uploads/2018/12/Pozole-rojo.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
