import styled from 'styled-components';
import { Footer, FooterProps, Nav, NavProps, SEO } from '@mitch/shared/ui';
import React from 'react';
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav';

/* eslint-disable-next-line */
export interface LayoutProps {
  navProps: NavProps;
  footerProps: FooterProps;
  children: React.ReactElement;
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  height: 100%;
`;

export function Layout(props: LayoutProps) {
  return (
    <Container>
      <SkipNavLink />
      <Nav {...props.navProps} />
      <SkipNavContent />
      <Main>{props.children}</Main>
      <Footer {...props.footerProps} />
    </Container>
  );
}

export default Layout;
