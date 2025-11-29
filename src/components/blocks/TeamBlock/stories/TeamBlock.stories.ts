import type { Meta, StoryObj } from '@storybook/react-vite'
import { TeamBlock } from '../ui/TeamBlock'
import { TEAM_CARDS } from '../../../../constants/cards/teamCards'

const meta = {
  title: 'Blocks/TeamBlock',
  component: TeamBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TeamBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: TEAM_CARDS,
  },
}

export const SingleCard: Story = {
  args: {
    cards: [TEAM_CARDS[0]],
  },
}
