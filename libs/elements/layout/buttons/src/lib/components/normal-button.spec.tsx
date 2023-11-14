import { render } from '@testing-library/react';

import NormalButton from './normal-button';

describe('NormalButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NormalButton />);
    expect(baseElement).toBeTruthy();
  });
});
