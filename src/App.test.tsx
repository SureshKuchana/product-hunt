import App from './App';
import { render } from '@testing-library/react';

describe('test App component', () => {
  it('test render app content into dom', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
