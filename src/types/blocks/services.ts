export interface ServicesBlockProps {
  readonly cards: readonly ServiceCardProps[]
}

export interface ServiceCardProps {
  cardBackgroundColor: string
  textBackgroundColor: string
  buttonArrowInnerColor: string
  buttonArrowOuterColor: string
  buttonTextColor: string
  image: string
  readonly texts: readonly string[]
}
