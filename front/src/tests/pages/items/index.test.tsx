import { describe, expect, it, vitest } from 'vitest'
import { render, screen } from '@testing-library/react'
import SearchPage, { getServerSideProps } from '../../../pages/items'
import { queryProducts } from '../../../services/mercadolivre'

vitest.mock('next/router', () => {
  return {
    useRouter() {
      return {}
    },
  }
})

vitest.mock('../../../services/mercadolivre')

describe('Items search page', () => {
  it('renders correctly', () => {
    render(<SearchPage />)

    expect(screen.getByTestId('headerComponent')).toBeInTheDocument()
    expect(screen.getByTestId('searchBoxComponent')).toBeInTheDocument()
    expect(screen.getByTestId('breadcrumbComponent')).toBeInTheDocument()
    expect(screen.getByTestId('searchPage')).toBeInTheDocument()
    expect(screen.getByTestId('productListComponent')).toBeInTheDocument()
  })
  it('loads data', async () => {
    const mockedQueryProducts = await vitest.mocked(queryProducts)
    const mockRequestData = {
      author: {
        name: 'Arthur',
        lastname: 'Santos',
      },
      categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
      items: [
        {
          id: 'MLA1142512620',
          title: ' Moto G22 128 Gb  Cosmic Black 4 Gb Ram',
          price: {
            currency: 'ARS',
            amount: 47999,
            decimals: 47999,
            format: '$ 47.999,00',
          },
          picture: 'https://http2.mlstatic.com/D_854793-MLA50262132804_062022-N.jpg',
          condition: 'new',
          free_shipping: true,
        },
      ],
    }

    mockedQueryProducts.mockResolvedValueOnce(mockRequestData)

    const response = await getServerSideProps({
      query: {
        search: 'risos',
      },
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          query: 'risos',
          products: mockRequestData,
        },
      })
    )
  })
})
