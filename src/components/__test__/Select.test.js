import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../Select';

const mockOnChange = jest.fn()


describe("Unit tests for Select", () => {
  
  it('expect select element to be in the DOM', () => {
    render(
      <Select />
    );
    const select = screen.getByText('All Countries');
    expect(select).toBeInTheDocument();
  });

  it('expect select element to change its value when one of its option is selected', () => {
    render(
      <Select onChange={mockOnChange}/>
    );
    const select = screen.getByText('All Countries');
    fireEvent.change(select, { target: { value: "Earth" }});
    expect(select.value).toBe("Earth");
  }); 
});

