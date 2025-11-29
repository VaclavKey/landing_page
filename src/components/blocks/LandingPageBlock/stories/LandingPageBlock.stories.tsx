import type { Meta, StoryObj } from '@storybook/react-vite'
import { LandingPageBlock } from '../ui/LandingPageBlock'

const meta = {
  title: 'Blocks/LandingPageBlock',
  component: LandingPageBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LandingPageBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
