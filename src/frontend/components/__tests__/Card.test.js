import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';

it('Card renders title, body, and footer', () => {
  const component = renderer.create(
      <Card>
        <span>Day Of The Week</span>
        <div>Today is Tuesday</div>
      </Card>,
  );
  let actual = component.toJSON();
  expect(actual).toMatchSnapshot();
});
