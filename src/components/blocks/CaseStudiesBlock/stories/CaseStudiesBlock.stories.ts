import type { Meta, StoryObj } from '@storybook/react-vite'
import { CaseStudiesBlock } from '../ui/CaseStudiesBlock'
import { CASE_STUDY_CARDS } from '../../../../constants/cards/caseStudyCards'

const meta = {
  title: 'Blocks/CaseStudiesBlock',
  component: CaseStudiesBlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CaseStudiesBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: CASE_STUDY_CARDS,
  },
}
