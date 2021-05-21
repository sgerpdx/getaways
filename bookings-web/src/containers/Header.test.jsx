require('dotenv').config();
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import Header from './Header';
//jest.useFakeTimers();

describe('Header container component', () => {
  it('displays the correct title text and nav controls', async () => {
    render(<Header />);

    const heading = await screen.getByText('Home');
    expect(heading).toMatchSnapshot();
  });
});
