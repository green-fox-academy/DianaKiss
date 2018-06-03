'use strict';

let probeSum: number[] = [1, 2, 3, 4];

/*
class Summarizer {


  public summethod() {
    for (let i: number = 0; i < probeSum.length; i++) {
      valueSum = valueSum + probeSum[i];

    }
    return valueSum;
  }
}
*/


function summethod(anyArray) {
  let valueSum: number = 0;
  for (let i: number = 0; i < anyArray.length; i++) {
    valueSum = valueSum + anyArray[i];
    }
  return valueSum;
}

console.log(summethod(probeSum));

export { summethod };

//export { Summarizer };