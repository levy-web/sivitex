import { render } from '@testing-library/react';

import Texts from './texts';

describe('Texts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Texts />);
    expect(baseElement).toBeTruthy();
  });
});
