import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';
import App from '../../App';


describe("Unit tests for Button", () => {
  
  it('expect button element when passed a certain label to be in the DOM', () => {
    render(
      <Button label='button'/>
    );
    const btnElem = screen.getByText(/button/i)
    expect(btnElem).toBeInTheDocument();
  });
  
  it('does not expect multiple button element when passed a certain label to be in the DOM', () => {
    render(
      <Button label='button'/>
    );
    const btnElem = screen.getAllByRole('button')
    expect(btnElem.length).toBe(1);
  });
  
  it('expect button element when passed a className to be in the DOM', () => {
    render(
      <Button label='Dark Mode' btnClassName='class'/>
    );
    const btnElem = screen.getByTestId('btn-1');
    expect(btnElem).toBeInTheDocument();
  });
  
});


describe("Integrative tests for Button", () => {
  
  it(`expect App component to have a darmode class if 
      button with Dark Mode text is clicked`, () => {
    render(
      <App />
    );
    const btnElem = screen.getByText(/Dark Mode/i)
    fireEvent.click(btnElem)
    const divApp = screen.getByTestId('App-test');
    expect(divApp).toHaveClass('darkmode');
  });

  it(`expect App component NOT to have a darmode class if 
      button with Dark Mode text is clicked to add darkmode class
      and clicked again to remove that class`, () => {
    render(
      <App />
    );
    const btnElem = screen.getByText(/Dark Mode/i)
    fireEvent.click(btnElem)
    fireEvent.click(btnElem)
    const divApp = screen.getByTestId('App-test');
    expect(divApp).not.toHaveClass('darkmode');
  });
});

