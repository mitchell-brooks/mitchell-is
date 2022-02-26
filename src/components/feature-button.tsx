import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeatureButtonProps {}

const StyledFeatureButton = styled.div`
  color: pink;
`;

export function FeatureButton(props: FeatureButtonProps) {
  return (
    <StyledFeatureButton>
      <h1>Welcome to FeatureButton!</h1>
    </StyledFeatureButton>
  );
}

export default FeatureButton;
