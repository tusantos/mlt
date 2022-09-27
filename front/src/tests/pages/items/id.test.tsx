import { describe, expect, it, vitest } from 'vitest'
import { render, screen } from '@testing-library/react'
import PageProps, { getStaticProps } from '../../../pages/items/[id]'
import { getProduct } from '../../../services/mercadolivre'

vitest.mock('next/router', () => {
  return {
    useRouter() {
      return {}
    },
  }
})

vitest.mock('../../../services/mercadolivre')

describe('Product search page', () => {
  it('renders correctly', () => {
    render(<PageProps />)

    expect(screen.getByTestId('headerComponent')).toBeInTheDocument()
    expect(screen.getByTestId('searchBoxComponent')).toBeInTheDocument()
    expect(screen.getByTestId('breadcrumbComponent')).toBeInTheDocument()
    expect(screen.getByTestId('productPage')).toBeInTheDocument()
    expect(screen.getByText('Produto não encontrado')).toBeInTheDocument()
  })
  it('load product data', async () => {
    const mockedGetProduct = await vitest.mocked(getProduct)
    const mockRequestDataProduct = {
      author: {
        name: 'Arthur',
        lastname: 'Santos',
      },
      item: {
        id: 'MLA838504614',
        title: 'Peluches Pokemon Go 20 Cm Varios Modelos Pikachu Pokemones',
        price: {
          currency: 'ARS',
          amount: 1989,
          decimals: 1989,
          format: '$ 1.989,00',
        },
        picture: 'https://http2.mlstatic.com/D_668216-MLA48876225229_012022-L.jpg',
        condition: 'new',
        free_shipping: false,
        sold_quantity: 1872,
        description: 'description',
        categories: ['Juegos y Juguetes', 'Peluches'],
      },
    }
    mockedGetProduct.mockResolvedValueOnce(mockRequestDataProduct)

    const response = await getStaticProps({
      params: {
        id: 'MLA838504614',
      },
    })

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: mockRequestDataProduct,
        },
      })
    )
  })
})
