import { render } from '@testing-library/react';

import SmartLink from './smart-link';

describe('SmartLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmartLink />);
    expect(baseElement).toBeTruthy();
  });
});
