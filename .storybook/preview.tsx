import type { Decorator, Preview } from '@storybook/react-vite'
import '../src/styles/index.scss'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  width: 100vw;
  margin: 0 auto;
  padding: 3.75em 6.25em 0em 6.25em;

  @media (max-width: 1281px) {
    padding: 2.5em 3em 0em 3em;
  }
  @media (max-width: 835px) {
    padding: 1.5em 1em 0em 1em;
  }
  @media (max-width: 415px) {
    padding: 1em 0.5em 0em 0.5em;
  }
`

const withContainer: Decorator = (Story) => (
  <Container>
    <Story />
  </Container>
)

const preview: Preview = {
  parameters: {
    actions: { artTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withContainer],
}

export default preview
