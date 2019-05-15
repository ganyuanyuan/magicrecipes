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


  addBeef() {
    if (this.choice.indexOf('beef') === -1){
      this.choice.push('beef');
      this.count ++;
      this.isMeat = true;
      this.meat.push('beef');
    }
  }

  addPork(){
    if (this.choice.indexOf('pork') === -1){
      this.choice.push('pork');
      this.count ++;
      this.isMeat = true;
      this.meat.push('pork');
    }
  }

  addChicken(){
    if (this.choice.indexOf('chicken') === -1){
      this.choice.push('chicken');
      this.count ++;
      this.isMeat = true;
      this.meat.push('chicken');
    }
  }

  addPotato(){
    if (this.choice.indexOf('potato') === -1){
      this.choice.push('potato');
      this.count ++;
      this.isVegetable = true;
      this.vege.push('potato');
    }
  }
  addEggplant(){
    if (this.choice.indexOf('eggplant') === -1){
      this.choice.push('eggplant');
      this.count ++;
      this.isVegetable = true;
      this.vege.push('eggplant');
    }
  }
  addPeper(){
    if (this.choice.indexOf('peper') === -1){
      this.choice.push('peper');
      this.count ++;
      this.isVegetable = true;
      this.vege.push('peper');
    }
  }
}
