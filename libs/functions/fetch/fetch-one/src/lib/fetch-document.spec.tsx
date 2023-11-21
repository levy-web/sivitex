import { render } from '@testing-library/react';

import FetchDocument from './fetch-document';

describe('FetchDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FetchDocument />);
    expect(baseElement).toBeTruthy();
  });
});
