'use strict';

abstract class Insturment {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
  abstract play(): void;

}

export { Insturment };
