import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('counter init value is 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");

});

test('plus button has text value "+"', () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");

});

test('minus button has text value "-"', () => {
  render(<App/>);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test('plus button click event', () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  fireEvent.click(plusButtonElement);
  const counterButton = screen.getByTestId("counter");
  expect(counterButton).toHaveTextContent(1);
});

test("minus button click event", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  fireEvent.click(minusButtonElement);
  const counterButton = screen.getByTestId("counter");
  expect(counterButton).toHaveTextContent(-1)
});

test("on/off button's color is blue?", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on-off-button");
  expect(onOffButtonElement).toHaveStyle('background-color: blue');
});

test("on/off button click plus button disabled", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on-off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});