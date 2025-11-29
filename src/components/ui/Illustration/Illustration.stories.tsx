import type { Meta, StoryObj } from '@storybook/react-vite'
import { Illustration } from './Illustration'
import illustration from '../../../assets/illustrations/cta.png'

const meta = {
  title: 'UI/Illustration',
  component: Illustration,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Illustration>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    maxWidth: 359,
    src: illustration,
    alt: 'illustration'
  }
}
