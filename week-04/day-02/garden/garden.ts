'use strict';

import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

class Garden {

  protected name: string;
  protected flowers: Flower[];
  protected trees: Tree[];
  
  public constructor(name: string) {
    this.name = name;
    this.flowers = [];
    this.trees = [];

  } 

  public plantWatering(): void {

  }
}

let flowerbed: Flower[] = [];

let hajnalka = new Flower('yellow');
flowerbed.push(hajnalka);

let ibolya = new Flower('blue');
flowerbed.push(ibolya);
