import { render } from '@testing-library/react';

import CartBanner from './cart-banner';

describe('CartBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartBanner />);
    expect(baseElement).toBeTruthy();
  });
});
