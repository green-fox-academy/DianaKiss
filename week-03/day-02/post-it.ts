'use strict';

export class Postit {
  bckgrdColor: string;
  text: string;
  textColor: string;
  constructor(text: string) {
    this.text = text;
  }
}

let idea = new Postit('idea');
idea.bckgrdColor = 'orange';
idea.textColor = 'blue';

let awesome = new Postit('Awesome');
awesome.bckgrdColor = 'pink';
awesome.textColor = 'black';

let superb = new Postit('Superb!');
superb.bckgrdColor = 'yellow';
superb.textColor = 'green';
