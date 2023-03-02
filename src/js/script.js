function defineSuit(card) {

    return {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades'
    }[card[card.length - 1]]
    // if(card[1] === '♣') {
    //     return 'clubs'
    // } else if (card[1] === '♦') {
    //     return 'diamonds'
    // } else if (card[1] === '♥') {
    //     return 'hearts'
    // } else if (card[1] === '♠') {
    //     return 'spades'
    // }
  }

  console.log(defineSuit('3♣'))