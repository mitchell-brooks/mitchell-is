import { render } from '@testing-library/react';
import { getDirectoryContent } from '@mitch/markdown';

import Building, { BuildingProps } from './index';
const buildingProps: () => BuildingProps = () => {
  const pathToContent = '_content';
  const directory = 'building';
  const contentArray = getDirectoryContent(pathToContent,  directory);
  return { contentArray };
};

describe('Building', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Building {...buildingProps()} />);
    expect(baseElement).toBeTruthy();
  });
});
