import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

//Grouping test cases using describe block.
describe("Contact Us Page Test Cases", ()=>{
  it("Should render Contact Us Component", () => {
  render(<Contact />);
  
  const heading = screen.getByRole("heading");

  // assertion
  expect(heading).toBeInTheDocument();
});


it("Should render button in the Contact Us Component", () => {
  render(<Contact />);
  
  const button = screen.getByText("Submit");

  // assertion
  expect(button).toBeInTheDocument();
});

});