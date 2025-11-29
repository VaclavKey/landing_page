import type { ServiceCardProps } from '../../types/blocks/services'
// SERVICE CARDS IMAGES
import serviceCardImage1 from '../../assets/illustrations/cards/search-engine-optimization.png'
import serviceCardImage2 from '../../assets/illustrations/cards/pay-per-click-advertising.png'
import serviceCardImage3 from '../../assets/illustrations/cards/social-media-marketing.png'
import serviceCardImage4 from '../../assets/illustrations/cards/email-marketing.png'
import serviceCardImage5 from '../../assets/illustrations/cards/content-creation.png'
import serviceCardImage6 from '../../assets/illustrations/cards/analytics-and-tracking.png'

export const SERVICE_CARDS: ServiceCardProps[] = [
  {
    // CARD 1
    cardBackgroundColor: '#F3F3F3',
    textBackgroundColor: '#B9FF66',
    buttonArrowInnerColor: '#B9FF66',
    buttonArrowOuterColor: '#191A23',
    buttonTextColor: '#000000',
    image: serviceCardImage1,
    texts: ['Search engine', 'optimization'],
  },

  {
    // CARD 2
    cardBackgroundColor: '#B9FF66',
    textBackgroundColor: '#F3F3F3',
    buttonArrowInnerColor: '#B9FF66',
    buttonArrowOuterColor: '#191A23',
    buttonTextColor: '#000000',
    image: serviceCardImage2,
    texts: ['Pay-per-click', 'advertising'],
  },

  {
    // CARD 3
    cardBackgroundColor: '#191A23',
    textBackgroundColor: '#F3F3F3',
    buttonArrowInnerColor: '#191A23',
    buttonArrowOuterColor: '#F3F3F3',
    buttonTextColor: '#FFFFFF',
    image: serviceCardImage3,
    texts: ['Social Media', 'Marketing'],
  },

  {
    // CARD 4
    cardBackgroundColor: '#F3F3F3',
    textBackgroundColor: '#B9FF66',
    buttonArrowInnerColor: '#B9FF66',
    buttonArrowOuterColor: '#191A23',
    buttonTextColor: '#191A23',
    image: serviceCardImage4,
    texts: ['Email', 'Marketing'],
  },

  {
    // CARD 5
    cardBackgroundColor: '#B9FF66',
    textBackgroundColor: '#F3F3F3',
    buttonArrowInnerColor: '#B9FF66',
    buttonArrowOuterColor: '#191A23',
    buttonTextColor: '#000000',
    image: serviceCardImage5,
    texts: ['Content', 'Creation'],
  },

  {
    // CARD 6
    cardBackgroundColor: '#191A23',
    textBackgroundColor: '#B9FF66',
    buttonArrowInnerColor: '#191A23',
    buttonArrowOuterColor: '#F3F3F3',
    buttonTextColor: '#FFFFFF',
    image: serviceCardImage6,
    texts: ['Analytics and', 'Tracking'],
  },
]
