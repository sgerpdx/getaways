import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import App from './App';
jest.useFakeTimers();

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    return waitFor(() => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
