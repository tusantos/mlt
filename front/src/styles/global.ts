import { globalCss, styled } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$grey100',
  },

  'textarea:focus, input:focus': {
    outline: 'none',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  'h1, h2, h3, h4, h5': {
    color: '$grey800',
  },
})
