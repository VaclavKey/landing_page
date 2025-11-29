import type { Meta, StoryObj } from '@storybook/react-vite'
import { CaseStudyCard } from '../ui/CaseStudyCard'
import { CASE_STUDY_CARDS } from '../../../../constants/cards/caseStudyCards'

const meta = {
  title: 'Blocks/CaseStudyCard',
  component: CaseStudyCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CaseStudyCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...CASE_STUDY_CARDS[0],
  },
}
