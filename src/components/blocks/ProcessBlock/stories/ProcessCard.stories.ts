import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProcessCard } from '../ui/ProcessCard'
import { PROCESS_CARDS } from '../../../../constants/cards/processCards'

const meta = {
  title: 'Blocks/ProcessCard',
  component: ProcessCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProcessCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...PROCESS_CARDS[0],
  },
}
