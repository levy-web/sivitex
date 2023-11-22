import { render } from '@testing-library/react';

import CartSlice from './cartSlice';

describe('CartSlice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartSlice />);
    expect(baseElement).toBeTruthy();
  });
});
