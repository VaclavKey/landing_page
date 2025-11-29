import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeadingAndSubheading } from './HeadingAndSubheading'

const meta = {
  title: 'UI/HeadingAndSubheading',
  component: HeadingAndSubheading,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
  },
} satisfies Meta<typeof HeadingAndSubheading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Services',
    subheading:
      'At our digital marketing agency, we offer a range of services to \nhelp businesses grow and succeed online. These services include:',
  },
}

export const LongText: Story = {
  args: {
    heading: 'Very Long Heading Text That Might Wrap',
    subheading:
      'This is a very long subheading text that demonstrates how the component handles lengthy content and wrapping behavior across different screen sizes',
  },
}
