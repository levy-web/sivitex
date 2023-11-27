import { render } from '@testing-library/react';

import PayItem from './pay-item';

describe('PayItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PayItem />);
    expect(baseElement).toBeTruthy();
  });
});
