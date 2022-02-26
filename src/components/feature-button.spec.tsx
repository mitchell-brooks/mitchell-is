import { render } from '@testing-library/react';

import FeatureButton from './feature-button';

describe('FeatureButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureButton />);
    expect(baseElement).toBeTruthy();
  });
});
