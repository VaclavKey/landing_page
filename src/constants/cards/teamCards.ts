import type { TeamCardProps } from '../../types/blocks/team'

// TEAM CARDS AVATARS
import avatar1 from '../../assets/avatars/john-smith.png'
import avatar2 from '../../assets/avatars/jane-doe.png'
import avatar3 from '../../assets/avatars/michael-brown.png'
import avatar4 from '../../assets/avatars/emily-johnson.png'
import avatar5 from '../../assets/avatars/brian-williams.png'
import avatar6 from '../../assets/avatars/sarah-kim.png'

export const TEAM_CARDS: TeamCardProps[] = [
  {
    // CARD 1
    avatar: avatar1,
    name: 'John Smith',
    position: 'CEO and Founder',
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
  },

  {
    // CARD 2
    avatar: avatar2,
    name: 'Jane Doe',
    position: 'Director of Operations',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
  },

  {
    // CARD 3
    avatar: avatar3,
    name: 'Michael Brown',
    position: 'Senior SEO Specialist',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
  },

  {
    // CARD 4
    avatar: avatar4,
    name: 'Emily Johnson',
    position: 'PPC Manager',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
  },

  {
    // CARD 5
    avatar: avatar5,
    name: 'Brian Williams',
    position: 'Social Media Specialist',
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
  },

  {
    // CARD 6
    avatar: avatar6,
    name: 'Sarah Kim',
    position: 'Content Creator',
    description: `2+ years of experience in writing and editing \nSkilled in creating compelling, SEO-optimized content for various industries`,
  },
]
