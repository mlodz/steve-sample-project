let cardModel = require('../cards');
const sum = (a, b) => a + b;

describe('models/cards', () => {

  test('createCard positive path', () => {
    let [title, body] = ['one', 'two'];
    cardModel.createCard(title, body);
    let actualCards = cardModel.readCards();
    let lastCard = actualCards[actualCards.length - 1];

    expect(lastCard.title).toEqual(title);
    expect(lastCard.body).toEqual(body);
    expect(typeof lastCard.id).toEqual('number');
  });

});
