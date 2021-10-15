import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../Filters';

const mockOnChange = jest.fn()

describe("Unit tests for Filters", () => {
  
  it('expect input to be in the DOM', () => {
    render(
      <Filters />
    );
    const inpElement = screen.getByPlaceholderText("Search for a country...");
    expect(inpElement).toBeInTheDocument();
  });
  
  it('expect inp element to change its value when user try searching for a country', () => {
    render(
      <Filters onChange={mockOnChange}/>
      );
    const inpElement = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(inpElement, { target: { value: "Middle Earth" }});
    expect(inpElement.value).toBe("Middle Earth");
  }); 
});

