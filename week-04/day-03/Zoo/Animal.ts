'use strict';

abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected skinType: string;
  protected sound: string;

  constructor(name: string, age: number = 0, gender?: string, skinType?: string, sound?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.skinType = skinType;
    this.sound = sound;

  }

  abstract getName(): void;
  abstract breed(): void;
}

export { Animal };
