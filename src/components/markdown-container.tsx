import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MarkdownContainerProps {
  html: string;
}

const StyledMarkdownContainer = styled.section`
  margin-right: auto;
  margin-left: auto;
  max-width: 700px;
`;

export function MarkdownContainer(props: MarkdownContainerProps) {
  return (
    <StyledMarkdownContainer
      dangerouslySetInnerHTML={{ __html: props.html }}
    ></StyledMarkdownContainer>
  );
}

export default MarkdownContainer;
