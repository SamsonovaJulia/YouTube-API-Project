import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search inputs", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("searchWrapper").length).toBe(1);
});

test("renders search inputs", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("searchWrapper").length).toBe(1);
});

test("renders search inputs", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("searchWrapper").length).toBe(1);
});
