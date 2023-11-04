import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us page", () => {
  test("Should load contact us component", () => {
    render(<ContactUs />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Submit button present", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input", () => {
    render(<ContactUs />);

    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });
});
