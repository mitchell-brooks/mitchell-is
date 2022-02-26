import styled from 'styled-components';

/* eslint-disable-next-line */
interface Copyright {
  year?: string | undefined;
  holder?: string | undefined;
}

export interface FooterProps {
  copyright?: Copyright;
}

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: auto;
  background-color: var(--nav-background-primary);
  border-top: 1px solid var(--nav-background-shadow);
  font-family: var(--text-font-family-nav);
  font-weight: var(--text-font-weight-nav);
  color: var(--text-color-nav);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CopyrightContainer = styled.span``;

export function Footer(props: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <section>
        <CopyrightContainer>
          ©{props.copyright?.year || year} {props.copyright?.holder}
        </CopyrightContainer>
      </section>
    </StyledFooter>
  );
}

export default Footer;
