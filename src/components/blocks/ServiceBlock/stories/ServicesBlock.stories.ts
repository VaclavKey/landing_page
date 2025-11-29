import type { Meta, StoryObj } from '@storybook/react'
import { ServicesBlock } from '../ui/ServicesBlock'
import { SERVICE_CARDS } from '../../../../constants/cards/serviceCards'

const meta = {
  title: 'Blocks/ServicesBlock',
  component: ServicesBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServicesBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: SERVICE_CARDS,
  },
}

export const SingleCard: Story = {
  args: {
    cards: [SERVICE_CARDS[0]],
  },
}
