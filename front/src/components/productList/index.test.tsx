import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductListComponent } from './index'

describe('ProductList component', () => {
  it('renders correctly', () => {
    render(<ProductListComponent />)

    expect(screen.getByTestId('productListComponent')).toBeInTheDocument()
  })
  it('renders with products correctly', () => {
    const productsMock = [
      {
        id: 'id1',
        title: 'title1',
        price: {
          currency: 'currency1',
          amount: 100,
          decimals: 100.0,
          format: '$ 100,00',
        },
        picture: 'https://http2.mlstatic.com/D_698891-MLA50817265580_072022-L.jpg',
        condition: 'condition1',
        free_shipping: true,
      },
    ]
    render(<ProductListComponent products={productsMock} />)

    const handleLink = screen.getByTestId('productid1')
    const handlePicture = screen.getByTestId('productid1-picture')
    const handlePrice = screen.getByTestId('productid1-price').textContent
    const handleShipping = screen.getByTestId('productid1-shipping')
    const handleTitle = screen.getByTestId('productid1-title').textContent

    expect(handleLink).toHaveAttribute('href', '/items/id1')
    expect(handlePicture).toBeInTheDocument()
    expect(handlePrice).toBe('$ 100,00')
    expect(handleShipping).toBeInTheDocument()
    expect(handleTitle).toBe('title1')
  })
})
