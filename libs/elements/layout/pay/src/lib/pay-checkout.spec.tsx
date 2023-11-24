import { render } from '@testing-library/react';

import PayCheckout from './pay-checkout';

describe('PayCheckout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PayCheckout />);
    expect(baseElement).toBeTruthy();
  });
});
