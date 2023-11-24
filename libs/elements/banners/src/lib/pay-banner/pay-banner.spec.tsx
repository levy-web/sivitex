import { render } from '@testing-library/react';

import PayBanner from './pay-banner';

describe('PayBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PayBanner />);
    expect(baseElement).toBeTruthy();
  });
});
