import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./views/HomeView', () => () => <div data-testid="home-view" />);

test('renders home page ', () => {
  render(<App />);
  const homeView = screen.getByTestId('home-view');
  expect(homeView).toBeInTheDocument();
});
