'use strict';
export{};

class Summarizer {

  protected probeSum: any[] = [];
  
  constructor(probeSum: any[]) {
    this.probeSum = [];
  }

  public summethod(probeSum: any[]) {
    this.probeSum
    let valueSum: number = 0;
    for (let i: number = 0; i < probeSum.length; i++) {
      valueSum = valueSum + probeSum[i];
      console.log('KISCICA');
    }
   
  return valueSum;
  }
}

let szamprob = [1, 2, 3, 4];

console.log(szamprob.summethod(probeSum));

export { Summarizer };
