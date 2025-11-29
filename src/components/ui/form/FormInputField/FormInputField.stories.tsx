import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormInputField } from './FormInputField'

const meta = {
  title: 'UI/Form/FormInputField',
  component: FormInputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormInputField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input Field',
    type: 'text',
    name: 'input-field',
    placeholder: 'Input',
    value: undefined,
    onChange: () => {},
    required: false,
  },
}

export const Required: Story = {
  args: {
    label: 'Input Field',
    type: 'text',
    name: 'required-input-field',
    placeholder: 'Input',
    value: undefined,
    onChange: () => {},
    required: true,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    value: undefined,
    onChange: () => {},
    required: true,
  },
}
