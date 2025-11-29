import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactBlock } from './ContactBlock'

const meta = {
  title: 'Blocks/ContactBlock',
  component: ContactBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
