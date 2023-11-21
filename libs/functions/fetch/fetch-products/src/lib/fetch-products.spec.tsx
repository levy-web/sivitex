import { render } from '@testing-library/react';

import FetchProducts from './fetch-products';

describe('FetchProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FetchProducts />);
    expect(baseElement).toBeTruthy();
  });
});
