import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormTextAreaField } from './FormTextAreaField'

const meta = {
  title: 'UI/Form/FormTextAreaField',
  component: FormTextAreaField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormTextAreaField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Textarea',
    name: 'textarea',
    placeholder: 'Textarea',
    rows: 5,
    value: undefined,
    onChange: () => {},
    required: false,
  },
}

export const Required: Story = {
  args: {
    label: 'Textarea',
    name: 'required-textarea',
    placeholder: 'Textarea',
    rows: 5,
    value: undefined,
    onChange: () => {},
    required: true,
  },
}
