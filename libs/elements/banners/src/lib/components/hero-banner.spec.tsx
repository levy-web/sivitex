import { render } from '@testing-library/react';

import HeroBanner from './hero-banner';

describe('HeroBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroBanner />);
    expect(baseElement).toBeTruthy();
  });
});
