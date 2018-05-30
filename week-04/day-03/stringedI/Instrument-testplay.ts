'use strict';

import { Insturment } from './main-music';
import { StringedInsturment } from './Stringed-Instruments';
import { ElectricGuitar } from './ElectricGuitar';
import { BassGuitar } from './Bassguitar';
import { Violin } from './violin';


console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(undefined, 7);
let bassGuitar2 = new BassGuitar(undefined, 5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
