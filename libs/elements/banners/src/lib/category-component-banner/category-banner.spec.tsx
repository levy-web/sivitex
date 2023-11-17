import { render } from '@testing-library/react';

import CategoryBanner from './category-banner';

describe('CategoryBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryBanner />);
    expect(baseElement).toBeTruthy();
  });
});
