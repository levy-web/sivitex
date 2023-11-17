import { render } from '@testing-library/react';

import CarouselBanner from './carousel-banner';

describe('CarouselBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CarouselBanner />);
    expect(baseElement).toBeTruthy();
  });
});
