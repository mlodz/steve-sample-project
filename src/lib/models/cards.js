

// TODO: implement a datastore rather than store in memory
// This data is lost when server is stopped
let cardIdCounter = 1;
let cards = [];
const createCard = function(title, body) {
  cards.push({title, body, id: cardIdCounter++});
};

const readCards = () => cards;

createCard('Card #1', 'This is a default card.');
createCard('Card #2', 'And this is another default, prepopulated card.');

module.exports = {
  createCard,
  readCards,
}
