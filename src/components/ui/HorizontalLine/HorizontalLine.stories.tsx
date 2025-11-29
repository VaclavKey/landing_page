import type { Meta, StoryObj } from '@storybook/react-vite'
import { HorizontalLine } from './HorizontalLine'

const meta = {
  title: 'UI/HorizontalLine',
  component: HorizontalLine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HorizontalLine>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
