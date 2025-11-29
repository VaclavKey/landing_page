import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrowserRouter } from 'react-router-dom'
import { FooterBlock } from '../ui/FooterBlock'

const meta = {
  title: 'Blocks/FooterBlock',
  component: FooterBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof FooterBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
