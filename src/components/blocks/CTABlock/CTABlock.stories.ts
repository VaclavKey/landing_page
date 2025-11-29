import type { Meta, StoryObj } from '@storybook/react-vite'
import { CTABlock } from './CTABlock'

const meta = {
  title: 'Blocks/CTABlock',
  component: CTABlock,
  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof CTABlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
