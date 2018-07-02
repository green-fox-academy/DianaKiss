'use strict';

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const colors = ['H', 'S', 'C', 'D'];


module.exports = function whoIsTheWinner(blackHand, whiteHand) {
  let blackCardIndex = 0;
  let whiteCardIndex = 0;
  blackHand.forEach(element => {
    cards.forEach(card => {
      if (element == card) {
        blackCardIndex = card.index;
      }
    });
  });
  whiteHand.forEach(element => {
    cards.forEach(card => {
      if (element == card) {
        whiteCardIndex = card.index;
      }
    });
  });
  let winnerStatus = '';
  if (blackCardIndex > whiteCardIndex) {
    winnerStatus = 'Black wins';
  } else if (whiteCardIndex > blackCardIndex) {
    winnerStatus = 'White wins';
  } else {
    winnerStatus = 'It\'s a draw';
  }
  return winnerStatus;
}