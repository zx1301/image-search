import React from 'react';
import { render, screen} from '@testing-library/react';
import Home from './Home';

test('renders Image Search', () => {
  render(<Home />);
  screen.getByText('Image Search');
  screen.getByPlaceholderText('search here');
});
