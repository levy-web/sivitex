import { render } from '@testing-library/react';

import ProductComponent from './product-component';

describe('ProductComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductComponent />);
    expect(baseElement).toBeTruthy();
  });
});
