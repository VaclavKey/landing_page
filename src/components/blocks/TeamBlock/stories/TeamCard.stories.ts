import type { Meta, StoryObj } from '@storybook/react-vite'
import { TeamCard } from '../ui/TeamCard'
import { TEAM_CARDS } from '../../../../constants/cards/teamCards'

const meta = {
  title: 'Blocks/TeamCard',
  component: TeamCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TeamCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...TEAM_CARDS[0],
  },
}
