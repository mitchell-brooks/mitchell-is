import { getDirectoryContent, getParsedFileContentBySlug, MarkdownDocument } from '@markdown'
import { MarkdownContainer } from '~/components/markdown-container'
import { join } from 'path'
import styled from 'styled-components'
const directory = 'building'
const pathToContent = 'apps/mitchell-is/_content'
const fullPath = join(pathToContent, directory)
/* eslint-disable-next-line */
export interface ProjectProps extends MarkdownDocument {}

const StyledProject = styled.div`
  color: pink;
`

export function Project(props: ProjectProps) {
  const {
    content: html,
    frontMatter: { title, date, description },
  } = props
  console.log('props:::', props)
  return (
    <>
      <StyledProject>
        <h1>Welcome to {title}!</h1>
      </StyledProject>
      <MarkdownContainer html={html} />
    </>
  )
}

export default Project

export async function getStaticPaths() {
  const contentArray = getDirectoryContent(pathToContent, directory)
  const paths = contentArray.map(({ frontMatter }) => {
    const { slug: project, draft } = frontMatter
    if (!draft) {
      return { params: { project } }
    }
    return
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const content = getParsedFileContentBySlug(params.project, fullPath)
  console.log('content', content)
  return { props: { ...content } }
}
