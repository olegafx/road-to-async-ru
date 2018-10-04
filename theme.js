import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
  ...theme,
  prism: {
    style: okaidia
  },
  paragraph: {
    fontSize: '2rem',
    textAlign: 'left'
  },
  h1: {
    fontSize: '4rem'
  },
  transitionDuration: '.0s'
}