import { render } from '@testing-library/react';

import CarouselComponent from './carousel-component';

describe('CarouselComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CarouselComponent />);
    expect(baseElement).toBeTruthy();
  });
});
