import { styled } from '../../styles'

export const ProductContainer = styled('section', {
  width: '100%',
  boxSizing: 'border-box',
  padding: '32px',
  borderRadius: '4px',
  background: '$white',
  display: 'flex',
  flexWrap: 'wrap',

  '& > .header-infos': {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  '& > .header-infos > .infos': {
    width: '280px',
  },

  '& > .header-infos > .infos > .sold': {
    fontSize: '14px',
    fontWeight: '300',
    marginBottom: '16px',
  },

  '& > .header-infos > .infos > .title': {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '32px',
  },

  '& > .header-infos > .infos > .price': {
    fontSize: '46px',
    fontWeight: '400',
    marginBottom: '32px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '& > .header-infos > .infos > .cta': {
    width: '100%',
    height: '44px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '400',
    color: '$white',
    border: 'none',
    background: '$blue500',
  },

  '& > .header-infos > .img': {
    width: '100%',
    maxWidth: '620px',
  },

  '& > .footer-infos': {
    width: '100%',
    maxWidth: '680px',
    marginTop: '32px',
  },

  '& > .footer-infos > .title': {
    fontSize: '28px',
    fontWeight: '300',
    marginBottom: '32px',
  },

  '& > .footer-infos > .description': {
    fontSize: '16px',
    fontWeight: '300',
    color: '$grey300',
    whiteSpace: 'pre-line',
  },
})
