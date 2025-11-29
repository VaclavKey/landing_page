import type { Meta, StoryObj } from '@storybook/react-vite'
import { ServiceCard } from '../ui/ServiceCard'
import { SERVICE_CARDS } from '../../../../constants/cards/serviceCards'

const meta = {
  title: 'Blocks/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...SERVICE_CARDS[0],
  },
}
