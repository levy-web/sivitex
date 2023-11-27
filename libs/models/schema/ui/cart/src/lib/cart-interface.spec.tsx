import { render } from '@testing-library/react';

import CartInterface from './cart-interface';

describe('CartInterface', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartInterface />);
    expect(baseElement).toBeTruthy();
  });
});
