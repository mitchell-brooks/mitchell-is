import fs from 'fs'
import path from 'path'
import { getParsedFileContentByFilename, MarkdownDocument } from '.'

export function getDirectoryContent(pathToContent: string, directory: string): MarkdownDocument[] {
  const fullPath = path.join(pathToContent, directory)
  const fileNames: string[] = fs.readdirSync(fullPath)
  const directoryContent = fileNames?.map(filename => {
    return getParsedFileContentByFilename(filename, fullPath)
  })

  // Read markdown file as string
  return directoryContent
}
