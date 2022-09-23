import { styled } from '../../styles'

export const SearchContainer = styled('section', {
  width: '100%',
  maxWidth: '925px',
  height: '38px',
  borderRadius: '4px',
  background: '$white',
  display: 'flex',

  '& > input': {
    width: 'calc(100% - 42px)',
    height: '38px',
    borderRadius: '4px 0 0 4px',
    border: 'none',
    padding: '0 15px',
    boxSizing: 'border-box',
    color: '$grey800',
    fontSize: '16px',

    '&::placeholder': {
      color: '$placeholder',
    },
  },

  '& > button': {
    width: '42px',
    height: '38px',
    borderRadius: '0 4px 4px 0',
    border: 'none',
    background: '$grey100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
})
