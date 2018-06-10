'use strict';

import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';
import {Garden} from './garden';


let arboretum = new Garden('Vacratoti Arboretum');

// let flowerbed: Flower[] = [];
// let treeSchool: Tree[] = [];

let hajnalka = new Flower('yellow');
arboretum.plantFlower(hajnalka);

let ibolya = new Flower('blue');
arboretum.plantFlower(ibolya);

let peach = new Tree('orange');
arboretum.plantTree(peach);

let plum = new Tree('purple');
arboretum.plantTree(plum);


// ibolya.checkwater();
// hajnalka.checkwater();
// peach.checkwater();
// plum.checkwater();



console.log(arboretum.plantWatering(20));

