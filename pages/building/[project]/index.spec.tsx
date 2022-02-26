import { render } from '@testing-library/react';

import Project from './index';

describe('Project', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Project />);
    expect(baseElement).toBeTruthy();
  });
});
