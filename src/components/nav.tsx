import Link from 'next/link';
import { ReactElement } from 'react';
import styled from 'styled-components';
import SmartLink, { LinkProps } from '../smart-link/smart-link';

/* eslint-disable-next-line */
export interface NavProps {
  home: LinkProps & HomeLinkProps;
  navListItems: NavListItems;
}

interface NavListItem extends LinkProps {
  icon?: string | null;
}

interface NavListItems extends Array<NavListItem> {}

export interface HomeLinkProps {
  defaultContent: string;
  hoverContent: string;
}

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: var(--nav-background-primary);
  border-bottom: 1px solid var(--nav-background-shadow);
`;

const HomeLink = styled.span<HomeLinkProps>`
  & > a,
  & > Link {
    font-family: 'Verlag';
    font-weight: 900;
    color: var(--color-primary);
    text-decoration: none;
    padding-left: 8px;
    &:not(hover) {
      &::after {
        content: ${(props) => `"${props.defaultContent}"`};
      }
    }
    &:hover {
      &::after {
        color: var(--color-accent);
        content: ${(props) => `"${props.hoverContent}"`};
      }
    }
  }
`;

const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding-right: 20px;
  list-style-type: none;
`;

const ProfileIconsContainer = styled.ul`
  display: flex;
  flex-direction: row;
`;
const ProfileIcon = styled.li``;

const NavItem = styled.li`
  padding: 0 10px;
  font-family: 'Verlag';
  font-weight: 900;
  & > a,
  & > Link {
    text-decoration: none;
    color: var(--color-primary);
    :hover {
      color: var(--color-accent);
    }
  }
`;

export function Nav({ home, navListItems }: NavProps) {
  const navItems = navListItems?.map((item) => {
    return (
      <NavItem key={item.url}>
        <SmartLink {...item} />
      </NavItem>
    );
  });
  return (
    <StyledNav>
      <HomeLink
        defaultContent={home?.defaultContent}
        hoverContent={home?.hoverContent}
      >
        <SmartLink {...home} />
      </HomeLink>
      <NavItemsContainer>{navItems}</NavItemsContainer>
    </StyledNav>
  );
}

export default Nav;
