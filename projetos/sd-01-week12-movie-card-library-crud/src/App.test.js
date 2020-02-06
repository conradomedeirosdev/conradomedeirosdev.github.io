import React from 'react';
import {
  render,
  cleanup,
  waitForDomChange,
  fireEvent,
} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Movie List', () => {
  test("Renders a 'Carregando' text right afte rendering the element", () => {
    const { getByText } = render(<App />);
    expect(getByText('Carregando...')).toBeDefined();
  });

  test('Renders the movie titles after the page loads', async () => {
    const { queryByText } = render(<App />);

    await waitForDomChange();

    expect(queryByText('Carregando...')).toBeNull();
    expect(queryByText('Kingsglaive')).not.toBeNull();
    expect(queryByText('Final Fantasy')).not.toBeNull();
    expect(queryByText('Ghost In The Shell')).not.toBeNull();
    expect(queryByText('Appleseed Alpha')).not.toBeNull();
    expect(queryByText('Resident Evil')).not.toBeNull();
    expect(queryByText('Lord Of The Rings - The Return of The King')).toBeNull();
  });

  test("Renders the movie's details in a separate page when'Ver datahes' button is cliked", async () => {
    const { queryByText, queryByTestId } = render(<App />);

    await waitForDomChange();

    fireEvent.click(queryByTestId('KingsglaiveDetails'));

    await waitForDomChange();

    expect(queryByText('Genre: action')).not.toBeNull();
    expect(queryByText('Rating: 4.5')).not.toBeNull();
  });
});
