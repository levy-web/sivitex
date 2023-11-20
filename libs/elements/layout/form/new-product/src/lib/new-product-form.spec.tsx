import { render } from '@testing-library/react';

import NewProductForm from './new-product-form';

describe('NewProductForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewProductForm />);
    expect(baseElement).toBeTruthy();
  });
});
