'use strict';

import { Insturment } from './main-music';

abstract class StringedInsturment extends Insturment {
  protected numberOfStrings: number;
  protected woiceOf: string;
  
  constructor(name: string, numberOfStirngs: number , woiceOf: string) {
    super(name);
    this.numberOfStrings = numberOfStirngs;
    this.woiceOf = woiceOf;
  }

  play(): void {
    this.sound;
  }

  abstract sound(): void;
}

export { StringedInsturment };
