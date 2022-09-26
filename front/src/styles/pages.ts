import { styled } from '.'

export const PageContainer = styled('section', {
  width: '100%',
  boxSizing: 'border-box',
  maxWidth: '1000px',
  padding: '0px 10px',
  margin: '0 auto',

  '& > .breadcrumb': {
    margin: '16px 0',
  },
})
