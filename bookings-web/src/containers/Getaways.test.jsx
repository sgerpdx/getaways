require('dotenv').config();
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import Getaways from './Getaways';
//jest.useFakeTimers();

//server for mock

describe('Getaways list container component', () => {
  //spin up and down the server

  it('displays an array of unordered lists and their item elements', async () => {
    render(<Getaways />);

    const loading = await screen.getByText('Loading...');
    expect(loading).toMatchSnapshot();
    //will have to figure out how to test for lists, because the 'list' is actually simply an array of uls, each with tons of lis
    //maybe test for array?

    return waitFor(async () => {
      await screen.getByText('...and there you have it');
    });
  });
});
