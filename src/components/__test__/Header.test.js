import { render, screen } from '@testing-library/react';
import Header from '../Header';


describe("Unit tests for Header", () => {
  
  it('expect an h1 element to be in the DOM', () => {
    render(
      <Header heading="h1-tag"/>
    );
    const heading = screen.getByText(/h1-tag/i)
    expect(heading).toBeInTheDocument();
  });
});


