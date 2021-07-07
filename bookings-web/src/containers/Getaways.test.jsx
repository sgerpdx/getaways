require('dotenv').config();
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
//import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Getaways from './Getaways';
//jest.useFakeTimers();

const resultOne = [
  {
    createdAt: '2021-05-05T18:20:08.703Z',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    id: '6092e1d88cb048f1d3300bd9',
    image: 'http://placeimg.com/1080/800',
    imageThumbnail: 'http://placeimg.com/400/400',
    location: '68535 Tyrel Inlet, Davismouth, Georgia, 29036',
    maxGuests: 21,
    name: 'Fantastic Park',
    petFriendly: true,
    pool: true,
    price_per_night: 229,
    slug: 'fantastic-park',
    updatedAt: '2021-05-05T18:20:08.703Z',
    wifi: false,
    __v: 0,
  },
];

const server = setupServer(
  rest.get('http://localhost:7890/api/v1/places', (req, res, ctx) => {
    return res(ctx.json(resultOne));
  })
);

describe('Getaways list container component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays an array of unordered lists and their item elements', async () => {
    //a memory router is needed for this test to fully work, because of the Link in the Place component:
    render(
      <MemoryRouter>
        <Route path="/">
          <Getaways match={{ params: { id: '6092e1d88cb048f1d3300bd9' } }} />
        </Route>
      </MemoryRouter>
    );

    const loading = await screen.getByText('Loading...');
    expect(loading).toMatchSnapshot();
    //will have to figure out how to test for lists, because the 'list' is actually simply an array of uls, each with tons of lis
    //maybe test for array?

    return waitFor(async () => {
      // await screen.getByText('...and there you have it');
      await screen.getByText(/Maple/);
      expect;
    });
  });
});
