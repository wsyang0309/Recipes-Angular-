import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  isHamburger = false;
  breadCounter = 0;
  beefCounter = 0;

  addBread(){
    this.breadCounter ++;
    this.checkRecipe();
  }

  addBeef(){
    this.beefCounter ++;
    this.checkRecipe();
  }

  checkRecipe(){
    if( this.breadCounter >= 2 && this.beefCounter >= 1){
      this.isHamburger = true;
    }
  }

}
