import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {
  count = 0;
  isMeat = false;
  isVegetable = false;
  choice = new Array();
  isGood = false;
  isBad = false;
  vege = new Array();
  meat = new Array();

  start() {
    if (this.isMeat && this.isVegetable){
      this.isGood = true;
    } else{
      this.isBad = true;
    }
  }

  reset() {
    this.choice = new Array();
    this.vege = new Array();
    this.meat = new Array();
    this.isMeat= false;
    this.isVegetable =false;
    this.count = 0;
    this.isGood = false;
    this.isBad = false;
  }

  addItem(item,type){
    if (this.choice.indexOf(item) === -1){
      this.choice.push(item);
      this.count ++;
      if (type==='meat') {
        this.isMeat = true;
        this.meat.push(item);
      } else {
        this.isVegetable = true;
        this.vege.push(item);
      }
    }
  }

}
