export interface TeamBlockProps {
  readonly cards: readonly TeamCardProps[]
}

export interface TeamCardProps {
  avatar: string
  name: string
  position: string
  description: string
}