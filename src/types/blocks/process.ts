export interface ProcessBlockProps {
  readonly cards: readonly ProcessCardProps[]
}

export interface ProcessCardProps {
  index: string
  title: string
  description: string
}