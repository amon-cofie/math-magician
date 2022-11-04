import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

test('renders navbar component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders Home component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders About component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
