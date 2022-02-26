import { render } from '@testing-library/react';

import MarkdownContainer from './markdown-container';

describe('MarkdownContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarkdownContainer />);
    expect(baseElement).toBeTruthy();
  });
});
