import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormSubmitButton } from './FormSubmitButton'

const meta = {
  title: 'UI/Form/FormSubmitButton',
  component: FormSubmitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormSubmitButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Send message',
  },
}
