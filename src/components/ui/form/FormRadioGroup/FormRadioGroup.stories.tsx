import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormRadioGroup } from './FormRadioGroup'

const meta = {
  title: 'UI/Form/FormRadioGroup',
  component: FormRadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    buttons: [
      {
        label: 'Say hi',
        name: 'inquiryType',
        value: 'say-hi',
        checked: undefined,
        onChange: () => {},
      },
      {
        label: 'Get a Quote',
        name: 'inquiryType',
        value: 'get-quote',
        checked: undefined,
        onChange: () => {},
      },
    ],
    style: { display: 'flex', gap: '2em'}
  },
}
