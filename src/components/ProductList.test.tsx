import ProductList from './ProductList';
import { render } from '@testing-library/react';

describe('test ProductList component', () => {
  it('test render ProductList content into dom', () => {
    const { container } = render(<ProductList />);
    expect(container).toBeInTheDocument();
  });
});
