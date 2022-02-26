import styled from 'styled-components';
import Image from 'next/image';
import { layoutProps } from '../../_content/_props';

// import { layoutProps } from '@mitchell-is/content';
import { Layout, SmartLink } from '@mitch/shared/ui';
import { MarkdownDocument, getDirectoryContent } from '@mitch/markdown';
import { join } from 'path';
/* eslint-disable-next-line */
export interface BuildingProps {
  contentArray: MarkdownDocument[];
}
const directory = 'building';
const pathToContent = 'apps/mitchell-is/_content';
// const pathToContent = require.resolve('@mitchell-is/content');

const image = async () => {
  let image = await import('apps/mitchell-is/_content/assets/images/graph.png');
  console.log(image);
};
image();
const StyledBuilding = styled.div``;

const ProjectsContainer = styled.section`
  display: flex;
`;
const ProjectCard = styled.article``;

const contentDirectory = '_content/assets/images';

export function Building(props: BuildingProps) {
  console.log(props);
  return (
    <Layout {...layoutProps}>
      <StyledBuilding>
        <h1>Here are some projects I've worked on:</h1>
        <ProjectsContainer>
          {props.contentArray?.map((contentObj) => {
            console.log(contentObj);
            // const imgSrc = require('../../../../_content/assets/images/graph.png');
            const imgSrc = join(contentDirectory, contentObj.frontMatter.image);
            return (
              <ProjectCard key={contentObj.frontMatter.slug}>
                <Image
                  src={`/${contentObj.frontMatter.image}`}
                  width="100px"
                  height="100px"
                />
                <SmartLink url={`/${directory}/${contentObj.frontMatter.slug}`}>
                  {contentObj.frontMatter.title}
                </SmartLink>
                <br />
                <span>{contentObj.frontMatter.description}</span>
                <br />
              </ProjectCard>
            );
          })}
        </ProjectsContainer>
      </StyledBuilding>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentArray: MarkdownDocument[] = getDirectoryContent(
    pathToContent,
    directory
  );
  //  for (const c of contentArray) {
  //    let image = await import(c.frontMatter.image);
  //    c.frontMatter.image = image.src;
  //  }
  return { props: { contentArray } };
}
export default Building;
