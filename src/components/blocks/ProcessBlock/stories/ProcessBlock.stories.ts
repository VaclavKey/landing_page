import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProcessBlock } from '../ui/ProcessBlock'
import { PROCESS_CARDS } from '../../../../constants/cards/processCards'

const meta = {
  title: 'Blocks/ProcessBlock',
  component: ProcessBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProcessBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: PROCESS_CARDS,
  },
}

export const SingleCard: Story = {
  args: {
    cards: [PROCESS_CARDS[0]],
  },
}
