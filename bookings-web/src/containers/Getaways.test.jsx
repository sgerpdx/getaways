require('dotenv').config();
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import Getaways from './Getaways';
//jest.useFakeTimers();

//server for mock

describe.skip('Getaways list container component', () => {
  //spin up and down the server

  it('displays an array of unordered lists and their item elements', async () => {
    render(<Getaways />);

    const loading = await screen.getByText('Loading...');
    expect(loading).toMatchSnapshot();
    const list = await screen.findByRole('list');
    expect(list).toMatchSnapshot();

    return waitFor(async () => {
      await screen.getByText('...and there you have it');
    });
  });
});
