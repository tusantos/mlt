import { styled } from '../../styles'

export const Header = styled('header', {
  width: '100%',
  height: '56px',
  background: '$yellow500',
  display: 'flex',
  alignItems: 'center',
})

export const HeaderContainer = styled('section', {
  width: '100%',
  height: '38px',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0px 10px',
  display: 'flex',
  justifyContent: 'space-between',

  '& > .logo': {
    marginRight: '26px',
  },
})
