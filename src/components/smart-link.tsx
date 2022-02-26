import Link from 'next/link';
import { ReactElement } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LinkProps {
  url: string;
  title?: string;
  external?: boolean;
  children?: undefined | string | ReactElement | ReactElement[];
}

const StyledSmartLink = styled.div`
  color: pink;
`;

export const SmartLink = ({
  external = false,
  url,
  title,
  children,
  ...args
}: LinkProps): ReactElement => {
  const regEx = /^http/;
  if (regEx.test(url)) {
    external = true;
  }
  return external ? (
    <a href={url} {...args}>
      {children || title || url}
    </a>
  ) : (
    <Link href={url} {...args}>
      {children || title || url}
    </Link>
  );
};

export default SmartLink;
