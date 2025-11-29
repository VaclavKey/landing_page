import type { HeadingAndSubheadingProps } from '../types/components'

type HeadingKey = 'services' | 'caseStudies' | 'process' | 'team' | 'testimonials' | 'contact'

export const HEADINGS_AND_SUBHEADINGS: Record<HeadingKey, HeadingAndSubheadingProps> = {
  services: {
    heading: 'Services',
    subheading:
      'At our digital marketing agency, we offer a range of services to \nhelp businesses grow and succeed online. These services include:',
  },

  caseStudies: {
    heading: 'Case Studies',
    subheading:
      'Explore Real-Life Examples of Our Proven Digital Marketing \nSuccess through Our Case Studies',
  },

  process: {
    heading: 'Our Working Process',
    subheading: 'Step-by-Step Guide to Achieving \nYour Business Goals',
  },

  team: {
    heading: 'Team',
    subheading:
      'Meet the skilled and experienced team behind our \nsuccessful digital marketing strategies',
  },

  testimonials: {
    heading: 'Testimonials',
    subheading:
      'Hear from Our Satisfied Clients: Read Our Testimonials \nto Learn More about Our Digital Marketing Services',
  },

  contact: {
    heading: 'Contact Us',
    subheading: "Connect with Us: Let's Discuss Your \nDigital Marketing Needs",
  },
}
