'use strict';

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const colors = ['H', 'S', 'C', 'D'];
//H heart //S sapde //C club //D diamond


module.exports = function whoIsTheWinner(blackHand, whiteHand) {
  let blackCardIndex = 0;
  let whiteCardIndex = 0;

  // console.log(blackHand);

  for (let i = 0; i < 5; i++) {
    if (blackCardIndex < blackHand[i][0]) {
      blackCardIndex = blackHand[i][0];
    }
    if (whiteCardIndex < whiteHand[i][0]) {
      whiteCardIndex = whiteHand[i][0];
    }
    console.log(whiteCardIndex);
    console.log(blackCardIndex);
  }

  // return 'White wins';

}
