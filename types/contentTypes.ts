export type ContentType = 'pageTitle'

export type Page = {
  title: string
  body: BodySection[]
}

export type BodySection = ContentTypes[]

export type ContentText = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph'
  content: string
}

export type ContentList = {
  type: 'ul' | 'ol'
  content: string[]
}

export type ContentTypes = ContentText | ContentList
