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
})

export const PageContainer = styled('section', {
  width: '100%',
  maxWidth: '1000px',
  padding: '0px 10px',
  margin: '0 auto',
})
