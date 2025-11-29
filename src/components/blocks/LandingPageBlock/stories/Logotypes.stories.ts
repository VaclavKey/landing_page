import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logotypes } from '../ui/Logotypes'

const meta = {
  title: 'Blocks/Logotypes',
  component: Logotypes,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logotypes>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
