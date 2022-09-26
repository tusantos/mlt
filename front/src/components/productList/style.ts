import { styled } from '../../styles'

export const ProductListContainer = styled('section', {
  width: '100%',
  boxSizing: 'border-box',
  padding: '16px',
  borderRadius: '4px',
  background: '$white',
  display: 'flex',
  flexWrap: 'wrap',

  '& > .product': {
    display: 'flex',
    width: '100%',
    borderBottom: '1px solid $grey100',
    marginTop: '16px',
    position: 'relative',
    textDecoration: 'none',

    '&:first-child': {
      marginTop: '0',
    },

    '&:last-child': {
      borderBottom: 'none',
    },
  },

  '& > .product > .img': {
    marginBottom: '16px',
  },

  '& > .product > .infos': {
    marginTop: '16px',
    marginLeft: '16px',
    width: '100%',
    maxWidth: '355px',
  },

  '& > .product > .city': {
    fontSize: '12px',
    fontWeight: '300',
    position: 'absolute',
    top: '40px',
    right: '90px',
  },

  '& > .product > .infos > .priceBox': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: '400',
  },

  '& > .product > .infos > .priceBox > .icon': {
    marginLeft: '10px',
  },

  '& > .product > .infos > .priceBox > h1': {
    fontSize: '24px',
    fontWeight: '400',
  },

  '& > .product > .infos > .title': {
    fontSize: '18px',
    fontWeight: '400',
    marginTop: '32px',
  },
})
