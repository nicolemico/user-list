import { screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from './utils';
import App from './App';

test('displays the page with the title', async () => {
  renderWithProviders(<App />);

  // should show the title of the page
  expect(screen.getByText(/User List/i)).toBeInTheDocument();
});
