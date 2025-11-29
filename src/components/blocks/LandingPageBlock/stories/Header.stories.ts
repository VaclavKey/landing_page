import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from '../ui/Header'

const meta = {
  title: 'Blocks/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
