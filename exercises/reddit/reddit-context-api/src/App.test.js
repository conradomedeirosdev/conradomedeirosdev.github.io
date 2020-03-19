import React from 'react';
import { render, waitForDomChange, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import { dateNow } from './Components/MainReddit';
import { getREDDIT } from './Services/Services';

describe('Render api', () => {
  afterEach(cleanup);
  test('test elements after loading change', () => {
    const { getByText, getAllByText} = render(<App />);
    const Selected = getByText(/Selected: reactjs/i);
    expect(Selected).toBeInTheDocument();

    const selectReactjs = getAllByText(/reactjs/i)[1] || getByText(/reactjs/i)
    expect(selectReactjs).toBeInTheDocument();
    expect(selectReactjs.tagName).toBe('OPTION');

    const selectFrontend = getAllByText(/frontend/i)[1] || getByText(/frontend/i)
    expect(selectFrontend).toBeInTheDocument();
    expect(selectFrontend.tagName).toBe('OPTION');
    
    expect(getByText(/Last update at.../i)).toBeInTheDocument();
    expect(getByText(/Loading.../i)).toBeInTheDocument();

  });
  afterEach(cleanup);
  test('test elements before loading change', async () => {
    const {
      queryByTestId,
      queryAllByTestId,
    } = render(<App />);
    await waitForDomChange();

    const lastUpdate = queryByTestId(/last-update/i)
    expect(lastUpdate.innerHTML).toBe(`Last update at ${dateNow()}`);
    const title = queryByTestId(/title-0/i);
    expect(title).toBeInTheDocument();

    const liTitles = queryAllByTestId(/li/i);
    expect(liTitles.length).toBe(27);

  });
});


describe('Render Selects', () => {
  afterEach(cleanup);
  test('test elements selects from page', async () => {
    const {
      queryByTestId,
      getByText,
      queryAllByTestId
    } = render(<App />);
    await waitForDomChange();
    

    const selectName = queryByTestId(/select-column/i);
    fireEvent.change(selectName, { target: { value: 'frontend' } });
    expect(getByText(/Loading.../i)).toBeInTheDocument();
    const SelectedFront = getByText(/Selected: frontend/i);
    expect(SelectedFront).toBeInTheDocument();

;
    fireEvent.change(selectName, { target: { value: 'reactjs' } });
    const SelectedReact = getByText(/Selected: reactjs/i);
    expect(SelectedReact).toBeInTheDocument();

    await waitForDomChange();

    const title = queryByTestId(/title-0/i);
    expect(title).toBeInTheDocument();

    const liTitles = queryAllByTestId(/li/i);
    expect(liTitles.length).toBe(27);
  });
});


describe('Render button refresh', () => {
  afterEach(cleanup);
  test('test elements button refresh', async () => {
    const {
      queryByTestId,
      getByText,
      queryAllByTestId,
    } = render(<App />);
    await waitForDomChange();
    
    const buttonRefresh = queryByTestId(/button-refresh/i);
    expect(buttonRefresh).toBeInTheDocument();
    fireEvent.click(buttonRefresh);

    await waitForDomChange();
    
    const title = queryByTestId(/title-0/i);
    expect(title).toBeInTheDocument();

    const liTitles = queryAllByTestId(/li/i);
    expect(liTitles.length).toBe(27);
  });
});
