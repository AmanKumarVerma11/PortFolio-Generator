import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the app", () => {
  render(<App />);
  const Element = screen.getByText(/portfolio/i);
  expect(Element).toBeInTheDocument();
});