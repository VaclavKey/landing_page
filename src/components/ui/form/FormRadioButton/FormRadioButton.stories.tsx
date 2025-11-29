import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormRadioButton } from './FormRadioButton'

const meta = {
  title: 'UI/Form/FormRadioButton',
  component: FormRadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormRadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Radio Button',
    name: 'radio-button',
    value: undefined,
    checked: undefined,
    onChange: () => {},
  },
}
