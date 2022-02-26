import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import slugify from 'slugify'
import { markdownToHtml } from './markdown-to-html'
import type { MarkdownDocument } from './types'

export const getParsedFileContentBySlug = (slug: string, postsPath: string): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.mdx`)
  const fileContents = fs.readFileSync(postFilePath)
  const { data, content } = matter(fileContents)

  return {
    frontMatter: data,
    content,
  }
}

export const getParsedFileContentByFilename = (filename: string, postsPath: string): MarkdownDocument => {
  const postFilePath = join(postsPath, filename)
  const contentPath = 'apps/mitchell-is/_content'
  const imagesPath = 'assets/images'
  const fileContents = fs.readFileSync(postFilePath)
  const { data, content } = matter(fileContents)
  const slug = data.slug ? data.slug : slugify(filename.replace(/\.[^/.]+$/, ''))
  const image = join(contentPath, imagesPath, data.image)
  return {
    frontMatter: { ...data, image, slug },
    content,
  }
}

export const renderMarkdown = async (markdownContent: string): Promise<string> => {
  return await markdownToHtml(markdownContent || '')
}
