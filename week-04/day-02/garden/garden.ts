'use strict';

import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {

  protected name: string;
  protected flowers: Flower[];
  protected trees: Tree[];

  public constructor(name: string) {
    this.name = name;
    this.flowers = [];
    this.trees = [];

  }
  
  public plantFlower(flower: Flower) {
    this.flowers.push(flower);
  }
  
  public plantTree(tree: Tree) {
    this.trees.push(tree);
  }


  public plantWatering(waterAmount: number): void {
    let plantNumbers: number = this.flowers.length + this.trees.length;
    let countThirstyFlowers: number = 0;
    let countThirstyTrees: number = 0;
    for (let i: number = 0; i < this.flowers.length; i ++) {
      if (this.flowers[i].returnWaterlevel() < 5) {
        this.flowers[i].checkwater();
        countThirstyFlowers ++;
      }
    }  
      for (let i: number = 0; i < this.trees.length; i ++) {
        if (this.trees[i].returnWaterlevel() < 5) {
          this.trees[i].checkwater();
          countThirstyTrees ++
        }
    }

      
      // console.log(`Watering with ${waterAmount}`);
     for (let i: number = 0; i < countThirstyFlowers; i ++) {
       this.flowers[i].getWatered(waterAmount / (countThirstyFlowers + countThirstyTrees))
      }



  }
}
