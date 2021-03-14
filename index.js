// Code your solutions in this file
const cards = [['Lisa', 'Kaitlin', 'Jan']];

function writeCards(cards) {
    let cards_array = [];
    for (let i = 0; i < cards.length; i++) {
      cards_array[i] = (`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
  
    return cards_array;
  }

  writeCards(cards);


function countDown(number){


while (number > -1) {
  console.log(number--);
    } 
}

countDown(10);