import { render } from '@testing-library/react';

import ProductBanner from './product-banner';

describe('ProductBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductBanner />);
    expect(baseElement).toBeTruthy();
  });
});
